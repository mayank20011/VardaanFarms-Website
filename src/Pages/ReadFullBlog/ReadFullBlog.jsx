// import React from "react";
// import Blog1 from "../../Components/Blogs/Blog1.jsx";
// import Blog2 from "../../Components/Blogs/Blog2.jsx";
// import Blog3 from "../../Components/Blogs/Blog3.jsx";
// import Blog4 from "../../Components/Blogs/Blog4.jsx";
// import Blog5 from "../../Components/Blogs/Blog5.jsx";
// import Blog6 from "../../Components/Blogs/Blog6.jsx";
// import { useState } from "react";

// function ReadFullBlog({ totalPaddingToGive }) {
//   const [blogToShow, setBlogToShow] = useState(1);
//   return (
//     <div
//       className="min-h-screen w-full bg-slate-100"
//       style={{ paddingTop: `${totalPaddingToGive}px` }}
//     >
//       <div
//         className="md:pt-4 flex flex-row gap-12 mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 text-black border-2 border-red-600"
//         style={{ height: `calc(100% - ${totalPaddingToGive})px` }}
//       >
//         {/* for left blogs */}

//         <div className="border-2 border-black grow" style={{height:`calc(100% - ${totalPaddingToGive})px`}}>
//           {blogToShow == 1 ? (
//             <Blog1 />
//           ) : blogToShow == 2 ? (
//             <Blog2 />
//           ) : blogToShow == 3 ? (
//             <Blog3 />
//           ) : blogToShow == 4 ? (
//             <Blog4 />
//           ) : blogToShow == 5 ? (
//             <Blog5 />
//           ) : blogToShow == 6 ? (
//             <Blog6 />
//           ) : null}
//         </div>

//         {/* for right */}
//         <div className="w-[330px] p-4 bg-white hidden flex-col gap-4 shadow-lg rounded-md lg:flex">
//           <h1 className="font-bold underline-offset-8 underline">All Blogs</h1>
//           <div
//             className="border- h-[300px] overflow-y-auto flex flex-col gap-2"
//             style={{ scrollbarWidth: "thin", scrollbarColor: "green white" }}
//           >
//             <div className="p-2 rounded-md flex flex-col gap-2 border hover:shadow-md transition cursor-pointer">
//               <h1 className="font-bold">Why A2 Desi Cow Milk</h1>
//               <div className="flex gap-4 items-center">
//                 <i className="fa-solid fa-clock text-green-600"></i>
//                 <p className="text-sm text-slate-600">28 July,2024</p>
//               </div>
//             </div>

//             <div className="p-2 rounded-md flex flex-col gap-2 border hover:shadow-md transition cursor-pointer">
//               <h1 className="font-bold">Enjoy Full Cream Milk Daily</h1>
//               <div className="flex gap-4 items-center">
//                 <i className="fa-solid fa-clock text-green-600"></i>
//                 <p className="text-sm text-slate-600">17 August,2024</p>
//               </div>
//             </div>

//             <div className="p-2 rounded-md flex flex-col gap-2 border hover:shadow-md transition cursor-pointer">
//               <h1 className="font-bold">Healthy & Tasty: Toned Milk</h1>
//               <div className="flex gap-4 items-center">
//                 <i className="fa-solid fa-clock text-green-600"></i>
//                 <p className="text-sm text-slate-600">23 October,2024</p>
//               </div>
//             </div>

//             <div className="p-2 rounded-md flex flex-col gap-2 border hover:shadow-md transition cursor-pointer">
//               <h1 className="font-bold">Light & Tasty: Double Toned Milk</h1>
//               <div className="flex gap-4 items-center">
//                 <i className="fa-solid fa-clock text-green-600"></i>
//                 <p className="text-sm text-slate-600">December 1,2024</p>
//               </div>
//             </div>

//             <div className="p-2 rounded-md flex flex-col gap-2 border hover:shadow-md transition cursor-pointer">
//               <h1 className="font-bold">Buffalo Milk: Rich & Nutritious</h1>
//               <div className="flex gap-4 items-center">
//                 <i className="fa-solid fa-clock text-green-600"></i>
//                 <p className="text-sm text-slate-600">13 Jan,2025</p>
//               </div>
//             </div>

//             <div className="p-2 rounded-md flex flex-col gap-2 border hover:shadow-md transition cursor-pointer">
//               <h1 className="font-bold">Why A2 Desi Cow Milk</h1>
//               <div className="flex gap-4 items-center">
//                 <i className="fa-solid fa-clock text-green-600"></i>
//                 <p className="text-sm text-slate-600">Feb 4,2025</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ReadFullBlog;


import React from "react";
import Blog1 from "../../Components/Blogs/Blog1.jsx";
import Blog2 from "../../Components/Blogs/Blog2.jsx";
import Blog3 from "../../Components/Blogs/Blog3.jsx";
import Blog4 from "../../Components/Blogs/Blog4.jsx";
import Blog5 from "../../Components/Blogs/Blog5.jsx";
import Blog6 from "../../Components/Blogs/Blog6.jsx";
import { useState } from "react";

function ReadFullBlog({ totalPaddingToGive }) {
  const [blogToShow, setBlogToShow] = useState(1);
  return (
    <div
      className="min-h-screen w-full bg-slate-100"
      style={{ paddingTop: `${totalPaddingToGive}px` }}
    >
      <div
        className="md:pb-4 md:pt-4 flex flex-row gap-12 mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 text-black"
        style={{ height: `calc(100vh - ${totalPaddingToGive}px)`}} // Ensure to add "px" to the padding value
      >
        {/* for left blogs */}

        <div
          className="grow w-full h-full overflow-y-auto bg-white rounded-md shadow-md" 
          style={{scrollbarColor:"transparent transparent", scrollbarWidth:"thin"}}
        >
          {blogToShow === 1 ? (
            <Blog1 />
          ) : blogToShow === 2 ? (
            <Blog2 />
          ) : blogToShow === 3 ? (
            <Blog3 />
          ) : blogToShow === 4 ? (
            <Blog4 />
          ) : blogToShow === 5 ? (
            <Blog5 />
          ) : blogToShow === 6 ? (
            <Blog6 />
          ) : null}
        </div>

        {/* for right */}
        <div className="w-[400px] h-fit p-4 bg-white hidden flex-col gap-4 shadow-lg rounded-md lg:flex">
          <h1 className="font-bold underline-offset-8 underline">All Blogs</h1>
          <div
            className="border- h-[300px] overflow-y-auto flex flex-col gap-2"
            style={{ scrollbarWidth: "thin", scrollbarColor: "green white" }}
          >
            <div className="p-2 rounded-md flex flex-col gap-2 border hover:shadow-md transition cursor-pointer" onClick={()=>{setBlogToShow(1)}}>
              <h1 className="font-bold">Why A2 Desi Cow Milk</h1>
              <div className="flex gap-4 items-center">
                <i className="fa-solid fa-clock text-green-600"></i>
                <p className="text-sm text-slate-600">28 July,2024</p>
              </div>
            </div>

            <div className="p-2 rounded-md flex flex-col gap-2 border hover:shadow-md transition cursor-pointer" onClick={()=>{setBlogToShow(2)}}>
              <h1 className="font-bold">Enjoy Full Cream Milk Daily</h1>
              <div className="flex gap-4 items-center">
                <i className="fa-solid fa-clock text-green-600"></i>
                <p className="text-sm text-slate-600">17 August,2024</p>
              </div>
            </div>

            <div className="p-2 rounded-md flex flex-col gap-2 border hover:shadow-md transition cursor-pointer" onClick={()=>{setBlogToShow(3)}}>
              <h1 className="font-bold">Healthy & Tasty: Toned Milk</h1>
              <div className="flex gap-4 items-center">
                <i className="fa-solid fa-clock text-green-600"></i>
                <p className="text-sm text-slate-600">23 October,2024</p>
              </div>
            </div>

            <div className="p-2 rounded-md flex flex-col gap-2 border hover:shadow-md transition cursor-pointer" onClick={()=>{setBlogToShow(4)}}>
              <h1 className="font-bold">Light & Tasty: Double Toned Milk</h1>
              <div className="flex gap-4 items-center">
                <i className="fa-solid fa-clock text-green-600"></i>
                <p className="text-sm text-slate-600">December 1,2024</p>
              </div>
            </div>

            <div className="p-2 rounded-md flex flex-col gap-2 border hover:shadow-md transition cursor-pointer" onClick={()=>{setBlogToShow(5)}}>
              <h1 className="font-bold">Buffalo Milk: Rich & Nutritious</h1>
              <div className="flex gap-4 items-center">
                <i className="fa-solid fa-clock text-green-600"></i>
                <p className="text-sm text-slate-600">13 Jan,2025</p>
              </div>
            </div>

            <div className="p-2 rounded-md flex flex-col gap-2 border hover:shadow-md transition cursor-pointer" onClick={()=>{setBlogToShow(6)}}>
              <h1 className="font-bold">Why A2 Desi Cow Milk</h1>
              <div className="flex gap-4 items-center">
                <i className="fa-solid fa-clock text-green-600"></i>
                <p className="text-sm text-slate-600">Feb 4,2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadFullBlog;
