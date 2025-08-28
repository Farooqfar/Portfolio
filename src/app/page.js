import Design from "./components/Design";
import Contact from './components/Contact';
export default function Home() {
  return (
    <main className="w-full h-auto  p-20 selection:bg-green-400 selection:text-black overflow-x-hidden">
      <section className="relative w-full h-auto ">
        <div className="w-full h-auto flex gap-15 max-lg:flex-col max-lg:justify-center">
        {/* h1 heading */}
        <div className="relative w-[50%] max-lg:w-full max-lg:justify-center max-lg:flex">
        <h1 className="relative text-[210px] leading-[270px] font-black  text-white uppercase z-10 scale-y-150">full</h1>
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-e57ce5e6-2574-41c2-b0f3-7a376b239447.png?w=433&e=webp&nll=true" className="w-52 absolute top-[-20px] left-[30%] z-20" />
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-0db7a7a0-6eb6-4c66-afef-eaf0c2a3b838.png?w=433&e=webp&nll=true" className="w-52 absolute top-44 left-[12vw] z-0" />
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-558ef1cd-3f39-41a3-a26a-1bbe618a87e4.png?w=433&e=webp&nll=true" className="w-52 absolute top-[-90px] left-[26vw] z-0 " />
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-bb22ce71-9e22-41e6-ac38-71e9b528ad1a.png?w=433&e=webp&nll=true" className="w-52 absolute top-0 left-[32vw] z-0" />
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-b5b3a6ae-e2ab-4446-b1a2-d035a09f204b.png?w=433&e=webp&nll=true" className="w-52 absolute top-64 left-[29vw] z-0" />
        
        </div>
        {/* h2 heading */} 
        <div className="relative flex top-28 w-[50%]  max-lg:w-full max-lg:justify-center max-lg:left-0 max-lg:top-28 max-xl:left-24 max-xl:top-44">
        <h1 className="relative left-[-25px] text-[200px] leading-[270px] font-black text-white uppercase z-10 scale-y-150 max-lg:text-[185px] max-xl:text-[10vw] max-2xl:text-[165px]">stack</h1>
         <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-177dd55e-e715-4284-b969-21d3885a8fe9.png?w=433&e=webp&nll=true" className="w-52 absolute top-0 left-[20px] max-lg:left-[60px] z-10" />
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-560655ee-6349-4491-97ad-3eb333f37ae4.png?w=433&e=webp&nll=true" className="w-52 absolute top-[-120px] right-[140px] z-0" />
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-b4882ee6-9a76-4d9a-a2ad-37e5b3868afd.png?w=433&e=webp&nll=true" className="w-52 absolute top-[-50px] right-0 z-0" />
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-977f0a22-0cbe-4886-82ab-b638bd45eab2.png?w=433&e=webp&nll=true" className="w-52 absolute top-44 right-[60px] z-10" />
        </div>
        </div>
        {/* h3 heading */}
        <div className="relative w-full max-lg:top-10">

        <h1 className="relative top-[-30px] text-[200px] text-center text-transparent leading-[270px] font-black uppercase pt-24 [-webkit-text-stroke:3px_white] scale-y-150 z-10 max-xl:text-[165px] max-lg:text-[210px] ">
        <span className="hidden max-lg:inline">dev</span>
        <span className="inline max-lg:hidden">engineer</span>
        </h1>

        {/* img images */}
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-7667d2e5-137b-4ec8-986d-38ca1218e281.png?w=433&e=webp&nll=true" className="w-52 absolute top-28 left-10 z-0" />
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-7ca2aee2-7b4b-4c1c-aeff-7892cd75c80e.png?w=433&e=webp&nll=true" className="w-52 absolute top-36 left-52 z-0 opacity-75" />
        <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-1e93a821-903c-462a-a300-f845f1f3a235.png?w=433&e=webp&nll=true" className="w-52 absolute bottom-0 right-100 z-10 max-lg:right-10" />
        </div>
       
      </section>
      {/* short Abouts us */}
      <section className="w-full h-auto mt-20 p-56 max-lg:p-10 max-lg:mt-100">
        <p className="text-4xl font-black text-[#B2B2B2] text-center">Hey there ✰! I’m Muhammad Farooq — a MERN Stack & Next.js Developer ⚡ based in Pakistan.
          I specialize in building modern, high-performing web applications that are fast, scalable, and user-friendly. From crafting clean front-end experiences with React & Tailwind CSS to developing robust back-end solutions with Node.js and MongoDB, I love turning ideas into impactful digital products that really work.</p>
      </section>
      <section className="w-full h-auto pb-20 max-lg:mt-100">
        <h1 className="text-left font-[cursive] text-[#DADADA] text-[250px] leading-[170px] rotate-[-2deg] max-lg:text-[220px]">Work</h1>
        <h2 className="text-right leading-[170px] uppercase text-transparent text-[170px] font-black [-webkit-text-stroke:2px_#DADADA] scale-y-150 tracking-tighter max-lg:text-[104px]">buildnthat</h2>
        <h2 className="text-right uppercase text-transparent text-[170px] font-black [-webkit-text-stroke:2px_#DADADA] scale-y-150 tracking-tighter max-lg:text-[110px]">speaks</h2>
        <p className="text-left uppercase text-[#DADADA] font-black w-[400px] text-2xl">Peek into a lineup of projects where logic meets innovation.</p>
      </section>
      <section className="w-full h-auto flex flex-wrap justify-start items-center gap-5 mt-20">
        <div className="relative w-[49%] h-[1000px] flex flex-col justify-between border-2 border-[#D3D3D3] mt-10 max-lg:w-full">
          <div className="w-full h-auto flex flex-col items-center justify-center text-center p-20">
            <h1 className="text-[#D3D3D3] text-2xl scale-y-170 font-black tracking-tighter">THE EXIT INTERVIEW</h1>
            <h1 className="relative top-5 text-[#D3D3D3] text-5xl scale-y-150 font-black uppercase tracking-tighter">The Developer’s Experiment</h1>
          </div>
          <div className=" w-full h-auto flex items-center justify-center">
            <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-136c2817-193b-4170-8397-2b27c242b5d5.png?e=webp&nll=true&cX=0&cY=0.5&cW=1368&cH=1182" className="w-full rotate-10" />
          </div>
        </div>
        <div className="relative w-[49%] h-[1000px] flex flex-col justify-between border-2 border-[#D3D3D3] mt-10 max-lg:w-full">
          <div className="w-full h-auto flex flex-col items-center justify-center text-center p-20">
            <h1 className="text-[#D3D3D3] text-2xl scale-y-170 font-black tracking-tighter">THE STUDIO</h1>
            <h1 className="relative top-5 text-[#D3D3D3] text-5xl scale-y-150 font-black uppercase tracking-tighter">a home for Musician</h1>
          </div>
          <div className=" w-full h-auto flex items-center justify-center">
            <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-60810f65-1f66-440a-a5b9-4e7db2771219.png?w=1459&e=webp&nll=true" className="w-full rotate-20" />
          </div>
        </div>
        <div className="relative w-[49%] h-[1000px] flex flex-col justify-between border-2 border-[#D3D3D3] mt-10 max-lg:w-full">
          <div className="w-full h-auto flex flex-col items-center justify-center text-center p-20">
            <h1 className="text-[#D3D3D3] text-2xl scale-y-170 font-black tracking-tighter">THE STUDIO</h1>
            <h1 className="relative top-5 text-[#D3D3D3] text-5xl scale-y-150 font-black uppercase tracking-tighter">a home for Musician</h1>
          </div>
          <div className=" w-full h-auto flex items-center justify-center">
            <img src="https://i-p.rmcdn.net/6169a98c239f1d001467eba5/5146291/image-60810f65-1f66-440a-a5b9-4e7db2771219.png?w=1459&e=webp&nll=true" className="w-full rotate-20" />
          </div>
        </div>
      </section>
      <section className="w-full h-auto mt-10">
        <Design />
      </section>
      <section className="w-full h-auto mt-10">
        <Contact/>
      </section>
    </main>
  );
}
