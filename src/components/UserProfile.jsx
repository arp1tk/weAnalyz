import { useState } from "react";

export default function UserProfile() {
  const [rating, setRating] = useState(0);

  return (
    <div className="ml-[30px]">
        <h2 className="text-[36px] font-sanchez mb-3">User Profile</h2>
    <div className="p-6 bg-[#55D6C2AD] w-[1088px] h-[607px] font-sans text-black">
     

      <div className="flex flex-wrap gap-8">
        <div className="bg-white rounded-xl ml-10 shadow-md p-6 w-[430px] h-[396px] relative">
          <button className="absolute top-4 right-4">
           <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.4515 15.1579L25.4045 13.0358C26.0865 12.2947 26.9545 11.8905 27.9 11.7895V10.1053L18.6 0H3.1C1.3795 0 0 1.49895 0 3.36842V26.9474C0 27.8407 0.326606 28.6975 0.907969 29.3292C1.48933 29.9609 2.27783 30.3158 3.1 30.3158H12.4V27.1663L12.6015 26.9474H3.1V3.36842H13.95V15.1579H23.4515ZM17.05 2.52632L25.575 11.7895H17.05V2.52632ZM25.0015 18.24L28.1635 21.6758L18.662 32H15.5V28.5642L25.0015 18.24ZM30.7675 18.8463L29.2485 20.4968L26.0865 17.0611L27.6055 15.4105C27.9 15.0737 28.4115 15.0737 28.7215 15.4105L30.7675 17.6337C31.0775 17.9705 31.0775 18.5263 30.7675 18.8463Z" fill="black"/>
</svg>

          </button>

          <div className="w-[179px] h-[162px] bg-[#D9D9D9] rounded-full flex items-center justify-center mx-auto mb-4">
           <svg width="94" height="95" viewBox="0 0 94 95" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.83333 95C7.83333 95 0 95 0 87.0833C0 79.1667 7.83333 55.4167 47 55.4167C86.1667 55.4167 94 79.1667 94 87.0833C94 95 86.1667 95 86.1667 95H7.83333ZM47 47.5C53.2326 47.5 59.2099 44.9978 63.617 40.5438C68.0241 36.0898 70.5 30.0489 70.5 23.75C70.5 17.4511 68.0241 11.4102 63.617 6.95621C59.2099 2.50223 53.2326 0 47 0C40.7674 0 34.7901 2.50223 30.383 6.95621C25.9759 11.4102 23.5 17.4511 23.5 23.75C23.5 30.0489 25.9759 36.0898 30.383 40.5438C34.7901 44.9978 40.7674 47.5 47 47.5Z" fill="black"/>
</svg>

          </div>

          <div className="text-[20px] font-sanchez mt-10">
            <p>Username</p>
            <p>Contact Number</p>
            <p>Email</p>
            <p>Department</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md h-[234px] p-6 w-[399px] ml-8">
          <h3 className="text-center text-[16px] font-semibold mb-2">
            Give Your Feedback
          </h3>

          <div className="bg-[#9C9C9C] font-sanchez text-black px-2 py-1 h-[49px] w-[305px] mb-2">
            [Lorem Ipsum]
          </div>

          <div className="flex justify-center space-x-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                onClick={() => setRating(i)}
                xmlns="http://www.w3.org/2000/svg"
                fill={i <= rating ? "orange" : "lightgray"}
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="cursor-pointer"
              >
                <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.782 1.4 8.17L12 18.896l-7.334 3.867 1.4-8.17-5.934-5.782 8.2-1.193L12 .587z" />
              </svg>
            ))}
          </div>

          <button className="w-full bg-[#35D4C2] text-black font-sanchez py-2 rounded-[10px] shadow-black hover:opacity-90 transition">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
