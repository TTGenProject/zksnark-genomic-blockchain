import Image from 'next/image'

const Logo = () => {
  return (
    <div className='flex items-center gap-3'>
      <Image
        src='/logo/GS-informatique-h_0.png'
        alt='GS Informatique Logo'
        width={160}
        height={160}
        className='h-8 w-auto'
        unoptimized
      />
      <Image
        src='/logo/logo_ibiscsaclay.png'
        alt='IBISC Saclay Logo'
        width={160}
        height={160}
        className='h-8 w-auto'
        unoptimized
      />
    </div>
  )
}

export default Logo
