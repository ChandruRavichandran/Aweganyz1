import React, { useRef, useState } from 'react'
import '../Style/Expertise.css'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'
import { Link } from 'react-router-dom'

const Expertise = () => {
  const [state , setstate ] = useState("Branding")
  const[toggle , settoggele] = useState(false)

  const ugugg =()=>{
    if(toggle === false){
      settoggele(true)
    }else{
      settoggele(false)
    }
  }

  const qrfdeqwf =(brand)=>{

    switch(true){
      case(brand === "Branding"):{
        setstate(brand)
        settoggele(false)
      }
      case(brand === "Personal branding"):{
        setstate(brand)
        settoggele(false)

      }
      case(brand === "Virtual CMO"):{
        setstate(brand)
        settoggele(false)

      }
      case(brand === "Communication design"):{
        setstate(brand)
        settoggele(false)

      }
      case(brand === "Growth strategy"):{
        setstate(brand)
        settoggele(false)

      }
    }
  
  }
  const refone = useRef()
  const reftwo = useRef()
  const refthree = useRef()
  const reffour = useRef()
  const refive = useRef()

  const bor = (brand)=>{
      if(brand === "Branding"){
        refone.current.classList.add("finder")
        refone.current.classList.remove("con35")
        reftwo.current.classList.remove("finder")
        reftwo.current.classList.add("con35")
        refthree.current.classList.remove("finder")
        refthree.current.classList.add("con35")
        reffour.current.classList.remove("finder")
        reffour.current.classList.add("con35")
        refive.current.classList.remove("finder")
        refive.current.classList.add("con35")

      }else if(brand === "Personal branding"){
        refone.current.classList.remove("finder")
        refone.current.classList.add("con35")
        reftwo.current.classList.add("finder")
        reftwo.current.classList.remove("con35")
        refthree.current.classList.remove("finder")
        refthree.current.classList.add("con35")
        reffour.current.classList.remove("finder")
        reffour.current.classList.add("con35")
        refive.current.classList.remove("finder")
        refive.current.classList.add("con35")
      }
      else if(brand === "Virtual CMO"){
        reftwo.current.classList.add("con35")
        reftwo.current.classList.remove("finder")
        refone.current.classList.remove("finder")
        refone.current.classList.add("con35")
        refthree.current.classList.add("finder")
        refthree.current.classList.remove("con35")
        reffour.current.classList.remove("finder")
        reffour.current.classList.add("con35")
        refive.current.classList.remove("finder")
        refive.current.classList.add("con35")
      }
      else if(brand === "Communication design"){
        refone.current.classList.remove("finder")
        refone.current.classList.add("con35")
        reftwo.current.classList.remove("finder")
        reftwo.current.classList.add("con35")
        refthree.current.classList.remove("finder")
        refthree.current.classList.add("con35")
        reffour.current.classList.add("finder")
        reffour.current.classList.remove("con35")
        refive.current.classList.remove("finder")
        refive.current.classList.add("con35")
      }
      else if(brand === "Growth strategy"){
        refone.current.classList.remove("finder")
        refone.current.classList.add("con35")
        reftwo.current.classList.remove("finder")
        reftwo.current.classList.add("con35")
        refthree.current.classList.remove("finder")
        refthree.current.classList.add("con35")
        reffour.current.classList.remove("finder")
        reffour.current.classList.add("con35")
        refive.current.classList.add("finder")
        refive.current.classList.remove("con35")
      }
     
  }

  return (
        <>
        <Navbar/>
        <div className='ex1'>
            <div className='ex2'>
{/* 
            <div className='border1'>
                <div className='border2'>
                </div>
            </div> */}
           

            <div className='ex01'>
                <div className='ex001'>
                Fine-tuned strategies, compelling designs, seamless systems, and digital excellence tailored for <span className='span1'>startup & growth-stage </span>companies.
                </div>
            </div>
            <div className='line1'>
              
              <img src='./img/A32.svg' className='img1'></img>
              <img src='./img/A33.svg' className='img2'></img>

            </div>
            <div className='iron'>
              
<div id='ex4'>
<div className='ex4' >
           <div className='con35' ref={refone} onClick={()=>bor("Branding")}>  <a href='#von1'>Branding</a> </div>
                <div className='con35 von35' ref={reftwo} onClick={()=>bor("Personal branding")}><a href='#von2'>Personal branding</a></div>
                <div className='con35 von35' ref={refthree} onClick={()=>bor("Virtual CMO")} ><a href='#von3'>Virtual CMO</a> </div>
                <div className='con35 von35 ' ref={reffour} onClick={()=>bor("Communication design")} ><a href='#von4'>Communication design</a></div>
                <div className='con35 von35' ref={refive} onClick={()=>bor("Growth strategy")}><a href='#von5'>Growth strategy</a></div>
                </div>
</div>


            <div className='ex3'>
          
            <div className='ex5'>

                   <div  className='ex51' id='von1'>
                    <div  className='ex52'>What is branding?</div>
                    <div  className='ex53'>Branding is the process of creating a distinctive and consistent identity for a product, service, or company. It involves crafting a unique name, logo, design, and messaging that sets it apart from competitors. Successful branding creates a strong and memorable impression, fostering customer loyalty and trust. It goes beyond visual elements, encompassing the overall experience and perception associated with the brand, influencing how it is perceived in the market. Effective branding communicates the values, personality, and promise of the brand, resonating with the target audience.</div>
                  </div>

                  <div className='ex61'>
                  <div  className='ex52'>How we can help?</div>
                          <div className='ex63'>

                            <div className='ex64' id='ex61'>
                            <div className='ex65'>Brand Research</div>
                            <div className='ex66'>We gather insights on market dynamics, competitor landscape, and audience preferences to inform strategic decisions in shaping and evolving the brand.</div>
                            </div>


                            <div className='ex64' id='ex62'>
                            <div className='ex65'>Brand Strategy</div>
                            <div className='ex66'>We develop a comprehensive plan that outlines the brand's goals, values, and unique positioning in the market. It serves as a guiding framework for consistent and impactful communication to build a strong brand identity.</div>
                            </div>


                            <div className='ex64' id='ex63'>
                            <div className='ex65'>Brand Strategy</div>
                            <div className='ex66'>We craft the visual elements that visually represent the brand, including the logo, color palette, typography, and imagery. These components collectively create a memorable and distinctive brand image.</div>
                            </div>

                     

                          </div>
                  </div>

                       

                  <div  className='ex51' id='von2'>
                    <div  className='ex52'>What is personal branding?</div>
                    <div  className='ex53'>Personal branding refers to the intentional and strategic management of an individual's digital presence to establish a distinctive and positive reputation. It involves creating and curating online content, utilizing social media platforms, blogs, and professional websites to showcase one's expertise, skills, and personality. The goal is to shape the way others perceive and interact with the individual in personal and professional contexts. Online personal branding aims to build credibility, visibility, and influence, helping individuals stand out in their respective fields and achieve personal or career objectives.</div>
                  </div>

                  <div className='ex61'>
                  <div  className='ex52'>How we can help?</div>
                          <div className='ex63'>

                            <div className='ex64' id='ex61'>
                            <div className='ex65'>Personal Branding for Startup Founders</div>
                            <div className='ex66'>We help startup founders, establish a unique and compelling identity that aligns with their company's mission. It includes showcasing leadership skills, industry expertise, and a clear vision. Founders can leverage various platforms, from social media to industry events, to build credibility, attract investors, and foster trust among stakeholders.</div>
                            </div>


                            <div className='ex64' id='ex62'>
                            <div className='ex65'>Personal Branding for C-suite Executives</div>
                            <div className='ex66'>We help C-suite executives focus on building a personal brand that aligns with both the corporate brand and their individual leadership style. This includes highlighting executive expertise, thought leadership, and the ability to drive organizational success. Effective personal branding for C-suite executives enhances professional reputation, fosters industry influence, and strengthens the company's overall image.</div>
                            </div>


                            <div className='ex64' id='ex63'>
                            <div className='ex65'>Personal Branding for Specialists</div>
                            <div className='ex66'>We help Specialists, such as subject matter experts or niche professionals, create a personal brand centred around their specialized skills and knowledge. This involves showcasing expertise through publications, speaking engagements, and online platforms specific to their field. Personal branding for specialists establishes authority, attracts opportunities, and positions them as go-to experts within their domain.</div>
                            </div>

                     

                          </div>
                  </div>



                  <div  className='ex51' id='von3'>
                    <div  className='ex52'>What's a Virtual Chief Marketing Officer or vCMO?</div>
                    <div  className='ex53'>A Virtual Chief Marketing Officer (vCMO) operates like a Fractional CMO but works remotely using digital collaboration tools. As remote work becomes more prevalent post-pandemic, organizations adopt virtual setups to streamline operations and access marketing experts globally.</div>
                  </div>

                  <div className='ex61'>
                  <div  className='ex52'>How we can help?</div>
                          <div className='ex63'>

                            <div className='ex64 ex68' id='ex61'>
                           
                            <div className='ex66'>For growth-stage companies, hiring a full-time Chief Marketing Officer is time-consuming and costly. The lengthy recruitment process and high expenses can burden your bottom line. Opt for a remote Marketing Executive with Aweganize to access comparable skills and expertise at an affordable cost, elevating your marketing capabilities for a competitive advantage.</div>
                            </div>
             

                            </div>
                  </div>


                  <div  className='ex51' id='von4'>
                    <div  className='ex52'>What is communication design?</div>
                    <div  className='ex53'>Communication Design is a specialised field of Design that involves strategically conceiving, visually communicating, and effectively disseminating information, ideas, and products through various mediums such as print, digital etc. It has rapidly evolved into a global industry.</div>
                  </div>

                  <div className='ex61'>
                  <div  className='ex52'>How we can help?</div>
                          <div className='ex63'>

                            <div className='ex64' id='ex61'>
                            <div className='ex65'>Graphic Design</div>
                            <div className='ex66'>Originating from Communication Design, it uses visuals in mediums like advertising and web design for impactful communication through skilful layout composition.</div>
                            </div>


                            <div className='ex64' id='ex62'>
                            <div className='ex65'>Advertising</div>
                            <div className='ex66'>A powerful communication medium, advertising, from print to high-budget videos, promotes products and social messages. It's a lucrative industry with opportunities for communication designers to target audiences and drive sales effectively.</div>
                            </div>

                            <div className='ex64' id='ex61'>
                            <div className='ex65 ex67'>  Data Visualization</div>
                            <div className='ex66'> Using charts and maps, data visualization combines information and communication design to make    complex data understandable. This technical and creative field conveys information intuitivel in visually engaging ways.</div>
                            </div>


                            <div className='ex64' id='ex62'>
                            <div className='ex65 ex67'> Art and Illustrations</div>
                            <div className='ex66'> Visual communication forms like animations and illustrations convey ideas effectively,
    delivering a clear message through creative expression.</div>
                            </div>
                         <div className='ex64' id='ex61'>
                            <div className='ex65 ex67'>    Interaction Design</div>
                            <div className='ex66'> Focused on creating user-friendly digital products, interaction design ensures seamless
    interactions between users and products. It overlaps with visual communication design but
    emphasizes functionality and ease of use.</div>
                            </div>


                            <div className='ex64' id='ex62'>
                            <div className='ex65 ex67'> Information Architecture</div>
                            <div className='ex66'>  Organizing shared information environments, information architecture creates systems for
    collecting and structuring data. Examples include website layouts, online community
    organization, and user-friendly database structures.</div>
                            </div>

                            <div className='ex64' id='ex63'>
                            <div className='ex65'>  Writing and Editing</div>
                            <div className='ex66'>  Critical in communication design, writing and editing craft and conveying information artfully
    and technically. From promotional materials to articles, it ensures clear, concise, and engaging
    language in various forms.</div>
                            </div>

                     

                          </div>
                  </div>



                  <div  className='ex51' id='von5'>
                    <div  className='ex52'>What is Growth strategy?</div>
                    <div  className='ex53'> Our business growth strategy comprises tactics aiming to boost your market share, whether for the
  short or long term. Focused on key areas, it ensures sustainable growth, considering competitors,
  resources, industry, value proposition, revenue opportunities, product, lead generation, and
  abundant data.</div>
                  </div>

                  <div className='ex61'>
                  <div  className='ex52'>How we can help?</div>
                          <div className='ex63'>

                            <div className='ex64' id='ex61'>
                            <div className='ex65'> Market Penetration</div>
                            <div className='ex66'>We help maximize your current product in your existing market. Ensure the right product-market
    fit through strategic marketing. Dive deep into your audience, ramp up growth strategies, and
    attract new customers with competitive pricing and compelling USPs.</div>
                            </div>


                            <div className='ex64' id='ex62'>
                            <div className='ex65'>    Product Development</div>
                            <div className='ex66'> We empower your product team to innovate. Develop new features for your existing user base,
    enhancing onboarding, gathering customer feedback, and streamlining processes for continuous
    growth aligned with your mission.</div>
                            </div>

                            <div className='ex64' id='ex61'>
                            <div className='ex65 ex67'>     Market Development</div>
                            <div className='ex66'> We help unlock new horizons with smart market insights. Identify unexpected segments interested
    in your product, adapting your marketing and sales strategies accordingly. This strategy, also
    known as market expansion, is ideal for early growth years.</div>
                            </div>


                            <div className='ex64' id='ex62'>
                            <div className='ex65 ex67'>     Diversification Strategies</div>
                            <div className='ex66'> For industry leaders ready for more, our diversification strategy involves entering new markets
    with new products. Backed by extensive research, rapid prototyping, agile marketing, and
    intelligent selling, it's a bold step toward continued success.</div>
                            </div>
                       

                            <div className='ex64' id='ex63'>
                            <div className='ex65'>  Acquisition Strategies</div>
                            <div className='ex66'>  Experience external growth through strategic acquisitions. It's more than wiping out
    competition; it's about penetrating new markets or strengthening your position. We guide your
    business in acquiring brands that align with your customer needs and business objectives.</div>
                            </div>

                     

                          </div>
                  </div>



             

            </div>
</div>
            </div>



  
<div className='middle'>
     <div className='middlwcontent'>
      {/* <div className='mid01'>{state}</div> */}
      <div onClick={()=>ugugg()} className='mid02'>
        <div className='mid01'>  {state}</div>
        <div className='mid03'> <img src='/img/A29.svg'></img></div>
        
     </div>
      {
        toggle && <div className='rtydfb'>
     <div onClick={()=>qrfdeqwf("Branding")}><a href='#von11'>Branding</a></div>
       <div onClick={()=>qrfdeqwf("Personal branding")}><a href='#von12'>  Personal branding</a></div>
       <div onClick={()=>qrfdeqwf("Virtual CMO")}><a href='#von13'>Virtual CMO</a></div>

        <div onClick={()=>qrfdeqwf("Communication design")}><a href='#von14'>Communication design</a></div>
       <div onClick={()=>qrfdeqwf("Growth strategy")}><a href='#von15'>Growth strategy</a></div>

   </div>
   
      }
   
         </div>
         </div>
         <br></br>
<div className='vhvhv'>
  
  
<div className='ex5'>

<div  className='ex51' id='von11'>
 <div  className='ex52'>What is branding?</div>
 <div  className='ex53'>Branding is the process of creating a distinctive and consistent identity for a product, service, or company. It involves crafting a unique name, logo, design, and messaging that sets it apart from competitors. Successful branding creates a strong and memorable impression, fostering customer loyalty and trust. It goes beyond visual elements, encompassing the overall experience and perception associated with the brand, influencing how it is perceived in the market. Effective branding communicates the values, personality, and promise of the brand, resonating with the target audience.</div>
</div>

<div className='ex61'>
<div  className='ex52'>How we can help?</div>
       <div className='ex63'>

         <div className='ex64' id='ex61'>
         <div className='ex65'>Brand Research</div>
         <div className='ex66'>We gather insights on market dynamics, competitor landscape, and audience preferences to inform strategic decisions in shaping and evolving the brand.</div>
         </div>


         <div className='ex64' id='ex62'>
         <div className='ex65'>Brand Strategy</div>
         <div className='ex66'>We develop a comprehensive plan that outlines the brand's goals, values, and unique positioning in the market. It serves as a guiding framework for consistent and impactful communication to build a strong brand identity.</div>
         </div>


         <div className='ex64' id='ex63'>
         <div className='ex65'>Brand Strategy</div>
         <div className='ex66'>We craft the visual elements that visually represent the brand, including the logo, color palette, typography, and imagery. These components collectively create a memorable and distinctive brand image.</div>
         </div>

  

       </div>
</div>

    

<div  className='ex51' id='von12'>
 <div  className='ex52'>What is personal branding?</div>
 <div  className='ex53'>Personal branding refers to the intentional and strategic management of an individual's digital presence to establish a distinctive and positive reputation. It involves creating and curating online content, utilizing social media platforms, blogs, and professional websites to showcase one's expertise, skills, and personality. The goal is to shape the way others perceive and interact with the individual in personal and professional contexts. Online personal branding aims to build credibility, visibility, and influence, helping individuals stand out in their respective fields and achieve personal or career objectives.</div>
</div>

<div className='ex61'>
<div  className='ex52'>How we can help?</div>
       <div className='ex63'>

         <div className='ex64' id='ex61'>
         <div className='ex65'>Personal Branding for Startup Founders</div>
         <div className='ex66'>We help startup founders, establish a unique and compelling identity that aligns with their company's mission. It includes showcasing leadership skills, industry expertise, and a clear vision. Founders can leverage various platforms, from social media to industry events, to build credibility, attract investors, and foster trust among stakeholders.</div>
         </div>


         <div className='ex64' id='ex62'>
         <div className='ex65'>Personal Branding for C-suite Executives</div>
         <div className='ex66'>We help C-suite executives focus on building a personal brand that aligns with both the corporate brand and their individual leadership style. This includes highlighting executive expertise, thought leadership, and the ability to drive organizational success. Effective personal branding for C-suite executives enhances professional reputation, fosters industry influence, and strengthens the company's overall image.</div>
         </div>


         <div className='ex64' id='ex63'>
         <div className='ex65'>Personal Branding for Specialists</div>
         <div className='ex66'>We help Specialists, such as subject matter experts or niche professionals, create a personal brand centred around their specialized skills and knowledge. This involves showcasing expertise through publications, speaking engagements, and online platforms specific to their field. Personal branding for specialists establishes authority, attracts opportunities, and positions them as go-to experts within their domain.</div>
         </div>

  

       </div>
</div>



<div  className='ex51' id='von13'>
 <div  className='ex52'>What's a Virtual Chief Marketing Officer or vCMO?</div>
 <div  className='ex53'>A Virtual Chief Marketing Officer (vCMO) operates like a Fractional CMO but works remotely using digital collaboration tools. As remote work becomes more prevalent post-pandemic, organizations adopt virtual setups to streamline operations and access marketing experts globally.</div>
</div>

<div className='ex61'>
<div  className='ex52'>How we can help?</div>
       <div className='ex63'>

         <div className='ex64 ex68' id='ex61'>
        
         <div className='ex66'>For growth-stage companies, hiring a full-time Chief Marketing Officer is time-consuming and costly. The lengthy recruitment process and high expenses can burden your bottom line. Opt for a remote Marketing Executive with Aweganize to access comparable skills and expertise at an affordable cost, elevating your marketing capabilities for a competitive advantage.</div>
         </div>


         </div>
</div>


<div  className='ex51' id='von14'>
 <div  className='ex52'>What is communication design?</div>
 <div  className='ex53'>Communication Design is a specialised field of Design that involves strategically conceiving, visually communicating, and effectively disseminating information, ideas, and products through various mediums such as print, digital etc. It has rapidly evolved into a global industry.</div>
</div>

<div className='ex61'>
<div  className='ex52'>How we can help?</div>
       <div className='ex63'>

         <div className='ex64' id='ex61'>
         <div className='ex65'>Graphic Design</div>
         <div className='ex66'>Originating from Communication Design, it uses visuals in mediums like advertising and web design for impactful communication through skilful layout composition.</div>
         </div>


         <div className='ex64' id='ex62'>
         <div className='ex65'>Advertising</div>
         <div className='ex66'>A powerful communication medium, advertising, from print to high-budget videos, promotes products and social messages. It's a lucrative industry with opportunities for communication designers to target audiences and drive sales effectively.</div>
         </div>

         <div className='ex64' id='ex61'>
         <div className='ex65 ex67'>  Data Visualization</div>
         <div className='ex66'> Using charts and maps, data visualization combines information and communication design to make    complex data understandable. This technical and creative field conveys information intuitivel in visually engaging ways.</div>
         </div>


         <div className='ex64' id='ex62'>
         <div className='ex65 ex67'> Art and Illustrations</div>
         <div className='ex66'> Visual communication forms like animations and illustrations convey ideas effectively,
delivering a clear message through creative expression.</div>
         </div>
      <div className='ex64' id='ex61'>
         <div className='ex65 ex67'>    Interaction Design</div>
         <div className='ex66'> Focused on creating user-friendly digital products, interaction design ensures seamless
interactions between users and products. It overlaps with visual communication design but
emphasizes functionality and ease of use.</div>
         </div>


         <div className='ex64' id='ex62'>
         <div className='ex65 ex67'> Information Architecture</div>
         <div className='ex66'>  Organizing shared information environments, information architecture creates systems for
collecting and structuring data. Examples include website layouts, online community
organization, and user-friendly database structures.</div>
         </div>

         <div className='ex64' id='ex63'>
         <div className='ex65'>  Writing and Editing</div>
         <div className='ex66'>  Critical in communication design, writing and editing craft and conveying information artfully
and technically. From promotional materials to articles, it ensures clear, concise, and engaging
language in various forms.</div>
         </div>

  

       </div>
</div>



<div  className='ex51' id='von15'>
 <div  className='ex52'>What is Growth strategy?</div>
 <div  className='ex53'> Our business growth strategy comprises tactics aiming to boost your market share, whether for the
short or long term. Focused on key areas, it ensures sustainable growth, considering competitors,
resources, industry, value proposition, revenue opportunities, product, lead generation, and
abundant data.</div>
</div>

<div className='ex61'>
<div  className='ex52'>How we can help?</div>
       <div className='ex63'>

         <div className='ex64' id='ex61'>
         <div className='ex65'> Market Penetration</div>
         <div className='ex66'>We help maximize your current product in your existing market. Ensure the right product-market
fit through strategic marketing. Dive deep into your audience, ramp up growth strategies, and
attract new customers with competitive pricing and compelling USPs.</div>
         </div>


         <div className='ex64' id='ex62'>
         <div className='ex65'>    Product Development</div>
         <div className='ex66'> We empower your product team to innovate. Develop new features for your existing user base,
enhancing onboarding, gathering customer feedback, and streamlining processes for continuous
growth aligned with your mission.</div>
         </div>

         <div className='ex64' id='ex61'>
         <div className='ex65 ex67'>     Market Development</div>
         <div className='ex66'> We help unlock new horizons with smart market insights. Identify unexpected segments interested
in your product, adapting your marketing and sales strategies accordingly. This strategy, also
known as market expansion, is ideal for early growth years.</div>
         </div>


         <div className='ex64' id='ex62'>
         <div className='ex65 ex67'>     Diversification Strategies</div>
         <div className='ex66'> For industry leaders ready for more, our diversification strategy involves entering new markets
with new products. Backed by extensive research, rapid prototyping, agile marketing, and
intelligent selling, it's a bold step toward continued success.</div>
         </div>
    

         <div className='ex64' id='ex63'>
         <div className='ex65'>  Acquisition Strategies</div>
         <div className='ex66'>  Experience external growth through strategic acquisitions. It's more than wiping out
competition; it's about penetrating new markets or strengthening your position. We guide your
business in acquiring brands that align with your customer needs and business objectives.</div>
         </div>

  

       </div>
</div>





</div>
  
  </div>     
            <div className='con8 excon' id='nav4'>
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
                             <div  className='con881' id='c4'><button>Strategy Consulting</button></div>
                             <div  className='con881' id='c5'><button>Growth, Marketing & Sales Consulting</button></div>
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

export default Expertise