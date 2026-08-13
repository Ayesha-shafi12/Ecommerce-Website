import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return;
    }

    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-blue-700 py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
          <Mail size={26} />
        </div>

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Stay in the Trend
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
          Get updates about new products, special offers, and the latest trends
          delivered to your inbox.
        </p>

        {submitted ? (
          <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 font-medium text-green-600">
            <CheckCircle size={20} />
            You're successfully subscribed!
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-xl border-0 bg-white px-5 py-3.5 text-gray-900 outline-none ring-0 placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-400"
            />

            <button
              type="submit"
              className="rounded-xl bg-yellow-400 px-7 py-3.5 font-semibold text-blue-900 transition hover:bg-yellow-300"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-blue-200">
          No spam. You can unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
