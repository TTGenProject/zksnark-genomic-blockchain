import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  basePath: process.env.BASEPATH ?? '',
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  turbopack: {
    root: path.resolve(__dirname)
  }
}

export default nextConfig
