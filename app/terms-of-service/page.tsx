import { getTeamsOfService } from '@/lib/newt';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TeamsOfService',
};

export default async function Page() {
  const teamsOfService = await getTeamsOfService();

  if (!teamsOfService) return;

  return (
    <section className='col-span-3 my-16'>
      <div className='prose mx-auto my-8'>
        <div
          dangerouslySetInnerHTML={{
            __html: `${teamsOfService.body}`,
          }}
        />
      </div>
    </section>
  );
}
