// 01 — Hello, who?
// Make the tests in greet.test.js green. Run them with: node --test

export function greet(name: string = ""): string {
  const trimmed = name.trim();
  if (trimmed === "") return "Hello, stranger!";

  const formatted = trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
  return "Hello, " + formatted + "!";
}
