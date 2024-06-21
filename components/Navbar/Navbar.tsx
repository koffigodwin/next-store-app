import React from 'react'
import Logo  from './Logo'
import  LinksDropdown  from './LinksDropdown'
import NavSearch  from './NavSearch'
import Darkmode from './Darkmode'
import  CartButton  from './CartButton'
import Container from '../global/Container'
import { Suspense } from 'react'

const Navbar = () => {
  return (
    <nav className='border-b '>
      <Container className='flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
        <Logo />
       <Suspense>
       <NavSearch />
        </Suspense> 
        <div className='flex gap-4 items-center '>
          <CartButton />
          <Darkmode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
