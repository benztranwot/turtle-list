import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={240} height={60} alt="Turtle logo" />
      </div>
      <Link href="/">
        <a className={router.pathname == "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname == "/about" ? "active" : ""}>About</a>
      </Link>
      <Link href="/turtles">
        <a className={router.pathname == "/turtles" ? "active" : ""}>Turtle Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
