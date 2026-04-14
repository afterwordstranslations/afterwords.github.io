/** Build the contact email client-side to deter scrapers. */
export function getEmail(): string {
  const user = ["in", "fo"].join("");
  const domain = ["after", "words"].join("") + "." + ["g", "r"].join("");
  return `${user}@${domain}`;
}
