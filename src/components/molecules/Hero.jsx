import React from "react";
import blogImage from "../../assets/images/blog.jpg";

export default function Hero() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="w-full">
            {/* <!-- banner --> */}
            <div
              className="relative p-4 h-72 sm:h-80 md:h-96 bg-cover bg-center rounded-lg overflow-hidden"
              style={{ backgroundImage: `url(${blogImage})` }}
            >
              <div className="absolute inset-0 bg-black/70 flex justify-center items-center">
                <div className="w-full md:w-2/3 lg:w-1/2 text-center space-y-3 flex flex-col justify-center items-center px-4">
                  <h1 className="text-white text-2xl sm:text-3xl font-bold">
                    Revolusi Pembelajaran: Temukan Ilmu Baru Melalui Platform
                    Video Interaktif
                  </h1>
                  <p className="text-white text-xs sm:text-sm">
                    Temukan ilmu baru yang menarik dan mendalam melalui koleksi
                    video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda
                    juga dapat berpartisipasi dalam latihan interaktif yang akan
                    meningkatkan pemahaman Anda.
                  </p>
                  <button className="bg-green-600 text-white text-xs sm:text-sm p-2 ring-1 ring-white rounded-lg w-full sm:w-70 mx-auto hover:bg-green-700 transition-colors">
                    Temukan Video Course untuk Dipelajari
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- end banner --> */}
          </div>
        </div>
      </div>
    </>
  );
}
