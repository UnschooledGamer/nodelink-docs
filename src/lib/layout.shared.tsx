import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'NodeLink',
    },
    githubUrl: "https://github.com/performanC/nodelink",
    links: [{
      type: "main",
      url: "/docs",
      text: "Docs",
      description: "Documentation for NodeLink"
    }]
  };
}
