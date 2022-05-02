import React from "react";
import { PhoneIcon } from "@heroicons/react/solid";
import { ClockIcon } from "@heroicons/react/outline";
import { AiOutlineUser } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import enoch from "../../assets/images/enoch.jpeg";
export default function AudienceUser(props) {
  return (
    <div className="bg-[#FFFFFF] rounded-[20px] flex justify-between p-4 items-center mb-4 md:mb-0">
      {/* left */}
      <div className="rounded-full w-8 border-[#333] relative">
        <FaFacebookMessenger className="w-3 text-[#2F80ED] absolute top-[-10%] left-0" />
        <img src={enoch} alt="avatar" className="w-full rounded-full" />
      </div>
      {/* middle */}
      <div className="bg-[#F2F2F2] rounded-[20px] px-8 py-2">
        <div className="flex justify-between">
          <h6 className="text-[10px] align-middle font-medium">
            Alfred Chadrack Ruhara Alfred
          </h6>
          <FaFacebookMessenger className="w-3 text-[#2F80ED]" />
        </div>
        <div className="flex justify-between gap-x-2 items-center">
          <div className="flex items-center gap-x-1">
            <PhoneIcon className="w-3" />
            <p className="text-[9px]">+256 750364404</p>
          </div>
          <div className="flex items-center gap-x-1">
            <AiOutlineUser className="w-3" />
            <p className="text-[9px]">Male</p>
          </div>
          <div className="flex items-center gap-x-1">
            <ClockIcon className="w-3" />
            <p className="text-[9px]">27, june 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
}
