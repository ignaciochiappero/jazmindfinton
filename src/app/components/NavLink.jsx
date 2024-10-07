import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <>
      {/* Estilo en línea para importar la fuente */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

        .nav-link {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <Link
        href={href}
        className="nav-link block py-2 pl-3 pr-4 text-secondary-500 sm:text-xl rounded md:p-0 hover:text-rose-400 transition-all"
      >
        {title}
      </Link>
    </>
  );
};

export default NavLink;
