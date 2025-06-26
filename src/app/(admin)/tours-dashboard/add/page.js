
import BackButton from "@/components/BackButton";
import TourForm from "@/components/tours/TourForm";

import React from "react";

async function ToursAddPage() {

  return (
    <section className="bg-white dark:bg-gray-900">
      
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-8 gap-5">
        <BackButton className="mb-10"/>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Create A New Tour Package
        </h2>
        
        <TourForm />
      </div>
    </section>
  );
}

export default ToursAddPage;
