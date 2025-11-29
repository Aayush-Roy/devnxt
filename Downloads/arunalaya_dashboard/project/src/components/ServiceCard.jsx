// import { Edit, Trash2 } from 'lucide-react';

// function ServiceCard({ service, onEdit, onDelete }) {
//   return (
//     <div className="bg-[#1e1e1e] rounded-lg overflow-hidden border border-gray-800 hover:border-[#f88310] transition-colors">
//       <div className="h-48 bg-gray-800 overflow-hidden">
//         {service.image ? (
//           <img
//             src={service.image}
//             alt={service.title}
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <div className="w-full h-full flex items-center justify-center text-gray-600">
//             No Image
//           </div>
//         )}
//       </div>

//       <div className="p-4">
//         <div className="flex items-start justify-between mb-2">
//           <h3 className="text-lg font-semibold text-white">{service.title}</h3>
//           <span className="text-[#f88310] font-bold text-lg">RS.{service.price}</span>
//         </div>

//         <p className="text-gray-400 text-sm mb-3 line-clamp-2">
//           {service.description}
//         </p>

//         <div className="flex items-center justify-between mb-4">
//           <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
//             {service.category}
//           </span>
//           <span className="text-xs text-gray-500">{service.durationMins} mins</span>
//         </div>

//         <div className="flex gap-2">
//           <button
//             onClick={() => onEdit(service._id)}
//             className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
//           >
//             <Edit size={16} />
//             Edit
//           </button>
//           <button
//             onClick={() => onDelete(service._id)}
//             className="flex-1 flex items-center justify-center gap-2 bg-red-900/50 hover:bg-red-900 text-white px-4 py-2 rounded-lg transition-colors"
//           >
//             <Trash2 size={16} />
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ServiceCard;
// import { Edit, Trash2 } from 'lucide-react';

// function ServiceCard({ service, onEdit, onDelete }) {
//   return (
//     <div className="bg-[#1e1e1e] rounded-lg overflow-hidden border border-gray-800 hover:border-[#f88310] transition-colors">
//       <div className="h-48 bg-gray-800 overflow-hidden">
//         {service.image ? (
//           <img
//             src={service.image}
//             alt={service.title}
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <div className="w-full h-full flex items-center justify-center text-gray-600">
//             No Image
//           </div>
//         )}
//       </div>

//       <div className="p-4">
//         <div className="flex items-start justify-between mb-2">
//           <h3 className="text-lg font-semibold text-white">{service.title}</h3>
//           <span className="text-[#f88310] font-bold text-lg">RS.{service.price}</span>
//         </div>

//         <p className="text-gray-400 text-sm mb-3 line-clamp-2">
//           {service.description}
//         </p>

//         <div className="flex items-center justify-between mb-4">
//           <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
//             {service.category}
//           </span>
//           <span className="text-xs text-gray-500">{service.durationMins} mins</span>
//         </div>

//         <div className="flex gap-2">
//           <button
//             onClick={() => onEdit(service)}
//             className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
//           >
//             <Edit size={16} />
//             Edit
//           </button>
//           <button
//             onClick={() => onDelete(service._id)}
//             className="flex-1 flex items-center justify-center gap-2 bg-red-900/50 hover:bg-red-900 text-white px-4 py-2 rounded-lg transition-colors"
//           >
//             <Trash2 size={16} />
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ServiceCard;
import { Edit, Trash2 } from "lucide-react";

function ServiceCard({ service, onEdit, onDelete }) {
  return (
    <div
      className="relative bg-[#1a1a1a] border border-gray-800 rounded-2xl overflow-hidden 
      backdrop-blur-md hover:border-[#f88310] transition-all duration-300 
      shadow-md hover:shadow-[0_0_25px_rgba(248,131,16,0.15)] transform hover:-translate-y-1 group"
    >
      {/* Service Image */}
      <div className="relative h-48 overflow-hidden rounded-t-2xl">
        {service.image ? (
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-600 bg-[#111]">
            No Image
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-70" />
      </div>

      {/* Service Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-white line-clamp-1">{service.title}</h3>
          <span className="text-[#f88310] font-bold text-lg">₹{service.price}</span>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {service.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-xs bg-[#232323] border border-gray-700 text-gray-300 px-3 py-1 rounded-full">
            {service.category || "General"}
          </span>
          <span className="text-xs text-gray-500">{service.durationMins || "N/A"} mins</span>
        </div>

        {/* 🔥 Buttons — bold, visible & modern */}
        <div className="flex gap-3">
          <button
            onClick={() => onEdit(service)}
            className="flex-1 flex items-center justify-center gap-2 
            bg-[#2a2a2a] hover:bg-[#f88310] hover:text-black text-white 
            font-semibold px-4 py-2 rounded-lg border border-gray-700 
            hover:border-[#f88310] transition-all duration-300 shadow-sm 
            hover:shadow-[0_0_10px_rgba(248,131,16,0.5)]"
          >
            <Edit size={16} className="text-[#f88310] group-hover:text-black transition-all" />
            Edit
          </button>

          <button
            onClick={() => onDelete(service._id)}
            className="flex-1 flex items-center justify-center gap-2 
            bg-[#2a1a1a] hover:bg-red-600 text-white font-semibold 
            px-4 py-2 rounded-lg border border-red-900 hover:border-red-500 
            transition-all duration-300 shadow-sm hover:shadow-[0_0_10px_rgba(255,0,0,0.5)]"
          >
            <Trash2 size={16} className="text-red-500 group-hover:text-white transition-all" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
