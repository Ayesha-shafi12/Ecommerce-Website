import { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign-Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-lg font-semibold text-black">
          {state === "Sign-Up" ? "Create Account" : "Login"}
        </p>
        {state === "Sign-Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button
          style={{ backgroundColor: "#3E3AE0" }}
          className="text-white w-full py-2 rounded-md text-base hover:opacity-90 transition-opacity"
        >
          {state === "Sign-Up" ? "Create Account" : "Login"}
        </button>

        {state === "Sign-Up" ? (
          <p className="text-center w-full">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              style={{ color: "#3E3AE0" }}
              className="underline cursor-pointer"
            >
              Login Here
            </span>
          </p>
        ) : (
          <p className="text-center w-full">
            Create new account?{" "}
            <span
              onClick={() => setState("Sign-Up")}
              style={{ color: "#3E3AE0" }}
              className="underline cursor-pointer"
            >
              Create Account
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
