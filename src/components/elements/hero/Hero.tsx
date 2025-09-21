import { Link } from "@tanstack/react-router";

const Hero: React.FC = () => {
  return (
    <div className="h-screen w-full flex-centered flex-col gap-8 bg-[#0a0a0a] text-white">
      <h2 className="bg-[#4f46e5] rounded-4xl px-4 py-1 text-white">
        Quick & easy to use.
      </h2>
      <h1 className="text-7xl leading-[84px] font-bold text-center">
        The <span className="text-[#4f46e5]">Fastest Way</span> to <br /> Create
        your own <span className="text-[#4f46e5]">App</span>
      </h1>
      <p className="max-w-4xl text-xl text-center text-[#7d7d7d]">
        Get your development off the ground with Pick & Start. This app
        generator provides a pre-configured components for you to use in your
        app.
      </p>
      <Link
        to="/"
        className=" bg-[#4f46e5] text-white hover:bg-black rounded-lg px-4 py-2 flex-centered text-xl cursor-pointer transition-all ease-in-out duration-150"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Hero;
