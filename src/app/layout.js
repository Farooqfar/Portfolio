import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Muhammad Farooq",
  description:
    "I’m Muhammad Farooq, a passionate MERN Stack and Frontend Developer with expertise in building modern, responsive, and high-performance web applications. I specialize in React, Next.js, Tailwind CSS, and JavaScript, crafting clean and scalable solutions that deliver great user experiences. On the backend, I work with Node.js, Express, and MongoDB to create powerful full-stack applications. With a strong foundation in web development and problem-solving, I enjoy turning ideas into functional, user-friendly digital products. Explore my portfolio to see projects that showcase my skills in frontend design, full-stack development, and performance optimization.",
  icons: {
    icon: "/faivcon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
