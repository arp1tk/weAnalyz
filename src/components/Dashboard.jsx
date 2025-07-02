import React from 'react'

export default function DashboardView() {
  return (
    <div className="p-6 bg-white min-h-screen">
   
      <div className="flex items-center justify-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 font-sanchez tracking-wider">
          Dashboard
        </h2>
      </div>
      
      <div className="grid grid-cols-4 gap-8 justify-center">
        <div className="relative w-[254px] h-[280px]">
          <div className="absolute bg-[#9EA6A1] rounded-xl w-[254px] h-[280px] -bottom-[6px] -right-[6px] "></div>
          <div className="relative bg-[#2F82FF] rounded-xl p-8 text-black w-[254px] h-[280px] flex flex-col items-center justify-between font-sanchez">
            <div>
              <h3 className="text-[24px] font-medium tracking-wider leading-tight">
                Total Tickets
              </h3>
            </div>
            <div className="text-[96px] pb-10  text-[#05386B] leading-none mt-4">12</div>
          </div>
        </div>

        <div className="relative w-[254px] h-[280px]">
          <div className="absolute bg-[#9EA6A1] rounded-xl w-[254px] h-[280px] -bottom-[6px] -right-[6px]"></div>
          <div className="relative bg-[#0BFF68] rounded-xl p-8 text-black w-[254px] h-[280px] flex flex-col items-center justify-between font-sanchez">
            <div>
              <h3 className="text-[24px] font-medium tracking-wider leading-tight">
                Total Solved
              </h3>
            </div>
            <div className="text-[96px] pb-10  leading-none text-[#05386B] ">8</div>
          </div>
        </div>

        <div className="relative w-[254px] h-[280px]">
          <div className="absolute bg-[#9EA6A1] rounded-xl w-[254px] h-[280px] -bottom-[6px] -right-[6px]"></div>
          <div className="relative bg-[#FE594E] rounded-xl p-8 text-black w-[254px] h-[280px] flex flex-col items-center justify-between font-sanchez">
            <div>
              <h3 className="text-[24px] text-center font-medium tracking-wider leading-tight">
                Total<br/> Awaiting
              </h3>
              <h3 className="text-[24px] font-medium tracking-wider leading-tight">
                Approval
              </h3>
            </div>
            <div className="text-[96px] pb-10 text-[#05386B]  leading-none mt-">2</div>
          </div>
        </div>

        <div className="relative w-[254px] h-[280px]">
          <div className="absolute bg-[#9EA6A1] rounded-xl w-[254px] h-[280px] -bottom-[6px] -right-[6px]"></div>
          <div className="relative bg-[#FCFF6C] rounded-xl p-8 text-gray-800 w-[254px] h-[280px] flex flex-col items-center justify-between font-sanchez">
            <div>
              <h3 className="text-[24px] font-medium tracking-wider leading-tight">
                Total In
              </h3>
              <h3 className="text-[24px] font-medium tracking-wider leading-tight">
                Progress
              </h3>
            </div>
            <div className="text-[96px] pb-10 text-[#05386B] leading-none mt-2">2</div>
          </div>
        </div>
      </div>
    </div>
  )
}