import { SignIn } from "@clerk/react-router";

const SignInPage = () => {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4 py-12">
      <SignIn
        routing="path"
        path="/signin"
        fallbackRedirectUrl="/"
        signUpUrl="/signup"
      />
    </section>
  );
};

export default SignInPage;
