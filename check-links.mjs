// Sayfadaki tüm dış linkleri kontrol eder
// Kullanım: node check-links.mjs
import { readFileSync } from "fs";

const html = readFileSync("index.html", "utf8");
const linkRegex = /href="(https?:\/\/[^"]+)"/g;
const links = [...html.matchAll(linkRegex)].map((m) => m[1]);

let hepsiOk = true;

for (const url of links) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    const durum = res.ok ? "✅" : "❌";
    if (!res.ok) hepsiOk = false;
    console.log(`${durum} ${res.status} ${url}`);
  } catch {
    console.log(`❌ HATA ${url}`);
    hepsiOk = false;
  }
}

if (hepsiOk) {
  console.log("\nTüm linkler çalışıyor.");
} else {
  console.log("\nKırık link var!");
  process.exit(1);
}
