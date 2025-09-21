import { Link } from "@tanstack/react-router";

const Login: React.FC = () => {
  return (
    <div className="h-screen w-full flex-centered bg-[#0a0a0a] text-white">
      <div className="h-[80%] w-1/2 bg-[#161616] rounded-2xl flex flex-col py-10 px-20 justify-between">
        <Link to="/">
          <img
            src="/logo.png"
            alt="Pick&Start logo"
            className="w-[140px] ml-4"
          />
        </Link>
        <form className="flex flex-col gap-4">
          <h1 className="text-5xl">Welcome Back !!</h1>
          <p className="text-[#7d7d7d] mb-8">
            We are keeping your account only for support purposes.
          </p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border border-[#7d7d7d] w-full rounded-xl px-4 py-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border border-[#7d7d7d] w-full rounded-xl px-4 py-2"
          />
          <button
            type="submit"
            className="w-full text-white bg-black px-4 py-3 rounded-xl cursor-pointer hover:bg-black/70"
          >
            Login
          </button>
          <span>
            Doesn't have account?{" "}
            <Link to="/register" className="text-[#4f46e5] hover:underline">
              Register your account
            </Link>
          </span>
        </form>
        <div className="flex gap-4">
          <p className="text-[#7d7d7d] hover:underline">Terms</p>
          <p className="text-[#7d7d7d] hover:underline">Privacy</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
