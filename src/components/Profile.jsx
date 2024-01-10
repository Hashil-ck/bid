import React from 'react'

function Profile() {
  return (
    <div className=" flex justify-center items-center text-center h-9 overflow-hidden">
    <div className='flex-col text-right '>
      <div className='font-medium mt-1 ' >Jane Cooper</div>
      <p className='text-xs'>janecooper@gmail.com</p>
      </div>
      
         <img className='ms-2 rounded-full w-[45px] h-9 ' src="https://i.pinimg.com/originals/75/08/f0/7508f0eaaf1cd826c5578155b2883f8c.jpg" alt="" />
      

  </div>
  )
}

export default Profile