/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palet warna yang difokuskan (3 warna utama)
        primary: "#009FE3", // Biru cerah dari logo sebagai warna utama/identitas
        accent: "#E6007E", // Pink cerah dari logo sebagai aksen/highlight
        neutral: "#333333", // Warna netral untuk teks dan elemen lain

        // Shade dan tint untuk variasi
        "primary-light": "#4DBFF0", // Biru yang lebih terang (untuk hover, backgrounds, dll)
        "primary-dark": "#0077AA", // Biru yang lebih gelap (untuk border, shading, dll)
        "accent-light": "#FF4DAE", // Pink yang lebih terang
        "accent-dark": "#B3005F", // Pink yang lebih gelap

        // Warna background dan text
        background: "#F8F9FA", // Background terang
        "background-dark": "#1A1A1A", // Background gelap untuk footer
        text: "#333333", // Teks utama
        "text-light": "#666666", // Teks sekunder
      },
      fontFamily: {
        // Sistem font yang sederhana dan fokus
        sans: ["Montserrat", "sans-serif"], // Font utama untuk semua
        heading: ["Montserrat", "sans-serif"], // Font untuk headings
        body: ["Roboto", "sans-serif"], // Font untuk body text
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #009FE3, #0077AA)",
        "gradient-accent": "linear-gradient(135deg, #E6007E, #B3005F)",
        "gradient-blend": "linear-gradient(135deg, #009FE3, #E6007E)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)",
        button: "0 4px 6px rgba(0, 159, 227, 0.25)",
      },
    },
  },
  plugins: [],
};
