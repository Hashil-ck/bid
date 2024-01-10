import React from 'react'
import Menu from './Menu'

function Categories() {
 
  return (
    <div className='flex  bg-slate-200'>
      <Menu />
     
        <div className=' p-7 w-[500px] overflow-hidden'>
          <div className='flex justify-between'>
            <div className='flex '>
              <img  width={'20px'} src="" alt="" />
              <h2 className='text-xl mt-1 ml-2 font-bold'>Categories</h2>
            </div>
            <div className='flex items-center bg-white h-7 mt-3 rounded '>
              <i class="fa-solid fa-magnifying-glass cursor-pointer  ps-2"></i>
              <input type="text" className='rounded-lg p-2 h-2 w-[180px] outline-none' placeholder='Search Categories' name="" id="" />
            </div>

          </div>
          <div className='bg-white rounded-lg w-[450px] h-[100%] mt-3 pl-4 pt-3'>
            <table className='table '>
              <tr>
                <th className='text-slate-400 font-semibold text-sm'>Sl No</th>
                <th className='text-slate-400 font-semibold text-sm pl-10'>Name</th>
                <th className='text-slate-400 font-semibold text-sm pl-10'>Type</th>
              </tr>
              <tr>
                <td>1</td>
                <td className='pl-10'>Fixtures</td>
                <td className='flex pl-10'><span>C</span> <img  src="" alt="" /></td>
              </tr>

            </table>
          </div>
        </div>

    </div>
  )
}

export default Categories