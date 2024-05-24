/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    // output: 'export',
    // reactStrictMode: true,
    // distDir: "build",
    // output: "export"
    env: {
      SMTP_EMAIL: process.env.SMTP_EMAIL,
      SMTP_PASSWORD: process.env.SMTP_PASSWORD

    }
  }
   
  module.exports = nextConfig