import Image from "next/image";

import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <section className="w-10/12 mx-auto">
      <div className="flex items-center justify-center gap-20">
        <div className="mt-20">
          <Image
            src={"/assets/images/login/login.svg"}
            width={460}
            height={502}
            alt="Login Image"
          />
        </div>
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
