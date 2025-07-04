
export default function NewTicketView() {
  return (
    <div className="p-6 w-[984px] h-[538px] mx-auto">
      <h2 className="text-3xl text-center font-sanchez font-normal mb-8 text-gray-800 tracking-normal leading-none">
        Create New Ticket
      </h2>

      <form className="font-sanchez space-y-6">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex items-center gap-4">
            <label htmlFor="ticket-no" className="text-[24px] font-normal text-gray-800 w-[120px] flex-shrink-0">
              Ticket No.
            </label>
            <input
              id="ticket-no"
              type="text"
              className="flex-1 px-3 py-2 bg-[#C4C4C4A1] rounded-[10px] shadow-sm focus:outline-none h-[42px]"
            />
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="date" className="text-[24px] font-normal text-gray-800 w-[120px] flex-shrink-0">
              Date:
            </label>
            <input
              id="date"
              type="text"
              className="flex-1 px-3 py-2 bg-[#C4C4C4A1] rounded-[10px] shadow-sm focus:outline-none h-[42px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex items-center gap-4">
            <label htmlFor="name" className="text-[24px] font-normal text-gray-800 w-[120px] flex-shrink-0">
              Name:
            </label>
            <input
              id="name"
              type="text"
              className="flex-1 px-3 py-2 bg-[#C4C4C4A1] rounded-[10px] shadow-sm focus:outline-none h-[42px]"
            />
          </div>
         <div className="flex items-center gap-4">
  <label
    htmlFor="department"
    className="text-[24px] font-normal text-gray-800 w-[150px] flex-shrink-0"
  >
    Department:
  </label>
  <input
    id="department"
    type="text"
    className="flex-1 px-3 py-2 bg-[#C4C4C4A1] rounded-[10px] shadow-sm focus:outline-none h-[42px]"
  />
</div>

        </div>

        <div className="space-y-3">
          <label htmlFor="subject" className="text-[24px] font-normal text-gray-800 block">
            Subject:
          </label>
          <input
            id="subject"
            type="text"
            className="w-full px-3 py-2 bg-[#C4C4C4A1] rounded-[10px] focus:outline-none shadow-[0_2px_4px_rgba(0,0,0,0.1)] h-[42px]"
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <label htmlFor="category" className="text-[24px] font-normal text-gray-800 block">
                Category:
              </label>
              <input
                id="category"
                type="text"
         
                className="w-full px-3 py-2 bg-[#C4C4C4A1] rounded-[10px] focus:outline-none shadow-[0_2px_4px_rgba(0,0,0,0.1)] h-[42px]"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="type" className="text-[24px] font-normal text-gray-800 block">
                Type:
              </label>
              <input
                id="type"
                type="text"
               
                className="w-full px-3 py-2 bg-[#C4C4C4A1] rounded-[10px] focus:outline-none shadow-[0_2px_4px_rgba(0,0,0,0.1)] h-[42px]"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="priority" className="text-[24px] font-normal text-gray-800 block">
                Priority:
              </label>
              <input
                id="priority"
                type="text"
              
                className="w-full px-3 py-2 bg-[#C4C4C4A1] rounded-[10px] focus:outline-none shadow-[0_2px_4px_rgba(0,0,0,0.1)] h-[42px]"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label htmlFor="description" className="text-[24px] font-normal text-gray-800 block">
              Description:
            </label>
            <div className="relative">
              <textarea
                id="description"
                className="w-full h-[280px] px-3 py-2 bg-[#C4C4C4A1] rounded-[10px] resize-none focus:outline-none shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
            
              />
              <button
                type="button"
                className="absolute bottom-3 right-3 w-[54.39px] h-[47.51px] bg-[#55D6C2] hover:bg-teal-500 rounded-[10px] flex items-center justify-center text-white transition-colors"
              >
               <svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4.71063C0 3.4613 0.628237 2.26313 1.74651 1.37971C2.86478 0.496297 4.38147 0 5.96294 0C7.54442 0 9.06111 0.496297 10.1794 1.37971C11.2977 2.26313 11.9259 3.4613 11.9259 4.71063V21.6689C11.9259 22.4185 11.5489 23.1374 10.878 23.6675C10.207 24.1975 9.29701 24.4953 8.34812 24.4953C7.39924 24.4953 6.48922 24.1975 5.81826 23.6675C5.1473 23.1374 4.77036 22.4185 4.77036 21.6689V8.47914C4.77036 8.22927 4.896 7.98964 5.11966 7.81295C5.34331 7.63627 5.64665 7.53701 5.96294 7.53701C6.27924 7.53701 6.58258 7.63627 6.80623 7.81295C7.02989 7.98964 7.15553 8.22927 7.15553 8.47914V21.6689C7.15553 21.9188 7.28118 22.1584 7.50484 22.3351C7.72849 22.5118 8.03183 22.611 8.34812 22.611C8.66442 22.611 8.96776 22.5118 9.19141 22.3351C9.41506 22.1584 9.54071 21.9188 9.54071 21.6689V4.71063C9.54071 4.33947 9.44817 3.97194 9.26837 3.62902C9.08857 3.28611 8.82504 2.97453 8.49281 2.71208C8.16058 2.44963 7.76617 2.24144 7.3321 2.0994C6.89802 1.95736 6.43278 1.88425 5.96294 1.88425C5.49311 1.88425 5.02787 1.95736 4.59379 2.0994C4.15972 2.24144 3.76531 2.44963 3.43308 2.71208C3.10085 2.97453 2.83732 3.28611 2.65752 3.62902C2.47772 3.97194 2.38518 4.33947 2.38518 4.71063V21.6689C2.38518 22.9182 3.01341 24.1164 4.13168 24.9998C5.24995 25.8832 6.76665 26.3795 8.34812 26.3795C9.92959 26.3795 11.4463 25.8832 12.5646 24.9998C13.6828 24.1164 14.3111 22.9182 14.3111 21.6689V8.47914C14.3111 8.22927 14.4367 7.98964 14.6604 7.81295C14.884 7.63627 15.1874 7.53701 15.5037 7.53701C15.82 7.53701 16.1233 7.63627 16.3469 7.81295C16.5706 7.98964 16.6962 8.22927 16.6962 8.47914V21.6689C16.6962 23.418 15.8167 25.0954 14.2511 26.3322C12.6856 27.569 10.5622 28.2638 8.34812 28.2638C6.13406 28.2638 4.01069 27.569 2.44511 26.3322C0.879532 25.0954 0 23.418 0 21.6689V4.71063Z" fill="black"/>
</svg>

              </button>
            </div>
          </div>
        </div>

    <div className="flex items-center justify-between pt-6">
<div className="flex items-center">
  <img
    src="/robot.png" 
    alt="reCAPTCHA verification"
    className="w-[320px] h-auto"
  />
</div>

  <button
    type="submit"
    className="bg-teal-400 hover:bg-teal-500 text-white px-8 py-2 rounded-[10px] font-medium transition-colors"
  >
    Submit
  </button>
</div>
      </form>
    </div>
  )
}
