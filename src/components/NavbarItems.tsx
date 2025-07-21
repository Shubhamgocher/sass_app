"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
const navIems=[
    {label:'Home',href:'/'},
    {label:'Companions',href:'/companions'},
    {label:'My-journey',href:'/my-journey'}
]
const NavbarItems = () => {
    const pathname=usePathname();
  return (
    <nav className='flex items-center gap-4'>
        {
            navIems.map(({label,href})=>(
                <Link href={href} key={label} className={pathname===href?'text-primary font-semibold':''} >
                    {label}
                </Link>
            ))
        }
    </nav>
  )
}

export default NavbarItems
