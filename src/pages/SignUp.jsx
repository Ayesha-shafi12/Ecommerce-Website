import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <div className="flex justify-center py-10">
      <SignUp routing="path" path="/sign-up" />
    </div>
  );
}
