import React from 'react'

type CheckBox = {
    name: string
}
export default function CheckBox(props: CheckBox) {
    return (
        <>
            <main className='w-[248px] h-[26px] mt-4 flex items-center gap-2'>
                <input type="checkbox" className='border-black' />
                <h1 className='text-[18px]'>{props.name}</h1>
            </main>
        </>
    )
}
