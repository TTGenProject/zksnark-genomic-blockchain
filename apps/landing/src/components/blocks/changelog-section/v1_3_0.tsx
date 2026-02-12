import TimelineItem from '@/components/timeline/timeline-items'
import Accordion from '@/components/badge-accordion/badge-accordion'
import { accordionDataV1_3_0 } from '@/assets/data/changelog-data'

function v1_3_0() {
  return (
    <div>
      <TimelineItem date='July 31, 2026' version='v 1.3.0'>
        <div className='space-y-4'>
          <div className='space-y-3'>
            <h3 className='text-xl font-semibold'>Genomic Data Provider Unified Interface Management (Beta)</h3>
            <p className='text-muted-foreground text-sm'>
              We’re planning Management Dashboard Interface for Genomic Data Providers with aggregated data insights 
              (access role request lists, authorized data access request lists, genomic data summaries).
            </p>
          </div>
          <div className='space-y-3'>
            <p className='font-medium'>Now authorized genomic providers can:</p>
            <ul className='text-muted-foreground list-inside list-disc space-y-3 text-sm'>
              <li>Update genomic data summaries (collected genome files) </li>
              <li>Track authorized data access requests</li>
              <li>Automatically request for any role-based data access and manage approvals</li>
            </ul>
          </div>
          <img src='/images/image-1.webp' alt='Component Sync Demo' />
          <Accordion data={accordionDataV1_3_0} />
        </div>
      </TimelineItem>
    </div>
  )
}

export default v1_3_0
