export const faqItems = [
  {
    question: 'How can I access genomic data without revealing my identity?',
    answer:
      'Our platform uses zkSNARK zero-knowledge proofs to verify your credentials and access rights without exposing your identity. You authenticate through Seal access control, which validates your role (researcher, clinician, etc.) cryptographically. The genomic provider only sees proof that you are authorized, never your personal information.'
  },
  {
    question: 'What guarantees do I have that my queries remain private?',
    answer:
      'All queries are processed using zero-knowledge proofs on the Sui blockchain. Your search criteria and accessed data are encrypted and stored on Walrus distributed storage. The provider cannot see what specific genomic attributes you are searching for — they only verify that your proof is valid and you have the required permissions.'
  },
  {
    question: 'How do I verify the genomic data is authentic without seeing the raw data?',
    answer:
      'zkSNARK proofs allow you to verify specific attributes of genomic data (e.g., presence of certain markers, age ranges, ancestry) without accessing the raw sequence. The proof mathematically guarantees the data meets your criteria. All proofs are recorded on-chain for auditability without compromising patient privacy.'
  },
  {
    question: 'What access roles are available and how are they enforced?',
    answer:
      'Seal provides role-based access control with predefined roles: Researcher (aggregate data access), Clinician (patient-linked access with consent), Data Provider (upload and manage), and Auditor (compliance monitoring). Each role has specific permissions enforced by smart contracts on Sui Network — no manual intervention required.'
  },
  {
    question: 'How is my consent managed when sharing my genomic data?',
    answer:
      'Consent is managed through smart contracts on Sui blockchain. You define granular permissions: which attributes can be queried, by which roles, for how long, and for what purpose. You can revoke consent at any time, and all access attempts are logged immutably. Your raw genomic data never leaves Walrus storage without your explicit cryptographic approval.'
  }
]
