import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const SocialLogin = () => {
  return (
    <div className="flex justify-center space-x-4">
      {/* Facebook Login Button */}
      <button
        className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
        aria-label="Login with Facebook"
        onClick={() => signIn("facebook")}
      >
        <FaFacebook className="text-blue-600 text-xl" />
      </button>

      {/* LinkedIn Login Button */}
      <button
        className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
        aria-label="Login with LinkedIn"
        onClick={() => signIn("linkedin")}
      >
        <FaLinkedin className="text-blue-700 text-xl" />
      </button>

      {/* Google Login Button */}
      <button
        className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
        aria-label="Login with Google"
        onClick={() => signIn("google")}
      >
        <FcGoogle className="text-xl" />
      </button>
    </div>
  );
};

export default SocialLogin;
