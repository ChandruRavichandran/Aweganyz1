import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import "../Style/Navbar.css"
function Navbar() {
    const [isOpen, setOpen] = useState(false)
    // const [isOpen1, setOpen1] = useState(false)

  return (
 <>
<div className='Navbar'>
    <div className='NavbarInner'>
        <div className='nn1'>
            <a href='/'> Aweganyz</a>
         </div>
        <div>
            <ul>
               <li><a href='/'>vCMO</a></li>
               <li><a href='/'>Expertise</a></li>

                <li><a href='/'>What we are</a></li>
                <li><a href='/'>What we do</a></li>
                <li><a href='/'>Team</a></li>
                <li><a href='/'>Contact</a></li>
            </ul>
            <div className='Hamburger'>
           <Hamburger toggled={isOpen} toggle={setOpen}  />
            </div>
        </div>
    </div>
<div>
    {
        isOpen && <div className='NavbarMobile'>
            <ul>
            <li><a href='/'>vCMO</a></li>
               <li><a href='/'>Expertise</a></li>
            <li><a href='/'>What we are</a></li>
                <li><a href='/'>What we do</a></li>
                <li><a href='/'>Team</a></li>
                <li><a href='/'>Contact</a></li>
            </ul>
            <div className='Hamburger2 '>
            {/* <Hamburger toggled={isClose} toggle={setClose}  /> */}

           <Hamburger toggled={isOpen} toggle={setOpen}  />
            </div>
        </div>
    }
</div>
</div>
 </>
  )
}

export default Navbar