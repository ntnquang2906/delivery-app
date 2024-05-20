import React from 'react'
import { restaurant, restaurant_img_container, restaurant_image, reastaurant_info, restaurant_rating, restaurant_desc, restau_price } from '@/styles/Restaurant.module.css'
import { assets } from '@/assets/assets'
import { AiFillClockCircle } from "react-icons/ai";
import Image from 'next/image'
import Link from 'next/link'

const Restaurant = ({ id, name, time, fee, image }) => {
    return (
        <Link href='/browse-item'>
            <div className={restaurant}>
                <div className={restaurant_img_container}>
                    <img className={restaurant_image} src={image} alt="" width= "50px" heigt= "50px" objectFit="cover" mb={4} />
                </div>
                <div className={reastaurant_info}>
                    <div className={restaurant_rating}>
                        <p>{name}</p>
                        <Image src={assets.rating_starts} width={70} heigt={50} alt="" />
                    </div>
                    <p className={restaurant_desc}>${fee} Delivery Fee</p>
                    <p className={restau_price}><AiFillClockCircle className='time' /> {time} min</p>
                </div>
            </div>
        </Link>
    )
}

export default Restaurant
