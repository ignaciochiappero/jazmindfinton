import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#f2f2f2] sm:text-xl rounded md:p-0 hover:text-rose-400 transition-all"
    >
      {title}
    </Link>
  );
};

export default NavLink;
