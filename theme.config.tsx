import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  head: () => (
    <>
      <title>Waffle</title>
      <meta
        name="description"
        content="Waffle is a library that provides in-app WAF (Web Application Firewall) and RASP (Runtime Application Self Protection) capabilities for your Go web applications."
      />
      <meta name="author" content="Kohei Morita" />
    </>
  ),
  logo: <span>Waffle</span>,
  project: {
    link: "https://github.com/sitebatch/waffle-go",
  },
  docsRepositoryBase: "https://github.com/sitebatch/waffle-website",
  footer: {
    content: (
      <span>
        <a href="https://github.com/sitebatch" target="_blank">
          sitebatch
        </a>
      </span>
    ),
  },
};

export default config;
