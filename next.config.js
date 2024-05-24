/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    // output: 'export',

    // reactStrictMode: true,
    // distDir: "build",
    // output: "export"

    // distDir: "build"
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
   
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
   
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
    env: {
      SMTP_EMAIL: process.env.SMTP_EMAIL,
      SMTP_PASSWORD: process.env.SMTP_PASSWORD

    }

  }
   
  module.exports = nextConfig