import React from "react";
export function SigbIn() {
  return (
    //3 images
   
    <div className="signin">
        <img className="w-16 md:w-32 lg:w-48 inline-block" src="logo192.png"></img>
          <img className="w-16 md:w-32 lg:w-48 inline-block" src="logo192.png"></img>
          <img className="w-16 md:w-32 lg:w-48 inline-block" src="logo192.png"></img>
      <div className="p-10">
        <br />
        <h2 className="text-center text-3xl leading-9 text-gray-800">
          Simple Form
        </h2>
        <form>
          <div className="flex justify-center">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label className="tracking-wide text-gray-700 text-xs mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="bg-gray-200 border-2 border-gray-200 rounded w-full 
                  py-2 px-4 text-gray-700"
                required
              />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label className="text-gray-700 text-xs mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="bg-gray-200 border-2 border-gray-200 rounded w-full 
                  py-2 px-4 text-gray-700 "
                required
              />
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="group w-full lg:w-1/3 md:w-2/3 py-2 px-4  border border-transparent text-sm  
                rounded-md text-dark bg-gray-800
                "
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SigbIn;
