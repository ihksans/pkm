import React from 'react'
import Login from '../Login'
const Box = () => {
  return (
    <>
      {/* <div class="my-20 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
 <img class="h-48 w-full object-cover md:w-48" src="assets/img/gdH.jpg" alt="Man looking at item at a store"/>
 
  <div class="md:flex">
    <div class="md:flex-shrink-0">
    
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
 
</div> */}
      <div className="flex flex-row self-center box-border h-5/6 w-65% shadow-2xl rounded-xl bg-white">
        <div className="box-border h-full w-2/4">
          <img
            className=" h-full w-full object-cover rounded-l-lg"
            src="assets/img/gdH.png"
          />
          {/* <div className="text-xs	text-center mt-6">
            Aplikasi pengelolaan persuratan
          </div>
          <div className="text-xs	text-center mt-6">Kemahasiswaan Polban</div> */}
        </div>
        <div className="box-border py-40 px-16 h-full w-2/4 content-end">
          <div className="text-sm font-semibold text-abu">
            Silahkan login untuk masuk ke dalam aplikasi
          </div>
          <Login />
          <div className="text-xs	text-center text-abu mt-6">
            Copyright @2021 NamaAplikasi. All rights reserved.
          </div>
        </div>
      </div>
      <></>
    </>
  )
}
export default Box
