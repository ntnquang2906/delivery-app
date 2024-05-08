import React from 'react'
import { assets } from '@/assets/assets'
import { navbar, logo, location_box, location_icon, location, search_box, search_icon, search, navbar_right, user_icon, shopping, shopping_icon, dot } from '@/styles/Navbar.module.css'
import { IoSearchOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Image from 'next/image'
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className={navbar}>
            <Image src={assets.logo} width={50}
                height={50} alt="" className={logo} />
            <div class={location_box}>
                <MdLocationOn class={location_icon} />
                <input type='text' placeholder='Location' className={location} id="location" />
            </div>
            <div className={search_box}>
                <IoSearchOutline className={search_icon} />
                <input type="text" placeholder='Search' className={search} id="search" />
            </div>

            <div className={navbar_right}>
                <FaUser className={user_icon} />
                <div className={shopping}>
                    <Link href="/shopping-cart" passHref legacyBehavior>
                        <FaCartShopping className={shopping_icon} />
                    </Link>
                    <div className={dot}></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
