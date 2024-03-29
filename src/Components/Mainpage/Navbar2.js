import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import "../Style/Navbar.css"
function Navbar2() {
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
               <li><a href='/expertise'>vCMO</a></li>
               <li><a href='/expertise'>Expertise</a></li>

                <li><a href='#nav1'>What we are</a></li>
                <li><a href='#nav2'>What we do</a></li>
                <li><a href='#nav3'>Team</a></li>
                <li><a href='#nav4'>Contact</a></li>
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
            <li><a href='/expertise'>vCMO</a></li>
               <li><a href='/expertise'>Expertise</a></li>
            <li><a href='#nav1'>What we are</a></li>
                <li><a href='#nav2'>What we do</a></li>
                <li><a href='#nav3'>Team</a></li>
                <li><a href='#nav4'>Contact</a></li>
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

export default Navbar2