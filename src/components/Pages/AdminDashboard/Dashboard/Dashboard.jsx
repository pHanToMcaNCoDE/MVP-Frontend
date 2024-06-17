import React from 'react'
import DashboardHeader from '../../../Page Components/DashboardHeader'
import { HiOutlineEyeSlash } from 'react-icons/hi2'
import { RxArrowBottomLeft, RxArrowTopRight } from 'react-icons/rx'
import AssetsTable from '../../../Page Components/AssetsTable'

const Dashboard = () => {
  return (
    <section>
      <DashboardHeader></DashboardHeader>

      <div className='gap-[24px] py-[16px] px-[32px] flex flex-col justify-center items-start self-stretch'>

        <div className='flex flex-col justify-center items-start gap-[16px]'>
          <h2 className='text-[#9C9C9C] text-[1.125rem] font-semibold leading-7'>Total Balance</h2>
          <div className='flex justify-start items-center gap-[16px]'>
            <h1 className='text-[4rem] text-[#151515] font-semibold leading-[48px] tracking-[-0.88px]'>$1,200.00</h1>
            <HiOutlineEyeSlash className='text-[1.125rem] text-[#151515]'/>
          </div>
        </div>

        <div className='flex justify-center items-start gap-[16px]'>
            <button className='px-2 py-0 w-[140px] h-[40px] bg-[#2F4EED] flex justify-center items-center text-white rounded-[50px]'>
              <p className='px-2'>Send</p> <RxArrowTopRight />
            </button>
            <button className='px-2 py-0 w-[140px] h-[40px] bg-[#2F4EED] flex justify-center items-center text-white rounded-[50px]'>
              <p className='px-2'>Receive</p> <RxArrowBottomLeft />
            </button>
        </div>
      </div>
      <div className='py-[16px] px-0 gap-[10px] flex flex-col justify-center items-start self-stretch'>
        <div className='gap-[24px] flex items-start px-[32px] py-0 self-stretch border-b border-[#E9E9E9]'>
          <h1 className='text-[#9C9C9C] text-[1rem] font-semibold leading-6 gap-2 pb-2'>Assets</h1>
          <h1 className='text-[#9C9C9C] text-[1rem] font-semibold leading-6 gap-2 pb-2'>Transactions</h1>
        </div>
      </div>
      <div className='pt-[16px] flex items-start self-stretch w-full'>
        <AssetsTable/>
      </div>
    </section>
  )
}

export default Dashboard