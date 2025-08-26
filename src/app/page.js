import Image from "next/image";
export default function Home() {
  return (
    <main className="w-full h-screen  p-20 selection:bg-green-400 selection:text-black ">
      <div className="relative w-full h-auto">
        {/* h1 heading */}
        <h1 className="relative text-[210px] leading-[270px] font-black  text-white uppercase z-10 scale-y-150">ui/ux</h1>
        {/* h2 heading */}
        <h1 className="absolute right-[-80px] top-28 text-[200px] leading-[270px] font-black text-white uppercase z-10 scale-y-150">brand</h1>
        {/* h3 heading */}
        <h1 className="relative top-[-30px] text-[210px] text-transparent text-center leading-[270px]  font-black uppercase pt-24 [-webkit-text-stroke:2px_white] scale-y-150 z-10">designer</h1>
        {/* img images */}
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-e57ce5e6-2574-41c2-b0f3-7a376b239447.png?w=433&e=webp&nll=true" className="w-52 absolute top-[-20px] left-28 z-20" />
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-0db7a7a0-6eb6-4c66-afef-eaf0c2a3b838.png?w=433&e=webp&nll=true" className="w-52 absolute top-44 left-40 z-0" />
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-558ef1cd-3f39-41a3-a26a-1bbe618a87e4.png?w=433&e=webp&nll=true" className="w-52 absolute top-[-90px] left-100 z-0" />
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-bb22ce71-9e22-41e6-ac38-71e9b528ad1a.png?w=433&e=webp&nll=true" className="w-52 absolute top-0 left-[500px] z-0" />
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-b5b3a6ae-e2ab-4446-b1a2-d035a09f204b.png?w=433&e=webp&nll=true" className="w-52 absolute top-64 left-[450px] z-0" />
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-7667d2e5-137b-4ec8-986d-38ca1218e281.png?w=433&e=webp&nll=true" className="w-52 absolute top-100 left-0 z-0" />
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-7ca2aee2-7b4b-4c1c-aeff-7892cd75c80e.png?w=433&e=webp&nll=true" className="w-52 absolute top-100 left-40 z-0" />
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-1e93a821-903c-462a-a300-f845f1f3a235.png?w=433&e=webp&nll=true" className="w-52 absolute bottom-[-10px] left-[450px] z-10" />
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-177dd55e-e715-4284-b969-21d3885a8fe9.png?w=433&e=webp&nll=true" className="w-52 absolute top-24 right-[450px] z-10" />
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-560655ee-6349-4491-97ad-3eb333f37ae4.png?w=433&e=webp&nll=true" className="w-52 absolute top-0 right-80 z-0" />
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-b4882ee6-9a76-4d9a-a2ad-37e5b3868afd.png?w=433&e=webp&nll=true" className="w-52 absolute top-20 right-36 z-0" />
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-977f0a22-0cbe-4886-82ab-b638bd45eab2.png?w=433&e=webp&nll=true" className="w-52 absolute bottom-40 right-32 z-10" />
      </div>
      {/* short Abouts us */}
      <div className="w-full h-auto mt-20 p-56">
        <p className="text-4xl font-black text-[#B2B2B2] text-center">Hey there ✰! I’m Muhammad Farooq — a MERN Stack & Next.js Developer ⚡ based in Pakistan.
I specialize in building modern, high-performing web applications that are fast, scalable, and user-friendly. From crafting clean front-end experiences with React & Tailwind CSS to developing robust back-end solutions with Node.js and MongoDB, I love turning ideas into impactful digital products that really work.</p>
      </div>
    </main>
  );
}
