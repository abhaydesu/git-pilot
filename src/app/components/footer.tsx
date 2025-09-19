import React from 'react'

export const Footer = () => {
  return (
    <div className='px-120 mt-40 flex text-neutral-300 items-center justify-between gap-5 bg-neutral-950/80 backdrop-blur-sm h-30'>
        <div>made with <span className='text-lime-200'> love</span> by Abhay</div>
        <div className='flex gap-10 '>
        <a className='hover:text-lime-200' target='_blank' href="https://www.linkedin.com/in/abhaydesu/">linkedin</a>
        <a className='hover:text-lime-200' target='_blank' href="https://github.com/abhaydesu/">github</a>
        <a className='hover:text-lime-200' target='_blank' href="https://x.com/abhaydesu">x</a>
        </div>
        
    </div>
  )
}
