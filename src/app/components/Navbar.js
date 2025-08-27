export default function Navbar() {
    return (
        <nav className="w-full h-auto p-8 flex items-center justify-center">
            <ul className="flex justify-center items-center gap-10">
                <li className="text-white text-2xl  font-black cursor-pointer">Home</li>
                <li className="text-white text-2xl  font-black cursor-pointer">Work</li>
                <li className="text-white text-2xl  font-black cursor-pointer">About</li>
                <li className="text-white text-2xl font-black cursor-pointer">Contact</li>
            </ul>
        </nav>
    )
}