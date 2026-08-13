import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="text-7xl font-black text-blue-600">404</p>

        <h1 className="mt-4 text-3xl font-bold">Page Not Found</h1>

        <p className="mt-3 text-gray-500">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-7 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
