import { HomeLayout } from '@/components/layout/home';
import { baseOptions } from '@/lib/layout.shared';
import Link from 'fumadocs-core/link';
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from 'fumadocs-ui/layouts/home/navbar';
import { BugIcon, Globe, SettingsIcon, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Layout({ children }: LayoutProps<'/'>) {
  return <HomeLayout
    {...baseOptions()}
    links={[
            {
              type: 'menu',
              text: 'Documentation',
              on: 'menu',
              items: [
                {
                  text: 'API',
                  url: '/docs/api/websocket',
                  icon: <Globe />
                },
                {
                  text: 'Configuration',
                  url: '/docs/configuration',
                  icon: <SettingsIcon />
                },
                {
                  text: 'Troubleshooting',
                  url: '/docs/troubleshooting',
                  icon: <BugIcon />
                }
              ]
            },
            {
              type: 'main',
              text: 'Updates',
              url: '/blog',
              on: 'menu',
              icon: <Sparkles />,
            },
            {
              type: 'custom',
              // only displayed on navbar, not mobile menu
              on: 'nav',
              children: (
                <NavbarMenu>
                  <NavbarMenuTrigger>
                    <Link href="/docs">Documentation</Link>
                  </NavbarMenuTrigger>
                  <NavbarMenuContent>
                    <NavbarMenuLink href="/docs" className="md:row-span-2">
                      <div className="-mx-3 -mt-3">
                        <Image
                          src="https://github.com/1Lucas1apk/lab/blob/master/mwc2h6q%20-%20Imgur.png?raw=true"
                          alt="Nodelink Preview Banner"
                          className="rounded-t-lg object-cover w-full h-auto"
                          style={{
                            maskImage:
                              'linear-gradient(to bottom,white 60%,transparent)',
                          }}
                          width={100}
                          height={100}
                          unoptimized={true}
                        />
                      </div>
                      <p className="font-medium">Introduction to Nodelink</p>
                      <p className="text-fd-muted-foreground text-sm">Learn to Use Nodelink</p>
                    </NavbarMenuLink>

                    <NavbarMenuLink href="/docs/api/websocket" className="lg:col-start-2">
                        <Globe className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />

                        <p className="font-medium">API</p>
                        <p className="text-fd-muted-foreground text-sm">
                          API Documentation - NodeLink Additions & Differences
                        </p>
                    </NavbarMenuLink>

                    <NavbarMenuLink href="/docs/configuration" className="lg:col-start-2">
                        <SettingsIcon className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />

                        <p className="font-medium">Configuration</p>
                        <p className="text-fd-muted-foreground text-sm">
                          Configuration settings for the server instance.
                        </p>
                    </NavbarMenuLink>
                    <NavbarMenuLink href="/blog" className="lg:col-start-3 lg:row-start-1">
                        <Sparkles className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                        <p className="font-medium">Updates</p>
                        <p className="text-fd-muted-foreground text-sm">
                          Latest news and releases for NodeLink.
                        </p>
                    </NavbarMenuLink>
                    <NavbarMenuLink
                      href="/docs/troubleshooting"
                      className="lg:col-start-3 lg:row-start-2"
                      style={{
                        background: 'radial-gradient(ellipse at center, #3d2914 0%, #2a1810 30%, #1a0f0a 60%, #0d0806 100%)'
                      }}
                    >
                        <BugIcon className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />

                        <p className="font-medium">Troubleshooting</p>
                        <p className="text-fd-muted-foreground text-sm">
                          Common issues and how to fix them (Programmed by humans!)
                        </p>
                    </NavbarMenuLink>
                  </NavbarMenuContent>
                </NavbarMenu>
              ),
            },
            // other items

          ]}
  >
    {children}
  </HomeLayout>;
}
