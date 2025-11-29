// import { useState, useEffect } from 'react';

// function ServiceForm({ service, onSubmit, onCancel }) {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: '',
//     durationMins: '',
//     image: '',
//     category: '',
//   });

//   const createService = async()=>{
//     try{
//       const response = axios.post('http://localhost:5000/api/services',{
//         title,
//         description,
//         price,
//         durationMins,
//         image,
//         category,
//       });

//     }catch(err){
//       console.log(err);
//     }
//   }

//   useEffect(() => {
//     if (service) {
//       setFormData(service);
//     }
//   }, [service]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({
//       ...formData,
//       price: Number(formData.price),
//       durationMins: Number(formData.durationMins),
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div>
//         <label className="block text-sm font-medium text-gray-300 mb-2">
//           Title
//         </label>
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           required
//           className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f88310] transition-colors"
//           placeholder="Enter service title"
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-300 mb-2">
//           Description
//         </label>
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           required
//           rows="4"
//           className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f88310] transition-colors resize-none"
//           placeholder="Enter service description"
//         />
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-300 mb-2">
//             Price ($)
//           </label>
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             required
//             min="0"
//             step="0.01"
//             className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f88310] transition-colors"
//             placeholder="0.00"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-300 mb-2">
//             Duration (minutes)
//           </label>
//           <input
//             type="number"
//             name="durationMins"
//             value={formData.durationMins}
//             onChange={handleChange}
//             required
//             min="1"
//             className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f88310] transition-colors"
//             placeholder="30"
//           />
//         </div>
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-300 mb-2">
//           Category
//         </label>
//         <input
//           type="text"
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//           required
//           className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f88310] transition-colors"
//           placeholder="e.g., Design, Development, Marketing"
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-300 mb-2">
//           Image URL
//         </label>
//         <input
//           type="url"
//           name="image"
//           value={formData.image}
//           onChange={handleChange}
//           className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f88310] transition-colors"
//           placeholder="https://example.com/image.jpg"
//         />
//       </div>

//       <div className="flex gap-4">
//         <button
//           type="submit"
//           className="flex-1 bg-[#f88310] hover:bg-[#d97410] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
//         >
//           {service ? 'Update Service' : 'Create Service'}
//         </button>
//         {onCancel && (
//           <button
//             type="button"
//             onClick={onCancel}
//             className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
//           >
//             Cancel
//           </button>
//         )}
//       </div>
//     </form>
//   );
// }

// export default ServiceForm;
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function ServiceForm({ service, onSubmit, onCancel, onEdit,handleEdit ,onUpdateService}) {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: '',
//     durationMins: '',
//     image: '',
//     category: '',
//   });

//   // ✅ Load existing service data if editing
//   useEffect(() => {
//     if (service) {
//       setFormData(service);
//     }
//   }, [service]);

//   // ✅ Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // ✅ Handle form submit (create or update)
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = {
//       ...formData,
//       price: Number(formData.price),
//       durationMins: Number(formData.durationMins),
//     };

//     try {
//       if (service) {
//         // 🔥 UPDATE existing service
//         const res = await axios.put(
//           `http://localhost:5000/api/services/${service._id}`,
//           data
//         );
//         console.log('Updated service:', res.data);
//         onSubmit(res.data);
//       } else {
//         // 🔥 CREATE new service
//         const res = await axios.post('http://localhost:5000/api/services', data);
//         console.log('Created service:', res.data);
//         onSubmit(res.data);
//         // ✅ Reset form after successful creation
//         setFormData({
//           title: '',
//           description: '',
//           price: '',
//           durationMins: '',
//           image: '',
//           category: '',
//         });
//       }
//     } catch (err) {
//       console.error('Error saving service:', err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div>
//         <label className="block text-sm font-medium text-gray-300 mb-2">
//           Title
//         </label>
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           required
//           className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f88310] transition-colors"
//           placeholder="Enter service title"
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-300 mb-2">
//           Description
//         </label>
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           required
//           rows="4"
//           className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f88310] transition-colors resize-none"
//           placeholder="Enter service description"
//         />
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-300 mb-2">
//             Price ($)
//           </label>
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             required
//             min="0"
//             step="0.01"
//             className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f88310] transition-colors"
//             placeholder="0.00"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-300 mb-2">
//             Duration (minutes)
//           </label>
//           <input
//             type="number"
//             name="durationMins"
//             value={formData.durationMins}
//             onChange={handleChange}
//             required
//             min="1"
//             className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f88310] transition-colors"
//             placeholder="30"
//           />
//         </div>
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-300 mb-2">
//           Category
//         </label>
//         <input
//           type="text"
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//           required
//           className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f88310] transition-colors"
//           placeholder="e.g., Design, Development, Marketing"
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-300 mb-2">
//           Image URL
//         </label>
//         <input
//           type="url"
//           name="image"
//           value={formData.image}
//           onChange={handleChange}
//           className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f88310] transition-colors"
//           placeholder="https://example.com/image.jpg"
//         />
//       </div>

//       <div className="flex gap-4">
//         {/* <button
//         onClick={onUpdateService}
//           type="submit"
//           className="flex-1 bg-[#f88310] hover:bg-[#d97410] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
//         >
//           {service ? 'Update Service' : 'Create Service'}
//         </button> */}
//         <button
//  onClick={onUpdateService}
//    type="submit"
//    className="flex-1 bg-[#f88310] hover:bg-[#d97410] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
// >
//   {service ? 'Update Service' : 'Create Service'}
// </button>

//         {onCancel && (
//           <button
//             type="button"
//             onClick={onCancel}
//             className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
//           >
//             Cancel
//           </button>
//         )}
//       </div>
//     </form>
//   );
// }

// export default ServiceForm;
import { useState, useEffect } from "react";
import axios from "axios";

function ServiceForm({ service, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    durationMins: "",
    image: "",
    category: "",
  });

  // ✅ Load existing service data safely
  useEffect(() => {
    if (service) {
      setFormData({
        title: service.title || "",
        description: service.description || "",
        price: service.price || "",
        durationMins: service.durationMins || "",
        image: service.image || "",
        category: service.category || "",
      });
    }
  }, [service]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      price: Number(formData.price),
      durationMins: Number(formData.durationMins),
    };

    try {
      if (service) {
        // 🔥 UPDATE existing service
        const res = await axios.put(
          `http://localhost:5000/api/services/${service._id || service.id}`,
          data
        );
        console.log("✅ Updated service:", res.data);
        onSubmit(res.data);
      } else {
        // 🔥 CREATE new service
        const res = await axios.post("http://localhost:5000/api/services", data);
        console.log("✅ Created service:", res.data);
        onSubmit(res.data);
        setFormData({
          title: "",
          description: "",
          price: "",
          durationMins: "",
          image: "",
          category: "",
        });
      }
    } catch (err) {
      console.error("❌ Error saving service:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f88310]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="4"
          className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f88310] resize-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Price (₹)
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0"
            className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f88310]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Duration (mins)
          </label>
          <input
            type="number"
            name="durationMins"
            value={formData.durationMins}
            onChange={handleChange}
            required
            min="1"
            className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f88310]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Category
        </label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f88310]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Image URL
        </label>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f88310]"
        />
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="flex-1 bg-[#f88310] hover:bg-[#d97410] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          {service ? "Update Service" : "Create Service"}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default ServiceForm;
