import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import MenuBars from '../photos/menu-bars.png'
// import ArchLogo from '../photos/arches-logo_108x108.jpg';
import { Button } from 'react-bootstrap';
import GAUlogo from '../photos/GAUlogo_logo_128x60.avif'
import Cart from '../photos/3PUB_cart.jpg'

function TopNav () {

const [clickState, setClickState] = useState(false)

const clickHandler = () => {
     setClickState (!clickState) 
     console.log('clicked')
}

  return (
<>
    <section>
        <div className='w-full m-auto max-w-[1300px] pt-[16px] pb-[17px] overflow-hidden justify-center pr-[56px] pl-[56px] relative'>
            
        
            {/* float left */}
            <div className='float-left'>
                <img className='w-[94%]' src={GAUlogo} alt='gordenarch.png' />
            </div>

            {/* float middle */}
            <div className='absolute left-[50%] -translate-x-1/2 justify-center max-md:hidden text-center flex text-md max-w-[921px] font-bold tracking-wide
            [&>div]:pr-10 
                last:[&>div]:pr-0
            [&>div>div>svg]:ml-2 [&>div>div>svg]:mt-[7px]
            '>

                {/* !!!!!!!!!!!!!!!!!!!!!!!! */}
                {/* !!!!!!!!!!!!!!!!!!!!!!!! */}
                {/* border-button FIX FIX FIX */}
                {/* !!!!!!!!!!!!!!!!!!!!!!!! */}
                {/* !!!!!!!!!!!!!!!!!!!!!!!! */}
                      <div className='hover:text-red-400 flex border-button'>
                          <div>Apparel & Accessories</div>
                          <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                              </svg>
                          </div>
                      </div>

                      <div className='hover:text-red-400 flex'>
                          <div>Speciality Collections</div>
                          <div className=''>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                              </svg>
                          </div>
                      </div>
                  </div>

                  {/* float right */}
                  <div className='float-right flex'>


                      <svg className='' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                      </svg>

                      <div className='flex ml-7'>
                          <img className='w-[20px] h-auto mr-1 ' src={Cart} alt="bag.png" />
                          <div className='rounded-full pr-2 pl-2 bg-slate-200 text-center'>
                              0
                          </div>
                      </div>
                  </div>
              </div>
    </section>
</>
    )
}

export default TopNav;