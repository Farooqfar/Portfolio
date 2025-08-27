import { GiArchiveResearch } from "react-icons/gi";
import { PiStrategy } from "react-icons/pi";
import { SiTestcafe } from "react-icons/si";
import { SiAltiumdesigner } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
export default function Design() {
    return (
        <main>
            <section className="w-full h-auto mt-32">
                <h1 className="text-left font-[cursive] text-[#DADADA] text-[250px] leading-[170px]">Approach</h1>
                <h1 className="text-right leading-[170px] uppercase text-transparent text-[170px] font-black [-webkit-text-stroke:2px_#DADADA] scale-y-150 tracking-tighter">Ideas  into <br /> Impact</h1>
                <p className="text-left uppercase text-[#DADADA] font-black w-[400px] text-2xl">It’s not just about making things pretty — it’s about making them count.</p>
            </section>
            <section className="w-auto h-auto mt-32 flex gap-32 overflow-hidden">
                <div className="w-100 flex flex-col items-center">
                    <GiArchiveResearch className="text-white text-[250px] text-center" />
                    <h1 className="text-white text-center text-3xl font-black">-1-</h1>
                    <h1 className="text-white text-6xl font-black text-center uppercase scale-y-150">research</h1>
                    <p className="text-white text-2xl text-center mt-10">Digging into insights and user needs to uncover the story behind the solution.</p>
                </div>
                <div className="w-100 flex flex-col items-center">
                    <PiStrategy className="text-white text-[250px] text-center" />
                    <h1 className="text-white text-center text-3xl font-black">-2-</h1>
                    <h1 className="text-white text-6xl font-black text-center uppercase scale-y-150">STRATEGIZE</h1>
                    <p className="text-white text-2xl text-center mt-10">Mapping out the vision and strategy to align creativity with goals. Clarity meets purpose here.</p>
                </div>
                <div className="w-100 flex flex-col items-center">
                    <SiAltiumdesigner className="text-white text-[250px] text-center" />
                    <h1 className="text-white text-center text-3xl font-black">-3-</h1>
                    <h1 className="text-white text-6xl font-black text-center uppercase scale-y-150">DESIGN</h1>
                    <p className="text-white text-2xl text-center mt-10">Where the magic happens! From concepts to visuals, its all about bringing bold ideas to life.</p>
                </div>
                <div className="w-100 flex flex-col items-center">
                    <FaCode className="text-white text-[250px] text-center" />
                    <h1 className="text-white text-center text-3xl font-black">-4-</h1>
                    <h1 className="text-white text-6xl font-black text-center uppercase scale-y-150">BUILD</h1>
                    <p className="text-white text-2xl text-center mt-10">Turning designs into reality with seamless development that bridges form and function.</p>
                </div>
                <div className="w-100 flex flex-col items-center">
                    <SiTestcafe className="text-white text-[250px] text-center" />
                    <h1 className="text-white text-center text-3xl font-black">-4-</h1>
                    <h1 className="text-white text-6xl font-black text-center uppercase scale-y-150">TEST</h1>
                    <p className="text-white text-2xl text-center mt-10">Fine-tuning every detail through testing to ensure it works beautifully for users.</p>
                </div>
                <div className="w-100 flex flex-col items-center">
                    <FaRepeat className="text-white text-[250px] text-center" />
                    <h1 className="text-white text-center text-3xl font-black">-4-</h1>
                    <h1 className="text-white text-6xl font-black text-center uppercase scale-y-150">REPEAT</h1>
                    <p className="text-white text-2xl text-center mt-10">Refining, evolving, and growing—because great design is never one and done.</p>
                </div>
            </section>
            <section className="w-full h-auto mt-80">
<marquee scrollamount="5" loop="-1" class="text-9xl font-black text-white scale-y-150">
  <span class="text-transparent [-webkit-text-stroke:1px_white]">SAY</span> HELLO! 
  <span class="text-transparent [-webkit-text-stroke:1px_white]">SAY</span> こんにちは!  
  <span class="text-transparent [-webkit-text-stroke:1px_white]">SAY</span> HOLA!  
  <span class="text-transparent [-webkit-text-stroke:1px_white]">SAY</span> HALLO!  
  <span class="text-transparent [-webkit-text-stroke:1px_white]">SAY</span> OLÁ!  
  <span class="text-transparent [-webkit-text-stroke:1px_white]">SAY</span> مرحبا!  
  <span class="text-transparent [-webkit-text-stroke:1px_white]">SAY</span> CIAO!  
  <span class="text-transparent [-webkit-text-stroke:1px_white]">SAY</span> BONJOUR!  
  <span class="text-transparent [-webkit-text-stroke:1px_white]">SAY</span> HELLO!
</marquee>            </section>
        </main>
    )
}