// import { useState, useEffect } from 'react';
// import { getUpcomingBookings, approveBooking, cancelBooking } from '../utils/bookingService';

// function AdminPanel() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const adminKey = import.meta.env.VITE_ADMIN_KEY;
//   const secretKey = 'admin123'; // In production, use a more secure method

//   const fetchBookings = async () => {
//     try {
//       const data = await getUpcomingBookings();
//       setBookings(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const handleApprove = async (id) => {
//     try {
//       await approveBooking(id);
//       await fetchBookings();
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleCancel = async (id) => {
//     try {
//       await cancelBooking(id);
//       await fetchBookings();
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (adminKey !== secretKey) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <div className="bg-white p-8 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold text-red-600">Access Denied</h2>
//           <p className="mt-4 text-gray-600">You don't have permission to view this page.</p>
//         </div>
//       </div>
//     );
//   }

//   if (loading) {
//     return <div className="text-center p-8">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-red-600 p-8">Error: {error}</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-8 text-gray-900">Admin Dashboard</h1>
//         <div className="bg-white rounded-lg shadow overflow-hidden">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {bookings.map((booking) => (
//                 <tr key={booking.id}>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.name}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.email}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.phone}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.service}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.date}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.time}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                     <button
//                       onClick={() => handleApprove(booking.id)}
//                       className="text-green-600 hover:text-green-900 mr-4"
//                     >
//                       Approve
//                     </button>
//                     <button
//                       onClick={() => handleCancel(booking.id)}
//                       className="text-red-600 hover:text-red-900"
//                     >
//                       Cancel
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminPanel;