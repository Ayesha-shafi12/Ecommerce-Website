import { ArrowRight, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import offsale from "../assets/assets_frontend/offsale.jpg";

const OfferBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-800 via-indigo-700 to-blue-600 text-white py-16 md:py-20">
      <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-yellow-300/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm">
            <Tag size={16} className="text-yellow-300" />
            Limited Time Offer
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-5">
            Mega <span className="text-yellow-400">Sale</span>
          </h2>

          <p className="text-2xl md:text-3xl font-bold text-yellow-300 mt-2">
            Up to 50% OFF
          </p>

          <p className="mt-5 text-blue-100 text-base md:text-lg max-w-xl">
            Upgrade your everyday essentials with exciting deals on selected
            products. Don't miss the opportunity to save.
          </p>

          <button
            type="button"
            onClick={() => navigate("/products")}
            className="mt-7 inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-7 py-3.5 rounded-xl font-bold hover:bg-yellow-300 transition"
          >
            Shop Sale Products
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={offsale}
            alt="Special sale offer"
            className="w-full max-w-md h-72 md:h-80 object-cover rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
