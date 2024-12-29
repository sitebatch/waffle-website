import nextra from 'nextra'
 
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: '/waffle-website'
}

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})

export default withNextra(nextConfig)
