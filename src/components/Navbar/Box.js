// import React from 'react'
// import { NavLink } from 'react-router-dom'
// const Box = ({ icon, title, url, onClick, setFeedback }) => {
//   const onLink = () => {
//     console.log('test:' + onClick)
//     setFeedback()
//   }
//   return (
//     <>
//       {onClick ? (
//         <NavLink
//           className="flex flex-row w-full  border border-black bg-brokenblack"
//           exact
//           to={'/' + url}
//           onClick={onLink}
//         >
//           <div className="text-oren ml-2 mr-2 self-center	">
//             <img
//               className=" h-full w-4 "
//               src={'assets/img/icon/' + icon + '-Active.png'}
//             />
//           </div>
//           <div className="text-biru font-semibold	 text-110% self-center		">
//             {title}
//           </div>
//         </NavLink>
//       ) : (
//         <NavLink
//           className="flex flex-row w-full  border border-black"
//           exact
//           to={'/' + url}
//           onClick={onLink}
//         >
//           <div className="text-oren ml-2 mr-2 self-center	">
//             <img
//               className=" h-full w-4 "
//               src={'assets/img/icon/' + icon + '-Pasive.png'}
//             />
//           </div>
//           <div className="text-oren font-semibold	 text-110% self-center		">
//             {title}
//           </div>
//         </NavLink>
//       )}
//     </>
//   )
// }
// export default Box
