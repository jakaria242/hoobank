import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'


const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <img src={logo} alt="logo" className='w-[124px] h-[32px]' />

            <ul className='list-none sm:flex hidden justify-end items-center flex-1 gap-14'>
                {
                    navLinks?.map(

                        (nav, index) => (

                            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}>
                                <a className='relative  after:absolute after:content-[""] after:w-0 after:h-[1px] after:bottom-[-2px] after:left-0 after:bg-secondary after:transition-all after:duration-200 hover:after:w-full' href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>

                        )

                    )
                }
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img
                    src={
                        toggle ? close : menu
                    }
                    alt="menu"
                    className='w-[28px] h-[28px] object-contain cursor-pointer'
                    onClick={() => setToggle(!toggle)}
                />
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

                    <ul className='list-none flex flex-col justify-end items-center flex-1 gap-4'>
                        {
                            navLinks?.map(

                                (nav, index) => (

                                    <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}>
                                        <a href={`#${nav.id}`}>
                                            {nav.title}
                                        </a>
                                    </li>

                                )

                            )
                        }
                    </ul>

                </div>
            </div>

        </nav>
    )
}

export default Navbar