import React from "react";

export default function Collection() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="py-6 px-4 sm:px-8 w-full">
            <div className="text-left mb-2">
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
                Koleksi Video Pembelajaran Unggulan
              </h1>
              <p className="text-base sm:text-lg text-gray-500">
                Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
              </p>
            </div>
            <div className="flex flex-wrap justify-start space-x-2 sm:space-x-8">
              <button className="text-red-500 border-b-2 border-red-500 py-2 px-3 sm:px-4 focus:outline-none text-sm sm:text-base">
                Semua Kelas
              </button>
              <button className="text-gray-600 py-2 px-3 sm:px-4 hover:text-red-500 focus:outline-none text-sm sm:text-base">
                Pemasaran
              </button>
              <button className="text-gray-600 py-2 px-3 sm:px-4 hover:text-red-500 focus:outline-none text-sm sm:text-base">
                Desain
              </button>
              <button className="text-gray-600 py-2 px-3 sm:px-4 hover:text-red-500 focus:outline-none text-sm sm:text-base">
                Pengembangan Diri
              </button>
              <button className="text-gray-600 py-2 px-3 sm:px-4 hover:text-red-500 focus:outline-none text-sm sm:text-base">
                Bisnis
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
