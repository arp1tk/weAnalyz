import React from 'react'

export default function DashboardViewTeam() {
  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="flex items-center justify-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 font-sanchez tracking-wider">
          Dashboard
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-8 justify-center mb-12">
        <div className="relative w-[254px] h-[280px]">
          <div className="absolute bg-[#9EA6A1] rounded-xl w-full h-full -bottom-[6px] -right-[6px]" />
          <div className="relative bg-[#2F82FF] rounded-xl p-8 text-black w-full h-full flex flex-col items-center justify-between font-sanchez">
            <h3 className="text-[24px] font-medium tracking-wider leading-tight">Total Tickets</h3>
            <div className="text-[96px] pb-10 text-[#05386B] leading-none mt-4">12</div>
          </div>
        </div>

        <div className="relative w-[254px] h-[280px]">
          <div className="absolute bg-[#9EA6A1] rounded-xl w-full h-full -bottom-[6px] -right-[6px]" />
          <div className="relative bg-[#0BFF68] rounded-xl p-8 text-black w-full h-full flex flex-col items-center justify-between font-sanchez">
            <h3 className="text-[24px] font-medium tracking-wider leading-tight">Total Solved</h3>
            <div className="text-[96px] pb-10 text-[#05386B] leading-none">8</div>
          </div>
        </div>

        <div className="relative w-[254px] h-[280px]">
          <div className="absolute bg-[#9EA6A1] rounded-xl w-full h-full -bottom-[6px] -right-[6px]" />
          <div className="relative bg-[#FE594E] rounded-xl p-8 text-black w-full h-full flex flex-col items-center justify-between font-sanchez text-center">
            <h3 className="text-[24px] font-medium tracking-wider leading-tight">
              Total <br /> Awaiting <br /> Approval
            </h3>
            <div className="text-[96px] pb-10 text-[#05386B] leading-none">2</div>
          </div>
        </div>

        <div className="relative w-[254px] h-[280px]">
          <div className="absolute bg-[#9EA6A1] rounded-xl w-full h-full -bottom-[6px] -right-[6px]" />
          <div className="relative bg-[#FCFF6C] rounded-xl p-8 text-gray-800 w-full h-full flex flex-col items-center justify-between font-sanchez text-center">
            <h3 className="text-[24px] font-medium tracking-wider leading-tight">
              Total In <br /> Progress
            </h3>
            <div className="text-[96px] pb-10 text-[#05386B] leading-none mt-2">2</div>
          </div>
        </div>
      </div>

      <div className="flex  gap-8 ">
        <div className="bg-[#6DE5D0]  w-[539.25px] h-[420.0296325683594px] flex items-center justify-center">
         <svg width="269" height="254" viewBox="0 0 269 254" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M184.844 18.564C184.844 13.7682 186.612 9.16883 189.759 5.7777C192.906 2.38656 197.174 0.481445 201.625 0.481445H235.188C239.638 0.481445 243.907 2.38656 247.054 5.7777C250.201 9.16883 251.969 13.7682 251.969 18.564V235.554H260.359C262.585 235.554 264.719 236.507 266.292 238.203C267.866 239.898 268.75 242.198 268.75 244.596C268.75 246.994 267.866 249.293 266.292 250.989C264.719 252.684 262.585 253.637 260.359 253.637H8.64062C6.41529 253.637 4.2811 252.684 2.70756 250.989C1.13401 249.293 0.25 246.994 0.25 244.596C0.25 242.198 1.13401 239.898 2.70756 238.203C4.2811 236.507 6.41529 235.554 8.64062 235.554H17.0312V181.307C17.0312 176.511 18.7993 171.912 21.9464 168.521C25.0935 165.129 29.3618 163.224 33.8125 163.224H67.375C71.8257 163.224 76.094 165.129 79.2411 168.521C82.3882 171.912 84.1562 176.511 84.1562 181.307V235.554H100.938V108.977C100.938 104.181 102.706 99.5815 105.853 96.1904C109 92.7993 113.268 90.8941 117.719 90.8941H151.281C155.732 90.8941 160 92.7993 163.147 96.1904C166.294 99.5815 168.062 104.181 168.062 108.977V235.554H184.844V18.564ZM201.625 235.554H235.188V18.564H201.625V235.554ZM151.281 235.554V108.977H117.719V235.554H151.281ZM67.375 235.554V181.307H33.8125V235.554H67.375Z" fill="#05386B"/>
</svg>

        </div>

<div className="flex flex-col items-center space-y-3">
  <div className="bg-[#6DE5D0] p-6 w-[539.25px] h-[280.65px] flex justify-around items-center font-sanchez text-center ">
    <div>
      <img
        src="/fe.png"
        alt="Tech Support"
        className="h-[153px] w-[105px] mx-auto mb-2"
      />
      <div className="text-lg font-medium">3</div>
      <div className="text-[24px]">Technical Supports</div>
    </div>
    <div>
      <img
        src="/ma.png"
        alt="Ops Team"
        className="h-[153px] w-[105px] mx-auto mb-2"
      />
      <div className="text-lg font-medium">4</div>
      <div className="text-[24px]">Operation Team</div>
    </div>
  </div>

  <div className="bg-[#6DE5D0] rounded-xl p-6 w-[539.25px] h-[128px] flex flex-col items-center justify-center font-sanchez text-center">
    <div className="text-[30px] mb-2">Customer Feedback</div>
    <div className="flex space-x-1">
      {Array(5)
        .fill(0)
        .map((_, i) => (
         <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2834 1.2523L10.3776 10.5605L1.6389 12.058C0.071804 12.3251 -0.556232 14.596 0.580214 15.8966L6.90245 23.1379L5.40712 33.3671C5.13796 35.2161 6.79478 36.6011 8.18244 35.7363L16 30.9064L23.8176 35.7363C25.2052 36.594 26.862 35.2161 26.5929 33.3671L25.0976 23.1379L31.4198 15.8966C32.5562 14.596 31.9282 12.3251 30.3611 12.058L21.6224 10.5605L17.7166 1.2523C17.0168 -0.406871 14.9892 -0.427962 14.2834 1.2523Z" fill="#EDF5E1"/>
</svg>

        ))}
    </div>
  </div>
</div>

      </div>
    </div>
  )
}
