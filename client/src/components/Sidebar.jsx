import React from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { userDummyData } from '../assets/assets'

const Sidebar = ({selectedUser, setSelectedUser}) => {

  const navigate = useNavigate()

  return (
    <div className={`bg-[#8185B2]/10 h-full p-5 rounded-r-xl overflow-y-auto text-white ${selectedUser ? 'max-md:hidden' : ''}`}>
      <div className='pb-5'>
        <div className='flex items-center justify-between'>
          <img src={assets.logo} alt="logo" className='max-w-40' />
          <div className='relative py-2 group'>
            <img src={assets.menu_icon} alt="menu" className='max-h-5 cursor-pointer' />
            <div className='absolute right-0 top-full z-20 w-32 p-5 bg-[#282142] rounded-md text-gray-100 border border-gray-500 hidden group-hover:block'>
              <p onClick={()=> navigate('/profile')} className='cursor-pointer text-sm'>Edit Profile</p>
              <hr className='my-2 border-t border-gray-500' />
              <p className='cursor-pointer text-sm'>Log Out</p>
            </div>
          </div>
        </div>

        <div className='bg-[#282142] rounded-full flex items-center gap-2 px-4 py-3 mt-5'>
          <img src={assets.search_icon} alt="search" className='w-3' />
          <input type="text" className='bg-transparent border-none outline-none text-white text-xs placeholder-[#c8c8c8] flex-1' placeholder='Search User...' />
        </div>

      </div>

      <div className='flex flex-col'>
        {userDummyData.map((user, index) => (
          <div onClick={() => {setSelectedUser(user)}} key={index} className={`flex items-center gap-2 p-2 pl-4 rounded relative cursor-pointer max-sm:text-sm hover:bg-[#282142] ${selectedUser?._id === user._id && 'bg-[#282142]/50'}`}>
            <img src={user?.profilePic || assets.avatar_icon} alt="" className='w-[35px] aspect-[1/1] rounded-full' />
            <div className='flex flex-col leading-5'>
              <p>
                {user?.fullName}
              </p>
              { index < 3
              ? <span className='text-green-400 text-xs'>Onlione</span>
              : <span className='text-gray-400 text-xs'>Offline</span>
              }
            </div>
            {index > 2 && <p className='absolute top-4 right-4 text-xs h-5 w-5 flex justify-center items-center rounded-full bg-violet-500/50'>{index}</p>}
          </div>
        ))}
      </div>

    </div>
  )
}

export default Sidebar