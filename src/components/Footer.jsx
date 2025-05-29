export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='p-5 bg-black text-slate-400 text-center'>
      Copyright © {year} Don Nguyen. All rights reserved.
    </footer>
  )
}
