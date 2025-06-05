import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="py-[30px]">
        <footer className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-4">
                <img
                  src="/src/assets/images/logo.png"
                  alt=""
                  className="rounded-full w-50 h-20"
                />
                <p className="font-bold text-xs text-gray-800">
                  Gali Potensi Anda Melalui pembelajaran Video di Hariesok.id!
                </p>
                <p className="text-sm text-gray-600">
                  Jl.Usman Efendi No.50 Lowokwaru,Malang
                </p>
                <p className="text-sm text-gray-600">+62 0987656789</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  Kategori
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Digital & Teknologi
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Pemasaran
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Menejemen Bisnis
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Pengembangan Diri
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Desain
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  Perusahaan
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Tentang Kami
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Kebijakan Privasi
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Ketentuan Layanan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Bantuan
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  Komunitas
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Tips Sukses
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        <footer className="bg-gray-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="w-full">
                <hr className="border-gray-300 mb-4" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-600">
                @2023 Gerobak Sayur All Rights Reserved
              </p>
              <div className="flex space-x-4">
                <i className="bi bi-linkedin text-gray-600 hover:text-blue-600 transition-colors cursor-pointer text-lg"></i>
                <i className="bi bi-facebook text-gray-600 hover:text-blue-600 transition-colors cursor-pointer text-lg"></i>
                <i className="bi bi-instagram text-gray-600 hover:text-pink-600 transition-colors cursor-pointer text-lg"></i>
                <i className="bi bi-twitter text-gray-600 hover:text-blue-400 transition-colors cursor-pointer text-lg"></i>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
