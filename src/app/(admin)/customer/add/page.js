
import BackButton from "@/components/BackButton";
import CustomerForm from "@/components/customer/CustomerList";


import React from "react";

async function CustomerAddPage() {

  return (
    <section className="bg-white dark:bg-gray-900">
      
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-8 gap-5">
        <BackButton className="mb-10"/>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Create A New Customer
        </h2>
        
        <CustomerForm />
      </div>
    </section>
  );
}

export default CustomerAddPage;
