import React from "react";
import Navbar from "../components/organisme/Navbar";
import { togglePassword } from "../utils/togglePassword";
import Button from "../components/organisme/Button";

export default function Register() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-md w-full space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Pendaftaran Akun
              </h2>
              <p className="text-gray-600">
                Yuk, lanjutkan belajarmu di videobelajar.
              </p>
            </div>

            <form className="space-y-6">
              {/* Nama Lengkap  */}
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan email"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nomor Telepon *
                </label>
                <div className="flex space-x-2">
                  <div className="relative">
                    <button
                      type="button"
                      id="dropdown-phone-button"
                      className="flex items-center justify-center px-4 py-2.5 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-l-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 480"
                        className="w-6 h-4 mr-2"
                      >
                        <rect width="640" height="240" fill="#e30a17" />
                        <rect width="640" height="240" y="240" fill="#ffffff" />
                      </svg>
                      +62
                      <svg
                        className="w-2.5 h-2.5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      id="dropdown-phone"
                      className="hidden absolute top-full left-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-52 mt-1"
                    >
                      <ul className="py-2 text-sm text-gray-700">
                        <li>
                          <button
                            type="button"
                            className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
                          >
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 640 480">
                              <rect width="640" height="240" fill="#e30a17" />
                              <rect
                                width="640"
                                height="240"
                                y="240"
                                fill="#ffffff"
                              />
                            </svg>
                            Indonesia (+62)
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
                          >
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 640 480">
                              <rect width="640" height="160" fill="#D02F44" />
                              <rect
                                width="640"
                                height="160"
                                y="160"
                                fill="#ffffff"
                              />
                              <rect
                                width="640"
                                height="160"
                                y="320"
                                fill="#D02F44"
                              />
                            </svg>
                            United States (+1)
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="flex-1 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="812-3456-7890"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Masukkan Kata Sandi *
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Masukkan kata sandi"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => togglePassword("password")}
                  >
                    <svg
                      id="eye-icon-password"
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Konfirmasi Kata Sandi *
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    required
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Konfirmasi kata sandi"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => {
                      const input = document.getElementById("confirm-password");
                      const icon = document.getElementById(
                        "eye-icon-confirm-password"
                      );
                      if (input.type === "password") {
                        input.type = "text";
                        icon.classList.add("text-green-500");
                      } else {
                        input.type = "password";
                        icon.classList.remove("text-green-500");
                      }
                    }}
                  >
                    <svg
                      id="eye-icon-confirm-password"
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Lupa Password?
                </a>
              </div>
            </form>

            {/* Separate Buttons */}
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}
