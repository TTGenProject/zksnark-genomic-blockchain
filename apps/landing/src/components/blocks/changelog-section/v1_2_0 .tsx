import TimelineItem from '@/components/timeline/timeline-items'
import Accordion from '@/components/badge-accordion/badge-accordion'
import CopyCode from '@/components/copy-code-block/copy-code-block'
import { accordionDataV1_2_0 } from '@/assets/data/changelog-data'

function v1_2_0() {
  return (
    <div>
      <TimelineItem date='March 22, 2025' version='v 1.2.0'>
        <div className='space-y-4'>
          <h3 className='text-xl font-semibold'>zkSNARK Genomic Data Sharing on Sui Network with Walrus & Seal</h3>
          <p className='text-muted-foreground text-sm'>
            Full integration with Sui blockchain network, Walrus distributed storage, and Seal role-based access control. Zero-knowledge proofs enable privacy-preserving genomic data sharing while maintaining regulatory compliance (GDPR, HIPAA).
          </p>
          <div className='space-y-3'>
            <ul className='text-muted-foreground list-inside list-disc space-y-3 text-sm'>
              <li>Sui Network smart contracts for on-chain proof verification and access policies</li>
              <li>Walrus distributed storage for encrypted genomic data with high availability</li>
              <li>Seal-based role access control for researchers, clinicians, and data providers</li>
              <li>Next.js dashboard for real-time monitoring of data access and proof verification</li>
            </ul>
            <div className='fle-wrap flex items-center gap-4'>
              {/* Sui Network */}
              <div className='flex items-center gap-1.5 rounded-md bg-sky-600/10 px-3 py-1 dark:bg-sky-400/10'>
                <img src='/images/sui-logo.webp' alt='Sui Network' className='h-4.5' />
                <span className='text-xs font-medium'>Sui</span>
              </div>
              {/* Walrus Storage */}
              <div className='flex items-center gap-1.5 rounded-md bg-teal-600/10 px-3 py-1 dark:bg-teal-400/10'>
                <img src='/images/walrus-logo.webp' alt='Walrus Storage' className='h-4.5' />
                <span className='text-xs font-medium'>Walrus</span>
              </div>
              {/* Seal Access Control */}
              <div className='flex items-center gap-1.5 rounded-md bg-indigo-600/10 px-3 py-1 dark:bg-indigo-400/10'>
                <img src='/images/seal-logo.webp' alt='Seal Access Control' className='h-4.5' />
                <span className='text-xs font-medium'>Seal</span>
              </div>
              {/* Next.js */}
              <div className='flex items-center gap-1.5 rounded-md bg-neutral-600/10 px-3 py-1 dark:bg-neutral-400/10'>
                <img src='/images/nextjs-logo.webp' alt='Next.js' className='h-4.5' />
                <span className='text-xs font-medium'>Next.js</span>
              </div>
            </div>
          </div>
          <CopyCode />
          <p className='text-muted-foreground text-sm'>
            The TTGen Platform leverages Sui Network for fast, secure on-chain verification, Walrus for decentralized genomic data storage, and Seal for fine-grained access control. Researchers can verify genomic attributes without accessing raw data, ensuring patient privacy while enabling collaborative research across institutions.
          </p>
          <Accordion data={accordionDataV1_2_0} />
        </div>
      </TimelineItem>
    </div>
  )
}

export default v1_2_0
