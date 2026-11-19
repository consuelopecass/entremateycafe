import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const buildDirectory = path.join(projectRoot, 'dist')
const productionDirectory = path.join(projectRoot, 'production-cpanel-entremate')
const assetDirectory = path.join(buildDirectory, 'assets')
const siteUrl = (process.env.SITE_URL || '').trim().replace(/\/+$/, '')

if (siteUrl) {
  const parsedSiteUrl = new URL(siteUrl)
  if (parsedSiteUrl.protocol !== 'https:' || parsedSiteUrl.pathname !== '/') {
    throw new Error('SITE_URL debe ser el origen HTTPS del dominio final, sin una ruta adicional.')
  }
}

if (!fs.existsSync(path.join(buildDirectory, 'index.html')) || !fs.existsSync(assetDirectory)) {
  throw new Error('No existe dist/ listo. Ejecuta npm run build:cpanel para prepararlo.')
}

if (fs.existsSync(productionDirectory)) {
  fs.rmSync(productionDirectory, { recursive: true, force: true })
}
fs.mkdirSync(productionDirectory, { recursive: true })
fs.cpSync(assetDirectory, path.join(productionDirectory, 'assets'), { recursive: true, force: true })

let indexHtml = fs.readFileSync(path.join(buildDirectory, 'index.html'), 'utf8')
if (siteUrl) {
  indexHtml = indexHtml
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${siteUrl}/" />`)
    .replace(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${siteUrl}/og-image.png" />`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${siteUrl}/" />`)
  fs.copyFileSync(path.join(buildDirectory, 'og-image.png'), path.join(productionDirectory, 'og-image.png'))
  fs.writeFileSync(path.join(productionDirectory, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}/</loc>\n    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>\n  </url>\n</urlset>\n`)
} else {
  indexHtml = indexHtml
    .replace(/^\s*<meta property="og:url"[^>]*>\s*\n/gm, '')
    .replace(/^\s*<meta property="og:image"[^>]*>\s*\n/gm, '')
    .replace(/^\s*<meta property="og:image:alt"[^>]*>\s*\n/gm, '')
    .replace(/^\s*<link rel="canonical"[^>]*>\s*\n/gm, '')
    .replace('content="summary_large_image"', 'content="summary"')
}

fs.writeFileSync(path.join(productionDirectory, 'index.html'), indexHtml)
const robots = ['User-agent: *', 'Allow: /']
if (siteUrl) robots.push(`Sitemap: ${siteUrl}/sitemap.xml`)
fs.writeFileSync(path.join(productionDirectory, 'robots.txt'), `${robots.join('\n')}\n`)

const files = []
function collectFiles(directory, prefix = '') {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const relativePath = path.posix.join(prefix, entry.name)
    if (entry.isDirectory()) collectFiles(path.join(directory, entry.name), relativePath)
    else files.push(relativePath)
  }
}
collectFiles(productionDirectory)

console.log(`Producción cPanel lista: ${productionDirectory}`)
console.log(files.sort().map((file) => `- ${file}`).join('\n'))
console.log(siteUrl
  ? `Canonical, Open Graph y sitemap configurados para ${siteUrl}`
  : 'Canonical y sitemap omitidos: falta confirmar el dominio público definitivo.')
