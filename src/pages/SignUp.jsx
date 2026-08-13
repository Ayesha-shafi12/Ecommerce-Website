import { SignUp } from "@clerk/react-router";

const SignUpPage = () => {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4 py-12">
      <SignUp
        routing="path"
        path="/signup"
        fallbackRedirectUrl="/"
        signInUrl="/signin"
      />
    </section>
  );
};

export default SignUpPage;
