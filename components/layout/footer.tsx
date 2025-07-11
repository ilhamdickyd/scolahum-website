"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
      {}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center group">
              {}
              <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Image
                  src="/images/logo.png"
                  alt="SCOLAH UNAIR"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              {}
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-heading font-bold text-2xl lg:text-3xl tracking-wide text-white">
                    SCOLAH
                  </span>
                  <span className="font-heading font-bold text-2xl lg:text-3xl mx-2 text-white">
                    UNAIR
                  </span>
                  <span className="font-heading font-bold text-2xl lg:text-3xl tracking-wide text-accent">
                    Mengajar
                  </span>
                </div>
              </div>
            </Link>
            <div className="space-y-3">
              <p className="text-white/95 text-lg font-body leading-relaxed font-medium">
                Memberi Harapan, Menebar Inspirasi, Membangun Mimpi.
              </p>
              <p className="text-white/80 text-base font-body leading-relaxed">
                Organisasi mahasiswa yang bergerak pada bidang pendidikan dan
                kemanusiaan, berkomitmen untuk menciptakan dampak positif bagi
                masyarakat.
              </p>
            </div>
          </div>
          {}
          <div className="flex flex-col items-center md:items-end space-y-6">
            <div className="text-center md:text-right">
              <h3 className="uppercase font-heading font-bold text-xl mb-4 text-white tracking-wider">
                Connect With Us
              </h3>
              {}
              <div className="flex justify-center md:justify-end space-x-4 mb-6">
                {}
                <Link
                  href="https://instagram.com/unairmengajar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="group relative p-3 bg-white/10 rounded-full hover:bg-accent transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white group-hover:text-white transition-colors duration-300"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                {}
                <Link
                  href="https://id.linkedin.com/company/unairmengajar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with us on LinkedIn"
                  className="group relative p-3 bg-white/10 rounded-full hover:bg-accent transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white group-hover:text-white transition-colors duration-300"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
                {}
                <Link
                  href="https://www.tiktok.com/@unairmengajar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on TikTok"
                  className="group relative p-3 bg-white/10 rounded-full hover:bg-accent transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white group-hover:text-white transition-colors duration-300"
                  >
                    <path d="M9 12.15V16.5c0 1.38-.7 2.5-2.05 2.5A2.5 2.5 0 0 1 4.5 16.5c0-1.4 1.1-2.5 2.5-2.5v-4c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5c3.6 0 6.5-2.9 6.5-6.5v-7.85c.66.65 1.66 1.15 2.75 1.15V6.15c-1.45 0-2.75-1.2-2.75-2.65V3H10v9.15ZM16.95 10V13c2.7 0 4.55-1 4.55-3v-.5c-.53.5-1.2 1.1-1.95 1.1-1.75 0-2.6-.6-2.6-.6Z" />
                  </svg>
                </Link>
                {}
                <Link
                  href="http://www.youtube.com/@UnairMengajar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to our YouTube channel"
                  className="group relative p-3 bg-white/10 rounded-full hover:bg-accent transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white group-hover:text-white transition-colors duration-300"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </Link>
              </div>
              {}
              <div className="text-center md:text-right">
                <div className="text-accent font-heading font-bold text-2xl mb-2 tracking-wide">
                  VIVA SCOLAH
                </div>
                <p className="text-white/80 text-sm font-body italic">
                  &quot;Bersama kita membangun masa depan yang lebih cerah&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
