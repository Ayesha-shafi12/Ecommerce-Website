import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="flex justify-center py-10">
      <SignIn routing="path" path="/sign-in" />
    </div>
  );
}
