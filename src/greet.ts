// 01 — Hello, who?
// Make the tests in greet.test.js green. Run them with: node --test

export function greet(name) {
  if (name) return "Hello, " + name + "!";
  return "Hello, stranger!";

  const trimmed = typeof name === "string" ? name.trim() : "";
  if (trimmed === "") return "Hello, stranger!";
  const formatted = trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
  return "Hello, " + formatted + "!";
}
