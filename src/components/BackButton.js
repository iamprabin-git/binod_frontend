"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

function BackButton() {
    const router= useRouter();
  return(
    <button className="flex items-center border border-gray-300 bg-blue-600 py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-400 cursor-pointer" onClick={() => router.back()} type="button">
        <FaArrowLeft />
    Back

   </button>
  )

}

export default BackButton;
