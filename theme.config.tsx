import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
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
