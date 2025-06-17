export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
import { AnalyticsComponent } from '@gitroom/frontend/components/analytics/analytics.component';
import { PlatformAnalytics } from '@gitroom/frontend/components/platform-analytics/platform.analytics';
export const metadata: Metadata = {
  title: `SomaPost Analytics`,
  description: '',
};
export default async function Index() {
  return <AnalyticsComponent />;
}
