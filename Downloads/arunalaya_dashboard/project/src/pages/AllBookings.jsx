import { useEffect, useState } from 'react';
import { Search, Filter, Calendar, User } from 'lucide-react';
import axios from 'axios';

function AllBookings() {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // ✅ Fetch all bookings
  const fetchBookings = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/bookings');
      setBookings(res.data);
      console.log('Fetched bookings:', res.data);
    } catch (err) {
      console.error('Error fetching bookings:', err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // ✅ Dynamically get statuses (like confirmed, cancelled, pending)
  const statuses = ['all', ...new Set(bookings.map((b) => b.status || 'unknown'))];

  // ✅ Filter bookings by search and status
  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.service?.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === 'all' || booking.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
          All Bookings
        </h1>
        <p className="text-gray-400 text-sm">View and manage all user bookings</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-[#1e1e1e]/70 border border-gray-800 rounded-2xl p-4 backdrop-blur-md">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search by user or service name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white focus:border-[#f88310] outline-none transition-all"
          />
        </div>

        <div className="relative w-full md:w-1/3">
          <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full bg-transparent border border-gray-700 rounded-xl pl-12 pr-8 py-3 text-white focus:border-[#f88310] outline-none cursor-pointer transition-all"
          >
            {statuses.map((status) => (
              <option key={status} value={status} className="bg-[#1e1e1e]">
                {status === 'all'
                  ? 'All Statuses'
                  : status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Booking List */}
      {filteredBookings.length === 0 ? (
        <div className="text-center bg-[#1e1e1e]/70 backdrop-blur-md border border-gray-800 rounded-2xl py-16 shadow-inner">
          <p className="text-gray-400 mb-2 text-lg">No bookings found</p>
          <p className="text-gray-500 text-sm">
            {bookings.length === 0
              ? 'No bookings available yet'
              : 'Try adjusting your search or filters'}
          </p>
        </div>
      ) : (
        <>
          <div className="flex justify-between text-gray-400 text-sm">
            <p>
              Showing <span className="text-[#f88310]">{filteredBookings.length}</span> of{' '}
              {bookings.length} bookings
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredBookings.map((booking) => (
              <div
                key={booking._id}
                className="bg-[#1e1e1e]/70 border border-gray-800 rounded-2xl p-5 hover:border-[#f88310] transition-all duration-300 shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <User size={18} className="text-[#f88310]" />
                    <p className="text-white font-medium">
                      {booking.user?.name || 'Unknown User'}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-semibold ${
                      booking.status === 'Confirmed'
                        ? 'bg-green-600/30 text-green-400'
                        : booking.status === 'Cancelled'
                        ? 'bg-red-600/30 text-red-400'
                        : 'bg-yellow-600/30 text-yellow-400'
                    }`}
                  >
                    {booking.status || 'pending'}
                  </span>
                </div>

                <div className="space-y-2 text-gray-400 text-sm">
                  <p>
                    <strong className="text-white">Service:</strong>{' '}
                    {booking.service?.title || 'N/A'}
                  </p>
                  <p>
                    <Calendar size={14} className="inline mr-1 text-[#f88310]" />
                    {new Date(booking.date).toLocaleDateString() || 'N/A'}
                  </p>
                  <p>
                    <strong className="text-white">Amount:</strong> ₹
                    {booking.service?.price || '0'}
                  </p>
                </div>
                
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default AllBookings;
