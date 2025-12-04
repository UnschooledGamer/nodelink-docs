import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { TroubleshootingCard } from '@/components/troubleshooting-card';
import { InfoCard } from '@/components/info-card';
import { ApiCard, ApiSection, ApiSchema } from '@/components/api-ui';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    TroubleshootingCard,
    InfoCard,
    ApiCard,
    ApiSection,
    ApiSchema,
    ...components,
  };
}
