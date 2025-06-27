"use client";
import { IoSearchSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GrSettingsOption } from "react-icons/gr";
import BackButton from "../BackButton";
import Link from "next/link";
import { CUSTOMER_ADD_ROUTE } from "@/constants/routes";

// Main CustomerTable Component
function CustomerTable() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        {/* Header with Back Button and Add Customer Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
          <BackButton 
            text="Back to Dashboard" 
            className="mb-0" 
          />
          
          {/* Add Customer Button - Prominent and easy to find */}
          <Link 
            href={CUSTOMER_ADD_ROUTE} 
            className="flex items-center justify-center w-full md:w-auto py-2 px-6 text-base font-medium text-blue-600 bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors duration-200 shadow-lg"
          >
            <FaPlus className="h-4 w-4 mr-2" />
            Add New Customer
          </Link>
        </div>
        
        {/* Main Table Card */}
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          {/* Table Header with Search and Actions */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <IoSearchSharp className="w-5 h-5 text-gray-500 dark:text-gray-400"/>
                  </div>
                  <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required />
                </div>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <div className="flex items-center space-x-3 w-full md:w-auto">
                <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900  bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                  <FaAngleDown className="-ml-1 mr-1.5 w-5 h-5"/>
                  Actions
                </button>
                <div id="actionsDropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                    <li>
                      <Link href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass Edit</Link>
                    </li>
                  </ul>
                  <div className="py-1">
                    <Link href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete all</Link>
                  </div>
                </div>
                <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900  bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                  <FaFilter className="h-4 w-4 mr-2 text-gray-400"/>
                  Filter
                  <FaAngleDown className="-ml-1 mr-1.5 w-5 h-5"/>
                </button>
                <div id="filterDropdown" className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                  <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose brand</h6>
                  <ul className="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                    <li className="flex items-center">
                      <input id="apple" type="checkbox" defaultValue className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Apple (56)</label>
                    </li>
                    <li className="flex items-center">
                      <input id="fitbit" type="checkbox" defaultValue className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor="fitbit" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Microsoft (16)</label>
                    </li>
                    <li className="flex items-center">
                      <input id="razor" type="checkbox" defaultValue className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor="razor" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Razor (49)</label>
                    </li>
                    <li className="flex items-center">
                      <input id="nikon" type="checkbox" defaultValue className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor="nikon" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Nikon (12)</label>
                    </li>
                    <li className="flex items-center">
                      <input id="benq" type="checkbox" defaultValue className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor="benq" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">BenQ (74)</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">Image</th>
                  <th scope="col" className="px-4 py-3">Customer Name</th>
                  <th scope="col" className="px-4 py-3">Address</th>
                  <th scope="col" className="px-4 py-3">Contact Number</th>
                  <th scope="col" className="px-4 py-3">Email Address</th>
                  <th scope="col" className="px-4 py-3">Nationality</th>
                  <th scope="col" className="px-4 py-3">Gender</th>
                  <th scope="col" className="px-4 py-3"><GrSettingsOption className="h-4 w-4"/></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-700">
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                        <img 
                          src="https://via.placeholder.com/40" 
                          alt="Hary Lorence" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </td>
                  <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Hary Lorence</th>
                  <td className="px-4 py-3">Sikkim, India</td>
                  <td className="px-4 py-3">+1234567890</td>
                  <td className="px-4 py-3">hary@gmail.com</td>
                  <td className="px-4 py-3">Indian</td>
                  <td className="px-4 py-3">Male</td>
                  <td className="px-4 py-3 flex items-center justify-end">
                    <span  className="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg  dark:text-gray-400 dark:hover:text-gray-100 gap-5" >
                      <MdModeEdit className="w-5 h-5"/>
                     <RiDeleteBin5Fill className="w-5 h-5"/>
                    </span>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                        <img 
                          src="https://via.placeholder.com/40" 
                          alt="Lary pase" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </td>
                  <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Lary pase</th>
                  <td className="px-4 py-3">England</td>
                  <td className="px-4 py-3">+1234567890</td>
                  <td className="px-4 py-3">lary@gmail.com</td>
                  <td className="px-4 py-3">English</td>
                  <td className="px-4 py-3">Female</td>
                  <td className="px-4 py-3 flex items-center justify-end">
                    <span  className="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg  dark:text-gray-400 dark:hover:text-gray-100 gap-5" >
                      <MdModeEdit className="w-5 h-5"/>
                     <RiDeleteBin5Fill className="w-5 h-5"/>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerTable;