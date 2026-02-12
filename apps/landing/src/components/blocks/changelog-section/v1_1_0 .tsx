import Link from 'next/link'

import TimelineItem from '@/components/timeline/timeline-items'
import Accordion from '@/components/badge-accordion/badge-accordion'
import { accordionDataV1_1_0 } from '@/assets/data/changelog-data'
import { Button } from '@/components/ui/button'
import CopyCode from '@/components/copy-code'

const zkSnarkExample = `// Phase 1: Simple zkSNARK circuit for genomic attribute verification
import { groth16 } from 'snarkjs';
import { buildBn128 } from 'ffjavascript';

// Circuit: Prove age > 18 without revealing exact age
const circuit = {
  template: "AgeVerification",
  inputs: ["age", "threshold"],
  output: "isValid"
};

// Generate proof
const { proof, publicSignals } = await groth16.fullProve(
  { age: patientAge, threshold: 18 },
  "circuits/age_verification.wasm",
  "circuits/age_verification.zkey"
);

// Verify on-chain without revealing age
const isValid = await groth16.verify(vKey, publicSignals, proof);
console.log("Age verification:", isValid ? "VALID" : "INVALID");`

function v1_1_0() {
  return (
    <div>
      <TimelineItem date='January 10, 2025' version='v 1.1.0'>
        <div className='space-y-4'>
          <div className='space-y-3'>
            <h3 className='text-xl font-semibold'>Phase 1: Private Blockchain Framework & Basic zkSNARK Integration</h3>
            <p className='text-muted-foreground text-sm'>
              Foundation release establishing the private blockchain network and implementing basic zkSNARK circuits for genomic attribute verification without revealing sensitive patient data.
            </p>
          </div>
          <div className='space-y-3'>
            <ul className='text-muted-foreground list-inside list-disc space-y-2 text-sm'>
              <li>Private blockchain network setup with configurable consensus mechanism</li>
              <li>Basic zkSNARK circuit for age/attribute verification</li>
              <li>Groth16 proof generation and verification system</li>
              <li>Initial smart contract deployment for access control</li>
              <li>Node configuration and peer-to-peer networking</li>
            </ul>
          </div>
          <div className='rounded-lg border p-4'>
            <p className='text-muted-foreground mb-3 text-sm font-medium'>Example: Simple zkSNARK Age Verification Circuit</p>
            <CopyCode code={zkSnarkExample} />
          </div>
          <p className='text-muted-foreground text-sm'>
            This phase establishes the cryptographic foundation using Groth16 zkSNARKs. The example demonstrates how to verify a patient&apos;s age meets a threshold (e.g., &gt;18) without revealing their actual age — a fundamental building block for privacy-preserving genomic data sharing.
          </p>
          <p className='text-muted-foreground text-sm'>
            The private blockchain ensures all proof verifications are recorded immutably while maintaining complete data privacy. This architecture supports future expansion to complex genomic attribute proofs.
          </p>
          <Button asChild>
            <Link href='#'>View Technical Documentation</Link>
          </Button>
          <Accordion data={accordionDataV1_1_0} />
        </div>
      </TimelineItem>
    </div>
  )
}

export default v1_1_0
