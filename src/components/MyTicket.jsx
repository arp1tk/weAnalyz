import { useState } from "react";
export default function MyTicketView() {
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
      status: "In Progress",
      statusColor: "bg-[#06D6A0]",
      supportBy: "Tech support",
      date: "13/08/21",
      rating: 4,
    },
    {
      id: "1124",
      subject: "New ticket issue",
      status: "On hold",
      statusColor: "bg-[#4361EE]",
      supportBy: "Operation Team",
      date: "14/08/21",
      rating: 4,
    },
    {
      id: "1224",
      subject: "New request",
      status: "Closed",
      statusColor: "bg-gray-400",
      supportBy: "Tech support",
      date: "13/08/21",
      rating: 4,
    },
    {
      id: "1244",
      subject: "Ticket submission",
      status: "In Progress",
      statusColor: "bg-[#06D6A0]",
      supportBy: "Operation Team",
      date: "14/08/21",
      rating: 4,
    },
    {
      id: "1114",
      subject: "Login issue",
      status: "In Progress",
      statusColor: "bg-[#06D6A0]",
      supportBy: "Tech support",
      date: "3/08/21",
      rating: 4,
    },
  ];

 
const renderStars = (rating, index) => {
  const isCustomThirdRow = index === 2;

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        if (isCustomThirdRow) {
          if (star <= 4) {
            return (
              <svg
                key={star}
                width="23"
                height="25"
                viewBox="0 0 23 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0045 0.869652L7.35045 7.3337L1.41227 8.37361C0.347377 8.55913 -0.079392 10.1361 0.692856 11.0393L4.989 16.068L3.97288 23.1716C3.78998 24.4556 4.91584 25.4174 5.85879 24.8169L11.171 21.4628L16.4833 24.8169C17.4263 25.4125 18.5521 24.4556 18.3692 23.1716L17.3531 16.068L21.6492 11.0393C22.4215 10.1361 21.9947 8.55913 20.9298 8.37361L14.9916 7.3337L12.3376 0.869652C11.862 -0.282549 10.4842 -0.297196 10.0045 0.869652Z"
                  fill="#FFC632"
                />
              </svg>
            );
          } else {
            return (
              <svg
                key={star}
                width="22"
                height="25"
                viewBox="0 0 22 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.6894 8.37451L14.7514 7.33398L12.0978 0.869629C11.8592 0.291992 11.3939 0 10.9286 0C10.4661 0 10.004 0.288086 9.76469 0.869629L7.1103 7.3335L1.17189 8.37305C0.106968 8.55859 -0.319812 10.1353 0.452206 11.0386L4.748 16.0679L3.73135 23.1714C3.58693 24.186 4.25996 25 5.01372 25C5.21372 25 5.4194 24.9429 5.61697 24.8169L10.9294 21.4634L16.2414 24.8179C16.4386 24.9424 16.6439 24.999 16.8431 24.999C17.5976 24.999 18.2719 24.188 18.1275 23.1729L17.112 16.0688L21.4086 11.0405C22.1811 10.1372 21.7543 8.56006 20.6894 8.37451ZM15.7506 14.3901L15.0155 15.2505L15.1891 16.4653L15.981 22.0049L11.8377 19.3882L10.9298 18.8149L10.931 3.32715L13.0012 8.37061L13.4548 9.47559L14.4694 9.65332L19.1035 10.4653L15.7506 14.3901Z"
                  fill="#FFC632"
                />
              </svg>
            );
          }
        }

        return (
          <svg
            key={star}
            width="23"
            height="26"
            viewBox="0 0 23 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-100"
          >
            <g style={{ mixBlendMode: "darken" }}>
              <path
                d="M10.0043 0.904438L7.35021 7.62704L1.41202 8.70855C0.347133 8.9015 -0.0796362 10.5415 0.692612 11.4809L4.98875 16.7107L3.97264 24.0984C3.78974 25.4338 4.91559 26.4341 5.85855 25.8096L11.1708 22.3213L16.4831 25.8096C17.426 26.429 18.5519 25.4338 18.369 24.0984L17.3529 16.7107L21.649 11.4809C22.4212 10.5415 21.9945 8.9015 20.9296 8.70855L14.9914 7.62704L12.3373 0.904438C11.8618 -0.293851 10.4839 -0.309084 10.0043 0.904438Z"
                fill="black"
                fillOpacity="0.24"
              />
              <path
                d="M11.1704 0.5C11.3991 0.500996 11.698 0.649099 11.8726 1.08887L14.5259 7.81055L14.6284 8.06934L14.9019 8.11914L20.8403 9.2002C21.1192 9.25072 21.3823 9.50788 21.4946 9.94043C21.6053 10.3663 21.5296 10.8387 21.2632 11.1631H21.2622L16.9663 16.3936L16.8276 16.5625L16.8579 16.7793L17.8735 24.167C17.9439 24.6823 17.7583 25.096 17.5142 25.3154C17.2815 25.5244 17.0122 25.559 16.7573 25.3916L11.4448 21.9033L11.1704 21.7236L10.896 21.9033L5.58447 25.3916L5.58252 25.3926C5.32815 25.5611 5.06005 25.5266 4.82764 25.3174C4.58329 25.0973 4.39788 24.6824 4.46826 24.167L5.48389 16.7793L5.51416 16.5625L5.37549 16.3936L1.07861 11.1631C0.812109 10.8387 0.736534 10.3663 0.847168 9.94043C0.945511 9.5619 1.1593 9.31837 1.39795 9.22949L1.50146 9.2002L7.43994 8.11914L7.71338 8.06934L7.81494 7.81055L10.4692 1.08789C10.6457 0.641696 10.9441 0.499071 11.1704 0.5Z"
                stroke="black"
                strokeOpacity="0.04"
              />
            </g>
          </svg>
        );
      })}
    </div>
  );
};



  return (
    <div className="w-[1060.64px] h-[576px]  p-4 ">
      <h2 className="text-[24px] font-sanchez flex items-center justify-center mb-6 text-gray-800">List of Ticket</h2>

      <div className="flex-col justify-between items-center mb-4">
       <div className="relative w-[308.38px]">
  <input
    type="text"
    placeholder="Find ticket"
    className="w-full px-3 pr-10 py-2 bg-[#C4C4C4A1] placeholder:font-sanchez rounded-[10px] shadow-sm focus:outline-none h-[42px]"
  />
  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
    <svg width="20" height="20" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.5098 25.858C27.5435 22.5544 28.4544 18.4585 28.0602 14.3897C27.666 10.321 25.9959 6.57939 23.3839 3.9136C20.7719 1.2478 17.4106 -0.145638 13.9726 0.0120615C10.5347 0.169761 7.27348 1.86697 4.84152 4.76413C2.40957 7.66129 0.986206 11.5448 0.856195 15.6376C0.726183 19.7304 1.89911 23.7307 4.14032 26.8382C6.38153 29.9458 9.52574 31.9313 12.9439 32.3977C16.3621 32.864 19.8021 31.7767 22.5758 29.3534H22.5737C22.6367 29.4534 22.7039 29.5484 22.7795 29.6409L30.8656 39.2669C31.2594 39.7361 31.7936 39.9998 32.3508 40C32.9079 40.0002 33.4423 39.737 33.8364 39.2682C34.2305 38.7994 34.452 38.1634 34.4522 37.5001C34.4524 36.8369 34.2313 36.2007 33.8375 35.7316L25.7514 26.1056C25.6763 26.0151 25.5955 25.9315 25.5098 25.8555V25.858ZM26.0517 16.247C26.0517 18.0529 25.7529 19.8411 25.1724 21.5095C24.5919 23.1779 23.741 24.6938 22.6683 25.9708C21.5957 27.2477 20.3223 28.2606 18.9208 28.9517C17.5193 29.6428 16.0171 29.9985 14.5002 29.9985C12.9832 29.9985 11.4811 29.6428 10.0796 28.9517C8.67807 28.2606 7.40464 27.2477 6.33198 25.9708C5.25932 24.6938 4.40843 23.1779 3.82791 21.5095C3.24739 19.8411 2.9486 18.0529 2.9486 16.247C2.9486 12.5999 4.16564 9.10221 6.33198 6.52332C8.49832 3.94443 11.4365 2.49563 14.5002 2.49563C17.5638 2.49563 20.502 3.94443 22.6683 6.52332C24.8347 9.10221 26.0517 12.5999 26.0517 16.247Z" fill="black" fillOpacity="0.89"/>
    </svg>
  </div>
</div>

        
        <div className="flex items-center pt-4 space-x-2">
          <span className="text-[20px] font-normal font-roboto text-black">Show:</span>
          <select className="px-2 py-1 w-[91.92px] h-[46px] border border-gray-300 bg-[#C4C4C4]  rounded text-sm ">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <span className="text-[24px] text-black">Entries</span>
        </div>
      </div>
<div className="w-full ">
      <div className=" rounded-lg overflow-hidden">
        <table className="w-full table-auto ">
          <thead className="bg-white">
         
            <tr className="text-[22px] text-black">
              <th className="px-4 py-3 text-left  font-normal ">Ticket No.</th>
              <th className="px-4 py-3 text-left  font-normal ">Subject</th>
              <th className="px-4 py-3 text-left  font-normal ">Status</th>
              <th className="px-4 py-3 text-left  font-normal ">Support by</th>
              <th className="px-4 py-3 text-left  font-normal ">Date</th>
              <th className="px-4 py-3 text-left  font-normal ">Rate</th>
            </tr>
          </thead>
         <tbody>
  {tickets.map((ticket, index) => (
    <tr
      key={ticket.id}
      className={` ${
        index % 2 === 0 ? "bg-[#C4C4C45E]" : "bg-[#C4C4C48F]"
      }`}
    >
      <td
  className="px-4 py-3 text-[22px] text-[#000AFF] underline cursor-pointer"
  onClick={() => openModal(ticket)}
>
  {ticket.id}
</td>
      <td className="px-4 py-3 text-[22px] text-[#000000DB]">
        {ticket.subject}
      </td>
      <td className="px-4 py-3">
        <span
          className={`inline-block px-3 py-1 rounded-[10px] text-[22px] text-black whitespace-normal break-words ${ticket.statusColor}`}
        >
          {ticket.status}
        </span>
      </td>
      <td className="px-4 py-3 text-[22px] text-black whitespace-normal break-words">
        {ticket.supportBy}
      </td>
      <td className="px-4 py-3 text-[22px] text-black">{ticket.date}</td>
      <td className="px-4 py-3">{renderStars(ticket.rating,index)}</td>
    </tr>
  ))}
</tbody>

        </table>
        {showModal && selectedTicket && (
  <div
    className="fixed inset-0 font-sanchez bg-gray-400 bg-opacity-50 flex justify-center items-center z-50"
    onClick={(e) => e.target === e.currentTarget && closeModal()}
  >
    <div className="bg-white p-8 rounded shadow-md w-[600px] text-left">
      <h2 className="text-2xl font-semibold text-center mb-4">Ticket Details</h2>
      <div className="space-y-2 text-lg">
        <p><strong>Ticket No:</strong> {selectedTicket.id}</p>
        <p><strong>Date:</strong> {selectedTicket.date || "N/A"}</p>
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

      </div>
</div>
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