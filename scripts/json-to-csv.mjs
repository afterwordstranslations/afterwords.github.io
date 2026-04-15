#!/usr/bin/env node

/**
 * Converts locale JSON files to a CSV for review in Google Sheets.
 * Usage: node scripts/json-to-csv.mjs > translations.csv
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const en = JSON.parse(readFileSync(resolve(root, "messages/en.json"), "utf-8"));
const el = JSON.parse(readFileSync(resolve(root, "messages/el.json"), "utf-8"));

function flatten(obj, prefix = "") {
  const entries = [];
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      entries.push(...flatten(value, path));
    } else {
      entries.push([path, String(value)]);
    }
  }
  return entries;
}

function escapeCsv(str) {
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

const enEntries = flatten(en);
const elMap = Object.fromEntries(flatten(el));

console.log("Key,English,Greek");
for (const [key, enValue] of enEntries) {
  const elValue = elMap[key] ?? "";
  console.log(`${escapeCsv(key)},${escapeCsv(enValue)},${escapeCsv(elValue)}`);
}
