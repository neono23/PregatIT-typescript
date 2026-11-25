// Builds the cat homepage into dist/
// It works. Nobody said it was good.

import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { cats, type Cat } from "./cats.ts";

const out = "dist";
const colors = ["#f4a261", "#2a9d8f", "#e76f51", "#457b9d", "#e9c46a", "#8d99ae"];

// every cat gets its own picture file
function picture(fill: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <polygon points="10,26 16,4 30,18" fill="${fill}"/>
  <polygon points="54,26 48,4 34,18" fill="${fill}"/>
  <circle cx="32" cy="36" r="24" fill="${fill}"/>
  <circle cx="23" cy="32" r="4" fill="#222"/>
  <circle cx="41" cy="32" r="4" fill="#222"/>
  <polygon points="29,40 35,40 32,44" fill="#222"/>
  <path d="M32 44 Q28 50 24 46 M32 44 Q36 50 40 46" stroke="#222" stroke-width="2" fill="none"/>
</svg>
`;
}

function card(cat: Cat): string {
  return `
<li class="c${cat.id % colors.length}"><img src="img/c${cat.id % colors.length}.svg" alt="${cat.name}" width="64" height="64"><h3>${cat.name}</h3><p>${cat.quirk}</p><p>naps: ${cat.naps} hours a day</p></li>`;
}

rmSync(out, { recursive: true, force: true });
mkdirSync(`${out}/img`, { recursive: true });

colors.forEach((c, i) => {
  writeFileSync(`${out}/img/c${i}.svg`, picture(c));
});

const perPage = 20;
const pages: Cat[][] = [];
for (let i = 0; i < cats.length; i += perPage) {
  pages.push(cats.slice(i, i + perPage));
}

// page 0 is the homepage, the rest are page-2.html, page-3.html, ...
function fileName(n: number): string {
  return n === 0 ? "index.html" : `page-${n + 1}.html`;
}

function nav(): string {
  return `<nav>${pages.map((_, n) => `<a href="${fileName(n)}">${n + 1}</a>`).join(" ")}</nav>`;
}

function pageHtml(pageCats: Cat[], n: number): string {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>The cats - page ${n + 1}</title>
  <style>
    body { font-family: sans-serif; margin: 24px; }
    nav a { margin-right: 8px; }
    ul { list-style: none; padding: 0; margin: 0; }
    li { border: 2px solid; border-radius: 8px; padding: 8px; margin: 8px; width: 260px; height: 150px; float: left; }
    li p:last-child { font-weight: bold; }
${colors.map((c, i) => `    .c${i} { border-color: ${c}; }
    .c${i} h3 { color: ${c}; }`).join("\n")}
  </style>
</head>
<body>
  <h1>The cats</h1>
  ${nav()}
  <ul>${pageCats.map(card).join("")}
  </ul>
</body>
</html>
`;
}

pages.forEach((pageCats, n) => {
  writeFileSync(`${out}/${fileName(n)}`, pageHtml(pageCats, n));
});
console.log(`${cats.length} cats on ${pages.length} pages in ${out}/`);

