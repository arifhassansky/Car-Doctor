import Image from "next/image";

import RegisterForm from "./components/RegisterForm";

const SignUp = () => {
  return (
    <section className="w-10/12 mx-auto">
      <div className="flex items-center justify-center gap-20">
        <div className="mt-20">
          <Image
            src={"/assets/images/login/login.svg"}
            width={460}
            height={502}
            alt="Register Image"
          />
        </div>

        {/* right side */}
        <RegisterForm />
      </div>
    </section>
  );
};

export default SignUp;
