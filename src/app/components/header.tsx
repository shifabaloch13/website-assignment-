import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between bg-white py-4">
      {/* Logo */}
      <div>
        <h2 className="text-3xl font-semibold mx-11 text-black"> <b>organic store!</b> </h2>
      </div>

      {/* Links */}
      <nav>
        <ul className="flex gap-9 font-bold mx-5 space-x-10 text-black">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/service">Service</Link>
          </li>
          <li> <Link href="/Everything">Everything</Link></li>

          <li>
            <Link href="/Grociers">Grociers</Link>
          </li>
          <li> <Link href="/juice"> juice</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;



                

     

     
  