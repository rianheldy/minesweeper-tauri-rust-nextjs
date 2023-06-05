import Image from 'next/image'
//import styles from './page.module.css'

export default function Home() {
  return (
    <main className='relative'>
      <section className='transition-all relative w-72 shadow-myboxshadow rounded-2xl z-10'>
        <header className='relative bg-[rgba(255,255,255,.2)] pt-7 pb-3 pl-7 pr-7 text-right rounded-tl-2xl rounded-tr-2xl backdrop-blur-2xl shadow-header-shadow'>
          <div className='text-xl mb-1'>5874 + 2123</div>
        </header>
      </section>
    </main>
  )
}
