// import { useNavigate } from 'react-router-dom';
// import ServiceForm from '../components/ServiceForm';
// import { useEffect, useState } from 'react';
// import { Axis3D } from 'lucide-react';
// import axios from 'axios';

// function CreateService({ onAddService }) {
//   const navigate = useNavigate();

//   const handleSubmit = (serviceData) => {
//     const newService = {
//       ...serviceData,
//       id: Date.now().toString(),
//     };
//     onAddService(newService);
//     navigate('/services');
//   };

  

//   return (
//     <div className="max-w-2xl">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-white mb-2">Create New Service</h1>
//         <p className="text-gray-400">Add a new service to your catalog</p>
//       </div>

//       <div className="bg-[#1e1e1e] border border-gray-800 rounded-lg p-6">
//         <ServiceForm onSubmit={handleSubmit} />
//       </div>
//     </div>
//   );
// }

// export default CreateService;
import { useNavigate } from "react-router-dom";
import ServiceForm from "../components/ServiceForm";
import { useEffect, useState } from "react";
import { PlusCircle } from "lucide-react";
import axios from "axios";

function CreateService({ onAddService }) {
  const navigate = useNavigate();

  const handleSubmit = (serviceData) => {
    const newService = {
      ...serviceData,
      id: Date.now().toString(),
    };
    onAddService(newService);
    navigate("/services");
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      {/* Page Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-2">
            <PlusCircle className="text-[#f88310]" size={30} />
            Create New Service
          </h1>
          <p className="text-gray-400 mt-1">
            Add a new service to your catalog below.
          </p>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-gray-800 rounded-2xl p-8 shadow-xl shadow-black/40 relative overflow-hidden">
        {/* Accent Line */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#f88310] via-[#ffae42] to-transparent rounded-t-2xl" />

        <ServiceForm onSubmit={handleSubmit} />

        {/* Hint Section */}
        <div className="mt-6 border-t border-gray-800 pt-4">
          <p className="text-gray-500 text-sm text-center">
            💡 Make sure to fill all required fields before submitting.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateService;
