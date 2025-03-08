import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <section className="w-10/12 mx-auto">
      <div className="flex items-center justify-center gap-20">
        <div className="mt-20">
          <Image
            src={"/assets/images/login/login.svg"}
            width={460}
            height={502}
          />
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-center mt-4 mb-6">Sign Up</h2>
          <form>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full p-3 border border-gray-300 rounded-lg my-3"
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full p-3 border border-gray-300 rounded-lg my-3"
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="w-full p-3 border border-gray-300 rounded-lg my-3"
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white mt-4 py-3 rounded-lg text-lg font-semibold hover:bg-red-600"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center my-4">Or Sign Up with</p>
          <div className="flex justify-center space-x-4">
            <button className="p-3 bg-gray-200 rounded-full hover:bg-gray-300">
              <FaFacebook className="text-blue-600 text-xl" />
            </button>
            <button className="p-3 bg-gray-200 rounded-full hover:bg-gray-300">
              <FaLinkedin className="text-blue-700 text-xl" />
            </button>
            <button className="p-3 bg-gray-200 rounded-full hover:bg-gray-300">
              <FcGoogle className="text-xl" />
            </button>
          </div>
          <p className="text-center mt-4">
            Have an account?{" "}
            <Link href="/login" className="text-red-500 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
