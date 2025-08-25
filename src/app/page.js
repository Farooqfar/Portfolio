import Image from "next/image";
export default function Home() {
  return (
    <main className="w-full h-screen bg-[#0F0F0F]">
      <div className="relative w-full h-auto">
        <h1 className="text-[210px] leading-[270px] font-black  text-white uppercase scale-y-150">ui/ux</h1>
        <h1 className="absolute right-3 top-28 text-[210px] leading-[270px] font-black text-white uppercase scale-y-150">brand</h1>
        <h1 className="text-[210px] text-transparent text-center leading-[270px]  font-black uppercase pt-24 [-webkit-text-stroke:2px_white] scale-y-150">designer</h1>
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-e57ce5e6-2574-41c2-b0f3-7a376b239447.png?w=433&e=webp&nll=true" className="w-52 absolute top-1 left-20  " />
      </div>
    </main>
  );
}
