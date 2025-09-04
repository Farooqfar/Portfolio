import Link from "next/link";

export default function Contact() {
  return (
    <section className="mt-32 flex items-center justify-center p-5 ">
      <Link href="mailto:info4895@gmail.com" className="w-[740px] rounded-4xl text-white text-center text-4xl font-bold border-2 border-white p-2 hover:text-black hover:bg-white">
        info4895@gmail.com
      </Link>
    </section>
  );
}
