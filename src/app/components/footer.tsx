import React from 'react'

export const Footer = () => {
  return (
    <div className='px-6 mt-40 max-w-4xl mx-auto py-10 flex text-neutral-300 items-center justify-between gap-5 border-t border-neutral-600'>
        <div>made with love by <a className='hover:text-lime-200 text-neutral-200' target='_blank' href="https://abhaydesu.vercel.app">Abhay</a></div>
        <div className='flex gap-6 lg:gap-10'>
            <a className='hover:text-lime-200' target='_blank' href="https://www.linkedin.com/in/abhaydesu/">linkedin</a>
            <a className='hover:text-lime-200' target='_blank' href="https://github.com/abhaydesu/">github</a>
            <a className='hover:text-lime-200' target='_blank' href="https://x.com/abhaydesu">x</a>
        </div>
    </div>
  )
}