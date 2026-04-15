#!/usr/bin/env node

/**
 * Converts a CSV (exported from Google Sheets) back to locale JSON files.
 * Usage: node scripts/csv-to-json.mjs translations.csv
 *
 * The CSV must have columns: Key, English, Greek
 * Outputs updated messages/en.json and messages/el.json
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const csvFile = process.argv[2];
if (!csvFile) {
  console.error("Usage: node scripts/csv-to-json.mjs <translations.csv>");
  process.exit(1);
}

// Simple CSV parser that handles quoted fields with commas and newlines
function parseCsv(text) {
  const rows = [];
  let current = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ",") {
        current.push(field);
        field = "";
      } else if (char === "\n") {
        current.push(field);
        field = "";
        if (current.length > 1) rows.push(current);
        current = [];
      } else if (char === "\r") {
        // skip
      } else {
        field += char;
      }
    }
  }
  // Last field/row
  if (field || current.length > 0) {
    current.push(field);
    if (current.length > 1) rows.push(current);
  }

  return rows;
}

const csv = readFileSync(csvFile, "utf-8");
const rows = parseCsv(csv);

// Skip header row
const dataRows = rows.slice(1);

function unflatten(entries) {
  const result = {};
  for (const [key, value] of entries) {
    const parts = key.split(".");
    let current = result;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!(parts[i] in current)) {
        current[parts[i]] = {};
      }
      current = current[parts[i]];
    }
    current[parts[parts.length - 1]] = value;
  }
  return result;
}

const enEntries = [];
const elEntries = [];

for (const row of dataRows) {
  const [key, enValue, elValue] = row;
  if (!key) continue;
  enEntries.push([key, enValue ?? ""]);
  elEntries.push([key, elValue ?? ""]);
}

const enJson = unflatten(enEntries);
const elJson = unflatten(elEntries);

writeFileSync(
  resolve(root, "messages/en.json"),
  JSON.stringify(enJson, null, 2) + "\n",
  "utf-8"
);
writeFileSync(
  resolve(root, "messages/el.json"),
  JSON.stringify(elJson, null, 2) + "\n",
  "utf-8"
);

console.log(`Updated messages/en.json (${enEntries.length} keys)`);
console.log(`Updated messages/el.json (${elEntries.length} keys)`);
