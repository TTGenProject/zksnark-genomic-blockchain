import CopyCode from '@/components/copy-code'

const codeExample = `// zkSNARK-based genomic data sharing with role-based access control
import { GenomicProver } from '@ttgenproject/zksnark-genomic';

const genomicAccess = new GenomicProver({
  privacyLevel: "zero-knowledge",
  accessControl: "role-based",
  blockchain: "private-chain",
});

// Generate proof without revealing genomic data
const proof = await genomicAccess.generateProof({
  genomicData: encryptedSequence,
  allowedRoles: ["researcher", "clinician"],
});`

export default function CopyCodeBlock() {
  return (
    <div>
      <CopyCode code={codeExample} />
    </div>
  )
}
