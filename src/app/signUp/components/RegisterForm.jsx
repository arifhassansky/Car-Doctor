"use client";
import registerUser from "@/app/actions/auth/registerUser";
import SocialLogin from "@/app/login/components/SocialLogin";
import Link from "next/link";

const RegisterForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const res = await registerUser({ name, email, password });
    console.log(res);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-bold text-center mt-4 mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit}>
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
      <SocialLogin />
      <p className="text-center mt-4">
        Have an account?{" "}
        <Link href="/login" className="text-red-500 font-semibold">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
