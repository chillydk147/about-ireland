const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-section-directory-js": hot(preferDefault(require("C:\\Users\\DavidMcQuillan\\Dropbox\\VSCode\\about-ireland\\src\\templates\\section-directory.js"))),
  "component---src-templates-section-js": hot(preferDefault(require("C:\\Users\\DavidMcQuillan\\Dropbox\\VSCode\\about-ireland\\src\\templates\\section.js"))),
  "component---src-templates-section-directory-content-js": hot(preferDefault(require("C:\\Users\\DavidMcQuillan\\Dropbox\\VSCode\\about-ireland\\src\\templates\\section-directory-content.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\DavidMcQuillan\\Dropbox\\VSCode\\about-ireland\\.cache\\dev-404-page.js"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("C:\\Users\\DavidMcQuillan\\Dropbox\\VSCode\\about-ireland\\src\\pages\\index.jsx")))
}

