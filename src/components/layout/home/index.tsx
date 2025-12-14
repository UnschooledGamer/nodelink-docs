import type { ComponentProps } from 'react';
import { cn } from '../../../lib/cn';
import { type BaseLayoutProps, type NavOptions } from '../shared';
import { Header } from './client';

export interface HomeLayoutProps extends BaseLayoutProps {
  nav?: Partial<
    NavOptions & {
      /**
       * Open mobile menu when hovering the trigger
       */
      enableHoverToOpen?: boolean;
    }
  >;
}

export function HomeLayout(props: HomeLayoutProps & ComponentProps<'main'>) {
  const {
    nav = {},
    links,
    githubUrl,
    i18n,
    themeSwitch = {},
    searchToggle,
    ...rest
  } = props;

  return (
    <main
      id="nd-home-layout"
      {...rest}
      className={cn(
        'flex flex-1 flex-col [--fd-layout-width:92%] xl:[--fd-layout-width:1200px] 2xl:[--fd-layout-width:1400px] 3xl:[--fd-layout-width:1600px] 4k:[--fd-layout-width:2000px]',
        rest.className,
      )}
    >
      {nav.enabled !== false &&
        (nav.component ?? (
          <Header
            links={links}
            nav={nav}
            themeSwitch={themeSwitch}
            searchToggle={searchToggle}
            i18n={i18n}
            githubUrl={githubUrl}
          />
        ))}
      {props.children}
    </main>
  );
}
