import React from 'react'
import Image from 'next/image'
import { ShopCardDataType } from '@/constant/ShopCardData'
export default function ShopCard(props: ShopCardDataType) {
    return (
        <>
            <main className='w-[270px] relative h-[330px]'>
                <div className=''>
                    <Image
                        src={props.imageURl}
                        width={270}
                        height={167}
                        alt=''

                    />


                    <div className='absolute top-28 left-16'>
                        {

                            props.topImage && <Image
                                src={"/icon.png"}
                                height={34}
                                width={146}
                                alt=''
                                className=''
                            />
                        }
                    </div>
                    <div className='absolute top-7 left-7'>
                        {

                            props.topSellImage && <Image
                                src={"/Sell.png"}
                                height={22}
                                width={52}
                                alt=''
                                className=''
                            />
                        }
                    </div>
                </div>

                <h1 className='pt-2 text-[#333333]'>{props.name}</h1>
                <span className='pt-1 text-[#FF9F0D]'>{props.price}</span>
                <del className='px-2 text-black/50'>{props.delPrice}</del>

            </main>
        </>
    )
}
