export default function PerformanceCard() {
  const user = {
    name: "Operation Name",
    contact: "0123456789",
    department: "ABC",
    totalTickets: 5,
    solved: 2,
    pending: 1,
    inProgress: 2,
    rating: 4.5,
  };

  const otherUsers = [
    "Operation Name 1",
    "Operation Name 2",
    "Operation Name 3",
  ];

  return (
    <div className="flex  w-full max-w-[900px]  text-black font-sans">
      <div className="w-2/3">
        <h2 className="text-[36px] font-sanchez mb-4">Performance</h2>

        <div className="bg-white font-sanchez  rounded-xl p-4">
          <div className="flex  space-x-4 mb-4">
            <div className="bg-[#D9D9D9] w-[162px] h-[184px] rounded-[25px] flex items-center justify-center">
              <svg width="103" height="98" viewBox="0 0 103 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M51.5 0C58.3293 0 64.8789 2.58124 69.708 7.17588C74.5371 11.7705 77.25 18.0022 77.25 24.5C77.25 30.9978 74.5371 37.2295 69.708 41.8241C64.8789 46.4188 58.3293 49 51.5 49C44.6707 49 38.1211 46.4188 33.292 41.8241C28.4629 37.2295 25.75 30.9978 25.75 24.5C25.75 18.0022 28.4629 11.7705 33.292 7.17588C38.1211 2.58124 44.6707 0 51.5 0ZM51.5 61.25C79.9538 61.25 103 72.2138 103 85.75V98H0V85.75C0 72.2138 23.0462 61.25 51.5 61.25Z" fill="black"/>
</svg>

            </div>
            <div className="grid">
              <h3 className="text-[36px] font-normal">{user.name}</h3>
              <div className="bg-[#D9D9D9] text-[14px] rounded-[25px] px-10 py-2 ">
                <p>Contact No: {user.contact}</p>
                <p>Department: {user.department}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#D9D9D9] rounded-[25px] p-4 text-[16px]">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Total Ticket Handle</span>
              <span>{user.totalTickets}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Ticket Solved</span>
              <span>{user.solved}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Ticket Pending</span>
              <span>{user.pending}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Ticket in progress</span>
              <span>{user.inProgress}</span>
            </div>
            <div className="flex justify-between  mt-2">
              <span className="mr-2">Rating</span>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={i <= user.rating ? "orange" : "lightgray"}
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.782 1.4 8.17L12 18.896l-7.334 3.867 1.4-8.17-5.934-5.782 8.2-1.193L12 .587z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-1/3 pl-4 space-y-4 pt-28">
        {otherUsers.map((name, index) => (
          <div
            key={index}
            className="flex items-center bg-white p-2 rounded-xl space-x-3 "
          >
            <div className="bg-[#D9D9D9] w-[80px] h-[90px] rounded-lg flex items-center justify-center">
           <svg width="65" height="58" viewBox="0 0 65 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.5 0C36.8098 0 40.943 1.52767 43.9905 4.24695C47.038 6.96623 48.75 10.6544 48.75 14.5C48.75 18.3456 47.038 22.0338 43.9905 24.753C40.943 27.4723 36.8098 29 32.5 29C28.1902 29 24.057 27.4723 21.0095 24.753C17.962 22.0338 16.25 18.3456 16.25 14.5C16.25 10.6544 17.962 6.96623 21.0095 4.24695C24.057 1.52767 28.1902 0 32.5 0ZM32.5 36.25C50.4562 36.25 65 42.7388 65 50.75V58H0V50.75C0 42.7388 14.5437 36.25 32.5 36.25Z" fill="black"/>
</svg>

            </div>
            <div>
              <p className="text-[16px] font-sanchez ">{name}</p>
              <button className="bg-[#35D4C2] text-black px-3 mx-3 py-1 rounded-[20px] font-sanchez text-[15px] mt-1">
                View details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
