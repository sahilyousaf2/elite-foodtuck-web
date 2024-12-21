import React from 'react'
import TeamMemberCard from './teamMemberCard'

export default function TeamMember() {
    return (
        <>

            <main className=' relative w-full bg-[#] h-[1000px]'>
                <div className=' text-white bg-[url("/Bg.png")] md:mt-[120px] bg-no-repeat bg-center w-full h-[460px]'>

                    <div className="text">
                        <div className="head pt-[120px] flex justify-center items-center">
                            <h1 className='text-5xl font-bold'>Team Member</h1>
                        </div>
                        <div className="para pt-2 w-[418px] h-11 mx-auto">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing.
                                <br />
                                Varius sed pharetra dictum neque massa congue</p>
                        </div>
                    </div>
                </div>
                <div className="absolute top-[288px] md:flex justify-between md:space-y-0 space-y-5 items-center left-24 md:left-[250px] md:w-[1170px] bg-red-00 md:h-[398px]">
                    <TeamMemberCard name='Sahil Yousaf' position='Owner' />
                    <TeamMemberCard isTure={true} name='Chris Stanley' position='Chef' />
                    <TeamMemberCard name='Unithan' position='Specialist' />
                    <TeamMemberCard name='Raza John' position='Founder' />
                </div>
            </main>
        </>
    )
}
