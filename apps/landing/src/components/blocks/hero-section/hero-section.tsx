import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function HeroSection() {
  return (
    <section id='home' className='-mt-17.5 pt-17.5'>
      <div className='space-y-4 px-4 py-8 text-center md:px-8 md:py-16'>
        <Badge className='text-sm font-normal' variant='outline'>
          TTGen Project
        </Badge>
        <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Reliable Genomic Data Sharing Ecosystem</h2>
        <p className='text-muted-foreground text-xl'>TTGen project is a decentralized platform for secure genomic data sharing powered by Sui blockchain network, 
            in the integration with efficient double-dimensional Walrus storage and role-based Seal access control. Our mission is to ensure equally innovative treatment and research opportunities for all with total genomic consumer identity anonymization by ZK-Snark circuits.</p>
        <div className='mx-auto flex max-w-sm gap-3 max-sm:flex-col max-sm:items-center'>
          <Input type='text' placeholder='Enter institution email' className='bg-background h-10 flex-1' />
          <Button size='lg' className='rounded-lg text-base max-sm:w-full'>
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
