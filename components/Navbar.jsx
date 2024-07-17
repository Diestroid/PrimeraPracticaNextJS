import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-between px-20 py-5 bg-slate-500">
      <Link href={"/"}>
        <h1 className="text-4xl font-bold hover:text-cyan-700">Home</h1>
      </Link>
      <ul className="flex items-center gap-3">
        <li>
          <Link href={"/users"}>
            <button className="hover:bg-gray-300 rounded py-1 px-2 transition-colors">
              Users
            </button>
          </Link>
        </li>
        <li>
          <Link href={"/about"}>
            <button className="hover:bg-gray-300 rounded py-1 px-2 transition-colors">
              About
            </button>
          </Link>
        </li>
        <li>
          <Link href={"/otros"}>
            <button className="hover:bg-gray-300 rounded py-1 px-2 transition-colors">
              Otros
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
