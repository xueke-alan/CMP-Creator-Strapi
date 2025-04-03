import * as React from 'react';

import { Flex, Grid, Main } from '@strapi/design-system';
import { useIntl } from 'react-intl';

import { Layouts } from '../../components/Layouts/Layout';
import { Page } from '../../components/PageHelpers';
import { useEnterprise } from '../../ee';
import { useAuth } from '../../features/Auth';

import { LastEditedWidget, LastPublishedWidget } from './components/ContentManagerWidgets';
import { GuidedTour } from './components/GuidedTour';

/* -------------------------------------------------------------------------------------------------
 * HomePageCE
 * -----------------------------------------------------------------------------------------------*/

const HomePageCE = () => {
  const { formatMessage } = useIntl();
  const user = useAuth('HomePageCE', (state) => state.user);
  const displayName = user?.firstname ?? user?.username ?? user?.email;

  return (
    <Main>
      <Page.Title>
        {formatMessage({ id: 'HomePage.head.title', defaultMessage: 'Homepage' })}
      </Page.Title>
      <Layouts.Header
        title={formatMessage(
          { id: 'HomePage.header.title', defaultMessage: 'Hello {name}' },
          { name: displayName }
        )}
        subtitle={formatMessage({
          id: 'HomePage.header.subtitle',
          defaultMessage: 'Welcome to your administration panel',
        })}
      />
      <Layouts.Content>
        <Flex direction="column" alignItems="stretch" gap={8} paddingBottom={10}>
          <GuidedTour />
          <iframe src="https://maddening-sloop-dc2.notion.site/ebd/c1f8076cd20c459c9ce386c64e2563cc" width="100%" height="800" frameborder="0" allowfullscreen />
          <Grid.Root gap={5}>
            <Grid.Item col={6} s={12}>
              <LastEditedWidget />
            </Grid.Item>
            <Grid.Item col={6} s={12}>
              <LastPublishedWidget />
            </Grid.Item>
          </Grid.Root>
        </Flex>
      </Layouts.Content>
    </Main>
  );
};

/* -------------------------------------------------------------------------------------------------
 * HomePage
 * -----------------------------------------------------------------------------------------------*/

const HomePage = () => {
  const Page = useEnterprise(
    HomePageCE,
    // eslint-disable-next-line import/no-cycle
    async () => (await import('../../../../ee/admin/src/pages/HomePage')).HomePageEE
  );

  // block rendering until the EE component is fully loaded
  if (!Page) {
    return null;
  }

  return <Page />;
};

export { HomePage, HomePageCE };
