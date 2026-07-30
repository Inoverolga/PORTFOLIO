const fs = require("fs");
const path = require("path");

console.log("Исправление путей в build/...");

const fixPaths = () => {
    const buildPath = path.join(__dirname, "build");

    // 1. Исправляем index.html
    const indexPath = path.join(buildPath, "index.html");
    let html = fs.readFileSync(indexPath, "utf8");
    html = html.replace(/"\/static\//g, '"./static/');
    fs.writeFileSync(indexPath, html);

    // 2. Исправляем manifest.json
    const manifestPath = path.join(buildPath, "asset-manifest.json");
    let manifest = fs.readFileSync(manifestPath, "utf8");
    manifest = manifest.replace(/\"\/static\//g, '"./static/');
    fs.writeFileSync(manifestPath, manifest);

    console.log("Пути успешно исправлены!");
};

fixPaths();
