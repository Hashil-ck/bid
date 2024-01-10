import React from 'react'
const note = ""
const back = ""
function Menu() {
    return (
        <div className='w-[82px] h-auto bg-white overflow-hidden'>
            <div className='bg-blue-600 hover:bg-blue-700 cursor-pointer w-100 border-b-4'>
                <img src={back} alt="" className='ml-6 pt-2'/>
                <p className='text-sm text-white'>Back to Jobs</p>
            </div>
            
            <div className=' w-100 h-auto  hover:bg-slate-200  cursor-pointer border-b-4'>
                <img src={note} alt="" className='ml-6 pt-4'/>
                <p className='text-sm text-black ml-4 pt-1'>Notes</p>
            </div>
       
            <div className=' w-100 h-auto bg-slate-200 cursor-pointer border-b-4'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-sm text-black ml-4 pt-1'>Take off</p>
            </div>
           
            <div className=' w-100 h-auto hover:bg-slate-200 cursor-pointer border-b-4'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-sm text-black ml-4 pt-1'>Extension</p>
            </div>

            <div className=' w-100 h-auto hover:bg-slate-200 cursor-pointer border-b-4'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-sm text-black ml-5 pt-1'>DiLb</p>
            </div>
            
            <div className=' w-100 h-auto hover:bg-slate-200 cursor-pointer border-b-4'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-sm text-black ml-5 pt-1'>IncLb</p>
            </div>
            <div className=' w-100 h-auto  hover:bg-slate-200 cursor-pointer border-b-4'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-sm text-black ml-5 pt-1'>LbFac</p>
            </div>
            <div className=' w-100 h-auto  hover:bg-slate-200 cursor-pointer border-b-4'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-sm text-black ml-5 pt-1'>LbEsc</p>
            </div>
            <div className=' w-100 h-auto  hover:bg-slate-200 cursor-pointer border-b-4'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-sm text-black ml-5 pt-1'>IndLb</p>
            </div>
            <div className=' w-100 h-auto  hover:bg-slate-200 cursor-pointer border-b-4'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-sm text-black ml-5 pt-1'>Sbcon</p>
            </div>
            <div className=' w-100 h-auto  hover:bg-slate-200 cursor-pointer border-b-4'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-sm text-black ml-5 pt-1'>Gen Exp</p>
            </div>
            <div className=' w-100 h-auto  hover:bg-slate-200 cursor-pointer border-b-4'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-sm text-black ml-5 pt-1'>Qt Mat</p>
            </div>
            <div className=' w-100 h-auto  hover:bg-slate-200 cursor-pointer border-b-4'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-sm text-black ml-5 pt-1'>Brk Dwn</p>
            </div>
            <div className=' w-100 h-auto  hover:bg-slate-200 cursor-pointer border-b-4'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-sm text-black ml-5 pt-1'>DiLb</p>
            </div>
        </div>
    )
}

export default Menu