import { useState } from "react";
export default function MyTicketTeam() {

      const [selectedTicket, setSelectedTicket] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (ticket) => {
    setSelectedTicket(ticket);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedTicket(null);
    setShowModal(false);
  };
  const tickets = [
    {
      id: "1234",
      subject: "Login issue",
      category: "Access Issue",
      priority: "High",
      date: "13/08/21",
      status: "In Progress",
    },
    {
      id: "1124", 
      subject: "New ticket issue",
      category: "Access Issue",
      priority: "Medium",
      date: "14/08/21",
      status: "On hold",
    },
    {
      id: "1224",
      subject: "New request",
      category: "Feedback", 
      priority: "Low",
      date: "13/08/21",
      status: "Closed",
    },
    {
      id: "1244",
      subject: "Ticket submission",
      category: "Ticketing",
      priority: "High",
      date: "14/08/21",
      status: "In Progress",
    },
    {
      id: "1114",
      subject: "Login issue",
      category: "Access Issue",
      priority: "High",
      date: "3/08/21",
      status: "In Progress",
    },
  ];

  return (
    <div className="w-full h-full p-4">
      <h2 className="text-[24px] font-bold font-sanchez mb-6 text-black">My Ticket</h2>
      
       <div className="flex-col justify-between items-center mb-4">
        <div className="relative w-[308px]">
          <input
            type="text"
            placeholder="Find ticket"
            className="w-full px-3 pr-10 py-2 placeholder:font-sanchez bg-[#C4C4C4A1] placeholder:text-gray-600 rounded-[10px] shadow-sm focus:outline-none h-[42px]"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="20" height="20" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.5098 25.858C27.5435 22.5544 28.4544 18.4585 28.0602 14.3897C27.666 10.321 25.9959 6.57939 23.3839 3.9136C20.7719 1.2478 17.4106 -0.145638 13.9726 0.0120615C10.5347 0.169761 7.27348 1.86697 4.84152 4.76413C2.40957 7.66129 0.986206 11.5448 0.856195 15.6376C0.726183 19.7304 1.89911 23.7307 4.14032 26.8382C6.38153 29.9458 9.52574 31.9313 12.9439 32.3977C16.3621 32.864 19.8021 31.7767 22.5758 29.3534H22.5737C22.6367 29.4534 22.7039 29.5484 22.7795 29.6409L30.8656 39.2669C31.2594 39.7361 31.7936 39.9998 32.3508 40C32.9079 40.0002 33.4423 39.737 33.8364 39.2682C34.2305 38.7994 34.452 38.1634 34.4522 37.5001C34.4524 36.8369 34.2313 36.2007 33.8375 35.7316L25.7514 26.1056C25.6763 26.0151 25.5955 25.9315 25.5098 25.8555V25.858ZM26.0517 16.247C26.0517 18.0529 25.7529 19.8411 25.1724 21.5095C24.5919 23.1779 23.741 24.6938 22.6683 25.9708C21.5957 27.2477 20.3223 28.2606 18.9208 28.9517C17.5193 29.6428 16.0171 29.9985 14.5002 29.9985C12.9832 29.9985 11.4811 29.6428 10.0796 28.9517C8.67807 28.2606 7.40464 27.2477 6.33198 25.9708C5.25932 24.6938 4.40843 23.1779 3.82791 21.5095C3.24739 19.8411 2.9486 18.0529 2.9486 16.247C2.9486 12.5999 4.16564 9.10221 6.33198 6.52332C8.49832 3.94443 11.4365 2.49563 14.5002 2.49563C17.5638 2.49563 20.502 3.94443 22.6683 6.52332C24.8347 9.10221 26.0517 12.5999 26.0517 16.247Z" fill="black" fillOpacity="0.89"/>
            </svg>
          </div>
        </div>
        
        <div className="flex items-center pt-4 space-x-2">
          <span className="text-[20px] font-normal text-black">Show:</span>
        <div className="relative inline-block">
  <select 
    className="appearance-none px-2 w-[92px] h-[46px] border border-gray-300 bg-[#C4C4C4] rounded text-sm pl-3 pr-8 focus:outline-none"
  >
    <option>10</option>
    <option>25</option>
    <option>50</option>
  </select>
  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 translate-x-1 pointer-events-none">
    <svg width="25" height="36" viewBox="0 0 25 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4.5C0 3.30653 0.32924 2.16193 0.915291 1.31802C1.50134 0.474106 2.2962 0 3.125 0L21.875 0C22.7038 0 23.4987 0.474106 24.0847 1.31802C24.6708 2.16193 25 3.30653 25 4.5V31.5C25 32.6935 24.6708 33.8381 24.0847 34.682C23.4987 35.5259 22.7038 36 21.875 36H3.125C2.2962 36 1.50134 35.5259 0.915291 34.682C0.32924 33.8381 0 32.6935 0 31.5V4.5ZM6.25 13.5C6.09941 13.4999 5.95201 13.5626 5.82555 13.6803C5.69909 13.7981 5.59897 13.966 5.53722 14.1637C5.47548 14.3615 5.45475 14.5808 5.47753 14.7952C5.50031 15.0095 5.56563 15.2098 5.66563 15.372L11.9156 25.497C11.9889 25.616 12.0789 25.7112 12.1796 25.7764C12.2804 25.8416 12.3896 25.8753 12.5 25.8753C12.6104 25.8753 12.7196 25.8416 12.8204 25.7764C12.9211 25.7112 13.0111 25.616 13.0844 25.497L19.3344 15.372C19.4344 15.2098 19.4997 15.0095 19.5225 14.7952C19.5452 14.5808 19.5245 14.3615 19.4628 14.1637C19.401 13.966 19.3009 13.7981 19.1744 13.6803C19.048 13.5626 18.9006 13.4999 18.75 13.5H6.25Z" fill="black" fill-opacity="0.66"/>
</svg>

  </div>
</div>
          <span className="text-[24px] text-black">Entries</span>
        </div>
      </div>

      <div className="w-full rounded-lg overflow-hidden">
        <table className="w-full table-auto">
          <thead className="bg-white">
            <tr className="text-[22px] text-black">
              <th className="px-4 py-3 text-left font-normal">Ticket No.</th>
              <th className="px-4 py-3 text-left font-normal">Subject</th>
              <th className="px-4 py-3 text-left font-normal">Category</th>
              <th className="px-4 py-3 text-left font-normal">Priority</th>
              <th className="px-4 py-3 text-left font-normal">Date</th>
              <th className="px-4 py-3 text-left font-normal">Status</th>
              <th className="px-4 py-3 text-left font-normal">Person in charge</th>
              <th className="px-4 py-3 text-left font-normal">Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={ticket.id} className={index % 2 === 0 ? "bg-[#C4C4C45E]" : "bg-[#C4C4C48F]"}>
             <td
  className="px-4 py-3 text-[22px] text-[#000AFF] underline cursor-pointer"
  onClick={() => openModal(ticket)}
>
  {ticket.id}
</td>
                <td className="px-4 py-3 text-[22px] text-[#000000DB]">{ticket.subject}</td>
                <td className="px-4 py-3 text-[22px] text-black">{ticket.category}</td>
                <td className="px-4 py-3 text-[22px] text-black">{ticket.priority}</td>
                <td className="px-4 py-3 text-[22px] text-black">{ticket.date}</td>
              <td className="px-4 py-3 text-[22px]">
  <span className={`px-3 py-1 rounded-full ${
    ticket.status === "In Progress" ? "bg-[#5CDB95] text-black" : 
    ticket.status === "On hold" ? "bg-[#05386B] text-white" : 
    ticket.status === "Closed" ? "bg-black text-white" : 
    "bg-gray-200 text-black"
  }`}>
    {ticket.status}
  </span>
</td>
                <td className="px-4 py-3 text-[22px] text-black"></td>
               <td className="px-4 py-3 text-[22px] text-black">
  <div className="flex space-x-2">
   
    <button>
   <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.13 9L16.39 7.74C16.83 7.3 17.39 7.06 18 7V6L12 0H2C0.89 0 0 0.89 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H8V16.13L8.13 16H2V2H9V9H15.13ZM11 1.5L16.5 7H11V1.5ZM16.13 10.83L18.17 12.87L12.04 19H10V16.96L16.13 10.83ZM19.85 11.19L18.87 12.17L16.83 10.13L17.81 9.15C18 8.95 18.33 8.95 18.53 9.15L19.85 10.47C20.05 10.67 20.05 11 19.85 11.19Z" fill="black"/>
</svg>

    </button>

   
    <button>
   <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.1667 15.4286V18H8.16667V15.4286C8.16667 15.4286 8.16667 10.2857 15.1667 10.2857C22.1667 10.2857 22.1667 15.4286 22.1667 15.4286ZM18.6667 3.85714C18.6667 3.09427 18.4614 2.34853 18.0768 1.71423C17.6922 1.07993 17.1456 0.585547 16.5061 0.293609C15.8665 0.00167125 15.1628 -0.0747131 14.4839 0.0741156C13.8049 0.222944 13.1813 0.590301 12.6918 1.12973C12.2023 1.66916 11.869 2.35644 11.7339 3.10465C11.5989 3.85287 11.6682 4.62841 11.9331 5.33321C12.198 6.03801 12.6466 6.64041 13.2222 7.06424C13.7977 7.48807 14.4744 7.71429 15.1667 7.71429C16.0949 7.71429 16.9852 7.30791 17.6415 6.58456C18.2979 5.8612 18.6667 4.88012 18.6667 3.85714ZM22.4 10.3629C23.0377 11.0112 23.5519 11.7931 23.9124 12.6629C24.273 13.5326 24.4727 14.4728 24.5 15.4286V18H28V15.4286C28 15.4286 28 10.9929 22.4 10.3629ZM21 1.46718e-06C20.6475 0.000233941 20.2972 0.0609614 19.9617 0.180001C20.6442 1.25868 21.0102 2.54209 21.0102 3.85714C21.0102 5.17219 20.6442 6.45561 19.9617 7.53429C20.2972 7.65333 20.6475 7.71405 21 7.71429C21.9283 7.71429 22.8185 7.30791 23.4749 6.58456C24.1313 5.8612 24.5 4.88012 24.5 3.85714C24.5 2.83417 24.1313 1.85309 23.4749 1.12973C22.8185 0.406378 21.9283 1.46718e-06 21 1.46718e-06ZM9.33333 6.42857H5.83333V2.57143H3.5V6.42857H0V9H3.5V12.8571H5.83333V9H9.33333V6.42857Z" fill="black"/>
</svg>

    </button>

 
    <button>
   <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 18H14V15.8824H0V18ZM14 6.35294H10V0H4V6.35294H0L7 13.7647L14 6.35294Z" fill="black"/>
</svg>

    </button>
  </div>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
{showModal && selectedTicket && (
  <div className="fixed inset-0 font-sanchez bg-gray-400 bg-opacity-50 flex justify-center items-center z-50"
  onClick={(e) => e.target === e.currentTarget && closeModal()}
>
    <div className="bg-white p-8 rounded shadow-md w-[751px] h-[600px] text-left">
      <h2 className="text-2xl font-semibold text-center mb-4">Ticket Details</h2>
      <div className="space-y-2 text-lg">
        <p><strong>Ticket No:</strong> {selectedTicket.id}</p>
        <p><strong>Date:</strong> {selectedTicket.date || ""}</p>
        <p><strong>Name:</strong> {selectedTicket.name || ""}</p>
        <p><strong>Dept:</strong> {selectedTicket.department || ""}</p>
        <p><strong>Title:</strong> {selectedTicket.title || ""}</p>
        <p><strong>Description:</strong> {selectedTicket.description || ""}</p>
        <p><strong>Category:</strong> {selectedTicket.category || ""}</p>
        <p><strong>Type:</strong> {selectedTicket.type || ""}</p>
        <p><strong>Priority:</strong> {selectedTicket.priority || ""}</p>
        <p><strong>Status:</strong> {selectedTicket.status || ""}</p>
        <p><strong>Attachment:</strong> {selectedTicket.attachment || ""}</p>
      </div>
      <div className="flex justify-center gap-8 mt-6">
        <button className="bg-[#8894FF]  text-black px-6 py-2 rounded-[10px]" onClick={() => console.log("Update clicked")}>
          Update
        </button>
        <button className="bg-[#43D752] text-black px-6 py-2 rounded-[10px]" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  </div>
  
)}

      <div className="flex justify-between items-center mt-4 text-[22px] text-black">
        <div>Showing 1 to 5 of 5 entries</div>
         <div className="flex space-x-1 items-center">
  <button className="px-3 py-1 hover:bg-gray-100 flex items-center space-x-1">
   <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3392 0.759659C14.2754 0.694996 14.1996 0.643692 14.1161 0.608687C14.0327 0.573683 13.9432 0.555664 13.8529 0.555664C13.7625 0.555664 13.673 0.573683 13.5896 0.608687C13.5061 0.643692 13.4303 0.694996 13.3665 0.759659L5.12337 9.092C5.0594 9.1565 5.00864 9.23313 4.97401 9.31749C4.93938 9.40184 4.92156 9.49228 4.92156 9.58361C4.92156 9.67494 4.93938 9.76538 4.97401 9.84974C5.00864 9.9341 5.0594 10.0107 5.12337 10.0752L13.3665 18.4076C13.4955 18.5379 13.6704 18.6112 13.8529 18.6112C14.0353 18.6112 14.2102 18.5379 14.3392 18.4076C14.4682 18.2772 14.5407 18.1003 14.5407 17.916C14.5407 17.7316 14.4682 17.5547 14.3392 17.4243L6.58103 9.58361L14.3392 1.74288C14.4032 1.67838 14.4539 1.60175 14.4886 1.51739C14.5232 1.43304 14.541 1.3426 14.541 1.25127C14.541 1.15993 14.5232 1.0695 14.4886 0.985141C14.4539 0.900783 14.4032 0.824159 14.3392 0.759659Z" fill="black" fill-opacity="0.91"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.50327 0.759659C9.43946 0.694996 9.36365 0.643692 9.2802 0.608687C9.19674 0.573683 9.10728 0.555664 9.01692 0.555664C8.92657 0.555664 8.8371 0.573683 8.75365 0.608687C8.67019 0.643692 8.59439 0.694996 8.53058 0.759659L0.287432 9.092C0.22346 9.1565 0.172707 9.23313 0.138077 9.31749C0.103447 9.40184 0.0856209 9.49228 0.0856209 9.58361C0.0856209 9.67494 0.103447 9.76538 0.138077 9.84974C0.172707 9.9341 0.22346 10.0107 0.287432 10.0752L8.53058 18.4076C8.65956 18.5379 8.83451 18.6112 9.01692 18.6112C9.19934 18.6112 9.37428 18.5379 9.50327 18.4076C9.63225 18.2772 9.70472 18.1003 9.70472 17.916C9.70472 17.7316 9.63225 17.5547 9.50327 17.4243L1.74509 9.58361L9.50327 1.74288C9.56724 1.67838 9.61799 1.60175 9.65262 1.51739C9.68725 1.43304 9.70508 1.3426 9.70508 1.25127C9.70508 1.15993 9.68725 1.0695 9.65262 0.985141C9.61799 0.900783 9.56724 0.824159 9.50327 0.759659Z" fill="black" fill-opacity="0.91"/>
</svg>
<svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.12391 0.192069C8.07145 0.131186 8.00914 0.082882 7.94054 0.0499235C7.87194 0.0169651 7.7984 0 7.72413 0C7.64985 0 7.57631 0.0169651 7.50771 0.0499235C7.43911 0.082882 7.3768 0.131186 7.32435 0.192069L0.548438 8.0373C0.495853 8.09803 0.454133 8.17018 0.425667 8.2496C0.397201 8.32903 0.382548 8.41418 0.382548 8.50017C0.382548 8.58617 0.397201 8.67131 0.425667 8.75074C0.454133 8.83017 0.495853 8.90231 0.548438 8.96304L7.32435 16.8083C7.43038 16.931 7.57418 17 7.72413 17C7.87407 17 8.01788 16.931 8.12391 16.8083C8.22993 16.6855 8.2895 16.519 8.2895 16.3454C8.2895 16.1718 8.22993 16.0053 8.12391 15.8825L1.74664 8.50017L8.12391 1.11781C8.17649 1.05708 8.21821 0.984933 8.24668 0.905507C8.27514 0.82608 8.28979 0.740932 8.28979 0.654938C8.28979 0.568945 8.27514 0.483796 8.24668 0.40437C8.21821 0.324943 8.17649 0.252799 8.12391 0.192069Z" fill="black" fill-opacity="0.91"/>
</svg>

  </button>

  <button className="px-3 py-1 text-black rounded">1</button>

  <button className="px-3 py-1 hover:bg-gray-100 flex items-center space-x-1">
  
    <svg width="8" height="17" viewBox="0 0 8 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.04066 0.192069C1.08656 0.131186 1.14108 0.082882 1.2011 0.0499235C1.26113 0.0169651 1.32548 0 1.39047 0C1.45546 0 1.51981 0.0169651 1.57983 0.0499235C1.63986 0.082882 1.69438 0.131186 1.74027 0.192069L7.66919 8.0373C7.71521 8.09803 7.75171 8.17018 7.77662 8.2496C7.80153 8.32903 7.81435 8.41418 7.81435 8.50017C7.81435 8.58617 7.80153 8.67131 7.77662 8.75074C7.75171 8.83017 7.71521 8.90231 7.66919 8.96304L1.74027 16.8083C1.6475 16.931 1.52167 17 1.39047 17C1.25926 17 1.13344 16.931 1.04066 16.8083C0.947887 16.6855 0.895766 16.519 0.895766 16.3454C0.895766 16.1718 0.947887 16.0053 1.04066 15.8825L6.62076 8.50017L1.04066 1.11781C0.99465 1.05708 0.958144 0.984933 0.933236 0.905507C0.908328 0.82608 0.895508 0.740932 0.895508 0.654938C0.895508 0.568945 0.908328 0.483796 0.933236 0.40437C0.958144 0.324943 0.99465 0.252799 1.04066 0.192069Z" fill="black" fill-opacity="0.91"/>
</svg>

<svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.725889 0.759659C0.793453 0.694996 0.873715 0.643692 0.962079 0.608687C1.05044 0.573683 1.14517 0.555664 1.24084 0.555664C1.33651 0.555664 1.43124 0.573683 1.51961 0.608687C1.60797 0.643692 1.68823 0.694996 1.7558 0.759659L10.4838 9.092C10.5516 9.1565 10.6053 9.23313 10.642 9.31749C10.6786 9.40184 10.6975 9.49228 10.6975 9.58361C10.6975 9.67494 10.6786 9.76538 10.642 9.84974C10.6053 9.9341 10.5516 10.0107 10.4838 10.0752L1.7558 18.4076C1.61922 18.5379 1.43399 18.6112 1.24084 18.6112C1.0477 18.6112 0.862464 18.5379 0.725889 18.4076C0.589315 18.2772 0.512589 18.1003 0.512589 17.916C0.512589 17.7316 0.589315 17.5547 0.725889 17.4243L8.94043 9.58361L0.725889 1.74288C0.658155 1.67838 0.604415 1.60175 0.567748 1.51739C0.531081 1.43304 0.512207 1.3426 0.512207 1.25127C0.512207 1.15993 0.531081 1.0695 0.567748 0.985141C0.604415 0.900783 0.658155 0.824159 0.725889 0.759659Z" fill="black" fill-opacity="0.91"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.84625 0.759659C5.91381 0.694996 5.99408 0.643692 6.08244 0.608687C6.1708 0.573683 6.26553 0.555664 6.3612 0.555664C6.45687 0.555664 6.5516 0.573683 6.63997 0.608687C6.72833 0.643692 6.8086 0.694996 6.87616 0.759659L15.6042 9.092C15.6719 9.1565 15.7257 9.23313 15.7623 9.31749C15.799 9.40184 15.8179 9.49228 15.8179 9.58361C15.8179 9.67494 15.799 9.76538 15.7623 9.84974C15.7257 9.9341 15.6719 10.0107 15.6042 10.0752L6.87616 18.4076C6.73958 18.5379 6.55435 18.6112 6.3612 18.6112C6.16806 18.6112 5.98282 18.5379 5.84625 18.4076C5.70968 18.2772 5.63295 18.1003 5.63295 17.916C5.63295 17.7316 5.70968 17.5547 5.84625 17.4243L14.0608 9.58361L5.84625 1.74288C5.77852 1.67838 5.72478 1.60175 5.68811 1.51739C5.65144 1.43304 5.63257 1.3426 5.63257 1.25127C5.63257 1.15993 5.65144 1.0695 5.68811 0.985141C5.72478 0.900783 5.77852 0.824159 5.84625 0.759659Z" fill="black" fill-opacity="0.91"/>
</svg>

  </button>
</div>
      </div>
    </div>
  );
}