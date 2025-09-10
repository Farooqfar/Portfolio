import Link from "next/link";

export default function Contact() {
  return (
    <section className="mt-32 flex items-center justify-center p-5 ">
      <Link
        href="mailto:info4895@gmail.com"
        className="w-full rounded-4xl text-white text-center text-4xl font-bold border-2 border-white p-2 hover:text-black hover:bg-white max-md:w-fit max-md:text-xl"
      >
        info4895@gmail.com
      </Link>
    </section>
  );
}
