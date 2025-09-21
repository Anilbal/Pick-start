import { Link } from "@tanstack/react-router";

const Navbar: React.FC = () => {
  return (
    <section className="flex-centered">
      <nav className="h-18 w-[1400px] flex-space rounded-4xl px-2 bg-[#161616] fixed top-8 overflow-hidden">
        <Link to="/">
          <img
            src="/logo.png"
            alt="Pick&Start logo"
            className="w-[140px] ml-4"
          />
        </Link>
        <div className="h-full py-2 flex bg-transparent">
          <Link
            to="/login"
            className="px-4 py-2 rounded-xl text-white hover:underline flex-centered bg-transparent text-base cursor-pointer transition-all ease-in-out duration-150"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="h-full w-32 bg-[#4f46e5] text-white hover:bg-black rounded-4xl px-4 py-2 flex-centered text-base cursor-pointer transition-all ease-in-out duration-150"
          >
            Register
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
