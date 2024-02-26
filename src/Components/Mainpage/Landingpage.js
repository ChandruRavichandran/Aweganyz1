import React, { useEffect, useRef, useState } from 'react'
import "../Style/Landingpage.css"
import Navbar from './Navbar'
import { datasinner } from './Datas'
import Navbar2 from './Navbar2'

const Landingpage = () => {

  const [test, settest] = useState(false)
  const [brand, setbrand] = useState([datasinner[0]])
  console.log(brand, "brading");


  const Changecontentevent = (datas) => {
    settest(true)
    const filterData = datasinner.filter((item) => item.name === datas.name);
    setbrand(filterData)


  }


  const [show,setShow]=useState(false)
  const [show1,setShow1]=useState(false)
  const [show2,setShow2]=useState(false)
  const [show3,setShow3]=useState(false)
  const [show4,setShow4]=useState(false)


  const Showname =()=>{
    if (show == true){
      setShow(false)
    }
    else{
      setShow(true)
    }
  }
    const Showname1 =()=>{
      if (show1 == true){
        setShow1(false)
      }
      else{
        setShow1(true)
      }
    }
    const Showname2 =()=>{
      if (show2 == true){
        setShow2(false)
      }
      else{
        setShow2(true)
      }
    }

    const Showname3 =()=>{
      if (show3 == true){
        setShow3(false)
      }
      else{
        setShow3(true)
      }
    }

    const Showname4 =()=>{
      if (show4 == true){
        setShow4(false)
      }
      else{
        setShow4(true)
      }
    }

  return (
     <>
       <Navbar2/>
       <div className='aw1'>
             <div className='aw2'>
                      {/* <div className='border1'>
                      <div className='border2'>
                            
                        </div>
                      </div> */}
                       
                  <div className='con1'>
                    <div className='con11'>Crafted by adept strategists, designers and growth hackers. </div>
                    <div className='con12'>We help <span className='span1'> startup & growth-stage </span>entrepreneurs grow through effective strategies,<br></br> designs & systems backed by technology.</div>
                    
                    <a href='https://calendly.com/aweganyz/30min'>
                    <div className='con13'>
                     <img src='./img/A3.svg' className='con14'></img>
                      <a className='con15' >Let's catch up</a>
                     <img src='./img/A2.svg' className='con16'></img>
                    </div>
                        </a>
                  </div>
                  <div className='line1'>
              
              <img src='./img/A32.svg'  className='img1'></img>
              <img src='./img/A33.svg'  className='img2'></img>

            </div>

                  <div className='con2' id='nav1'>
                   <div className='con21'>
                    <img src='./img/A4.svg' className='con22'></img>
                      <a className='con23'>What we are</a>
                   </div>
                   {/* <div className='con24'>We Develop and implement strategies</div> */}
                   <div className='con25'>We help forward-thinking startup and growth-stage founders in crafting and executing winning strategies and impactful innovations together. Discover the best ways to overcome challenges, fuel business growth, and thrive in today's ever-changing business world.</div>
                  </div>

                  <div className='con011' id='nav2'>
            <div className='con21'>
              <img src='./img/A4.svg' className='con22'></img>
              <a className='con23'>What we do</a>
              </div>  

              <div className='con012'>

                <div className='con013 con034' id='do1'>
                 <a className='ccc' id='branding'><div className='con351'>01</div><div className='con350'> Branding                 <div className='con015'>Brand Research  | Brand Strategy | Visual Identity</div></div></a>
                 {/* <div className='con015'>Brand Research  | Brand Strategy | Visual Identity</div> */}
               </div>
               <div className='con013 con034 ' id='do2'>
                 <a><div className='con351'>02</div><div className='con350'> Personal branding                 <div className='con015'>For Startup Founders | C-suite Executives | Specialists.</div></div></a>
                 {/* <div className='con015'>For Startup Founders | C-suite Executives | Specialists.</div> */}
               </div>
               <div className='con013 con034' id='do3'>
                 <a><div className='con351'>03</div><div className='con350'>Virtual CMO                  <div className='con015'>Remote | Marketing executive </div></div></a>
                 {/* <div className='con015'>Remote | Marketing executive </div> */}
               </div>
               <div className='con013 con034' id='do4'>
                 <a><div className='con351'>04</div><div className='con350'>Communication design                 <div className='con015'>Graphic Design | Advertising | Data Visualization | Art and Illustrations  | Interaction Design | Information Architecture  | Writing and Editing</div>
</div></a>
                 {/* <div className='con015'>Graphic Design | Advertising | Data Visualization | Art and Illustrations  | Interaction Design | Information Architecture  | Writing and Editing</div> */}
               </div>
               <div className='con013 con034'id='do5'>  
                 <a><div className='con351'>05</div><div className='con350'> Growth Strategy                 <div className='con015'>Market Penetration | Product Development | Market Development, Diversification strategies | Acquisition strategies</div></div></a>
                 {/* <div className='con015'>Market Penetration | Product Development | Market Development, Diversification strategies | Acquisition strategies</div> */}
               </div>

              </div>

              </div>

              <div className='learn1'>
              <a>
                    <div className=''>
                     <img src='./img/A3.svg' className='con14'></img>
                      <a className='con15' href='/expertise'>Learn more</a>
                     <img src='./img/A2.svg' className='con16'></img>
                    </div>
                        </a>
              </div>
            
                  
                  <div className='con4' id='nav3'>
                   <div className='con21'>
                       <img src='./img/A4.svg' className='con22'></img>
                       <a className='con23'>Team</a>
                    </div>
                
                    <div className='con44'>

                    <div className='con45'>
                    <div className='con46'>
                      <a><div className='con47'><img src='./img/A5.svg'></img></div>
                        </a>
                      <div className='con48'>
                       <div className='con49'>Sajen Sivaraman</div>
                       <div className='con50'>Head of Strategy</div>
                      </div>
                    </div>
                    <div className='con51'>With a heritage in tea plantations and civil contracting, embarked on an entrepreneurial journey. Holding a fashion design degree from NIFT, he has led growth in diverse sectors for over seven years. As a seasoned strategic advisor, his insights cover operations, management, finance, strategic planning, marketing, and digital transformation. Now, through Aweganyz, he blends tradition and innovation, guiding businesses through dynamic landscapes.
</div>

                    </div>
                    
                    <div className='con45' id='con45'>
                    <div className='con46'>
                    <a><div className='con47'><img src='./img/A6.svg'></img></div>
                        </a>                    
                          <div className='con48'>
                       <div className='con49'>Praveen Rathan</div>
                       <div className='con50'>Head of Communication Design</div>
                      </div>
                    </div>
                    <div className='con51'>Having earned a Master of Business Administration from Jain University, Bangalore, his life's journey has taken him through Ooty, Bhutan, West Bengal, Chennai, Bangalore, West Bengal, and back to Ooty. With over four years of experience in Communication Design, he excels in visually identifying and delivering optimal solutions, creating impactful visual communications that resonate across varied industries and cultures.</div>

                    </div>
                </div>
            </div>

                  <div className='con6'>
                     <div className='con21'>
                       <img src='./img/A4.svg' className='con22'></img>
                       <a className='con23'>Our Clients</a>
                     </div>
                     <div className='con64'>
                      <div><img src='./img/A23.svg'></img></div>
                      <div><img src='./img/A24.svg'></img></div>
                      <div><img src='./img/A25.svg'></img></div>
                      <div><img src='./img/A26.svg'></img></div>
                      <div><img src='./img/A27.svg'></img></div>
                      </div>
                   </div>



                   <div className='slider01'>
                   <div className='con21'>
                       <img src='./img/A4.svg' className='con22'></img>
                       <a className='con23'>What They Say</a>
                       </div>
                   

  <div className='slider2'  >
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" >
  <div class="carousel-inner">
    <div class="carousel-item active"  id='slimg'>
      <img src="/img/A34.svg"  id='slimg' class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"  id='slimg'>
      <img src="/img/A34.svg"  id='slimg' class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" id='slimg'>
      <img src="/img/A34.svg"   id='slimg' class="d-block w-100" alt="..."/>
    </div>
  </div>
 
</div> </div>
  </div>


  
  <div className='slider001'>
                   <div className='con21'>
                       <img src='./img/A4.svg' className='con22'></img>
                       <a className='con23'>What They Say</a>
                       </div>
                   

  <div className='slider2'  >
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-interval="100" >
  <div class="carousel-inner">
    <div class="carousel-item active"  id='slimg'>
      <img src="/img/A35.svg"  id='slimg' class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"  id='slimg'>
      <img src="/img/A35.svg"  id='slimg' class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" id='slimg'>
      <img src="/img/A35.svg"   id='slimg' class="d-block w-100" alt="..."/>
    </div>
  </div>
 
</div> </div>
  </div>



                   <div className='con7'>
                     <div className='con21'>
                       <img src='./img/A4.svg' className='con22'></img>
                       <a className='con23'>What They Say</a>
                       </div>
                          
                       <div className='sl1'>
                            
                       {/* <div className='sl2'> */}
                       <div className='con074' id='sl11'>




                        
              <div className='con75'>“Augue aliquam mollis diam ullamcorper feugiat. Sem sed elementum at massa. Quisque convallis vitae ut tincidunt arcu id eget ridiculus rutrum.”</div>
              <div className='con76'><span className='con77'>Designation,</span><span className='con78'>Company Name</span></div>

            </div> 
             <div className='con074' id='sl12'>
              <div className='con75'>“Augue aliquam mollis diam ullamcorper feugiat. Sem sed elementum at massa. Quisque convallis vitae ut tincidunt arcu id eget ridiculus rutrum.”</div>
              <div className='con76'><span className='con77'>Designation,</span><span className='con78'>Company Name</span></div>

            </div>
             <div className='con074' id='sl13'>
              <div className='con75'>“Augue aliquam mollis diam ullamcorper feugiat. Sem sed elementum at massa. Quisque convallis vitae ut tincidunt arcu id eget ridiculus rutrum.”</div>
              <div className='con76'><span className='con77'>Designation,</span><span className='con78'>Company Name</span></div>

            </div>
            <div className='con074' id='sl14'>
              <div className='con75'>“Augue aliquam mollis diam ullamcorper feugiat. Sem sed elementum at massa. Quisque convallis vitae ut tincidunt arcu id eget ridiculus rutrum.”</div>
              <div className='con76'><span className='con77'>Designation,</span><span className='con78'>Company Name</span></div>

            </div>
                       {/* </div> */}

                       </div>


                   </div>


                   <div className='con8' id='nav4'>
                     <div className='con21'>
                       <img src='./img/A4.svg' className='con22'></img>
                       <a className='con23'>Contact Us</a>
                       </div>
                       <div className='con84'>

                        <div className='con85'>
                         
                         <div className='con89'>
                            <form>
                             <input placeholder='Name*'></input>
                             <input placeholder='Phone Number*'></input>
                             <input placeholder='Email*'></input>

                             <div className='con86'>
                            <div className='con87'> Services</div>
                           {/* <div className='con88'>
                       
                             <div  className='con881' id='c1'><button>Branding</button></div>
                             <div  className='con881' id='c2'><button>Personal Branding</button></div>
                             <div  className='con881' id='c3'><button>Virtual CMO</button></div>
                             <div  className='con881' id='c4'><button>Communication design</button></div>
                             <div  className='con881' id='c5'><button>Growth Strategy</button></div>
                          </div> */}

                             <div className='ss1'>   
                                 <div className='ss2'>
                                  <div className='sss1'><img src='img/serbtn1.svg'></img></div>
                                  <div className='sss2'><img src='img/serbtn2.svg'></img></div>
                                  <div className='sss3'><img src='img/serbtn3.svg'></img></div>
                                  </div>
                                  <div className='ss3'>
                                  <div className='sss4'><img src='img/serbtn4.svg'></img></div>
                                  <div className='sss5'><img src='img/serbtn5.svg'></img></div>
                                 </div>
                             </div>
{/* mview */}
                             <div className='ss4'>   
                                 <div className='ss5'>
                                  <div className='sss6'><img src='img/serbtn1.svg'></img></div>
                                  <div className='sss7'><img src='img/serbtn2.svg'></img></div>
                                
                                  </div>
                                  <div className='ss6'>
                                  <div className='sss8'><img src='img/serbtn3.svg'></img></div>
                                  <div className='sss9'><img src='img/serbtn4.svg'></img></div>
                          
                                 </div>
                                 <div className='ss7'>

                                 <div className='sss10'><img src='img/serbtn5.svg'></img></div>
                                 {/* sss11 is noy valuble */}
                                 <div className='sss11'><img src='img/serbtn2.svg'></img></div>
                                 </div>
                             </div>

                          
                          </div>
                        
                          {/* <div className='serv1'><img src='./img/A30.svg'></img></div>
                          <div className='serv2'><img src='./img/A31.svg'></img></div> */}

                             <textarea placeholder='Message*' className='con891' rows={5}></textarea>
                            </form>
                         </div>
                       
                         <div className='con13' id='con13'>
                      <img src='./img/A3.svg' className='con14'></img>
                      <a className='con15'>Submit</a>
                     <img src='./img/A2.svg' className='con16'></img>
                    </div>
                 </div>

                        <div className='con90'>
                            <div className='con91'>Connect</div>
                            <div className='con92'>
                            <img src='./img/A8.svg'></img>
                            <img src='./img/A9.svg' className='con921'></img>
                            <img src='./img/A10.svg' className='con921'></img>
                            <img src='./img/A11.svg' className='con921'></img>
                            </div>
                            <div  className='con95'>
                            <div className='con93'>hello@aweganyz.com</div>
                            <div className='con94'>+91 98000 98000</div>
                            </div>

                        </div>

                       </div>
                       </div>

                       <div className='con10'>
                       <div  className='con101'> 
                        <div className='con1011'>Registered Address : 1/146, Bettatti, Yedapalli Post, Coonoor, The Nilgiris, Tamilnadu, 643104 - IN.</div> 
                        <div className='con1012'>© 2024 NEW TAB TECH LAB PRIVATE LIMITED</div>
                        </div>
                        <div  className='con102'> 
                            <div className='con1021'><img src='./img/A12.svg'></img></div> 
                        <div className='con1022'>SITEMAP</div>
                         </div>
                      

                       
                       </div>

             </div>
       </div>
     </>
  )
}

export default Landingpage