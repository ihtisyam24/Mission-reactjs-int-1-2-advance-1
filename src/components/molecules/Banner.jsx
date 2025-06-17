import React from "react";

export default function Banner() {
  return (
    <>
      <div className="py-6">
        <div className="max-w-4l mx-auto px-4 sm:px-4 lg:px-20">
          <div className="flex justify-center items-center min-h-[50vh]">
            <div className="w-full">
              {/* <!-- banner --> */}
              <div className="relative p-4 bg-[url('src/assets/images/bn2.jpg')] h-96 bg-cover bg-center rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black/70 flex justify-center items-center">
                  <div className="w-full md:w-1/2 text-center space-y-3 flex flex-col justify-center items-center px-4">
                    <h1 className="text-white text-3xl font-bold">
                      Mau Belajar Lebih Banyak?
                    </h1>
                    <p className="text-white text-sm">
                      Daftarkan Dirimu untuk mendapatkan informasi terbaru dan
                      penawaran spesial dari program-program terbaik Hariesok.id
                    </p>
                    <div className="w-full max-w-sm min-w-[200px]">
                      <div className="relative">
                        <input
                          type="email"
                          className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-16 py-2 duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300"
                          placeholder="Email Address"
                        />
                        <button
                          className="absolute right-1 top-1 rounded bg-yellow-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-yellow-700 focus:shadow-none active:bg-yellow-700 hover:bg-yellow-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end banner --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
