import offsale from "../assets/assets_frontend/offsale.jpg";
const OfferBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Mega <span className="text-yellow-400">Sale</span>Up to{" "}
            <span className="text-yellow-300">50% OFF!</span>
          </h2>
          <p className="mt-4 text-lg text-gray-100">
            Grab your favorite products at unbeatable prices. Limited time offer
            don't miss out!
          </p>
          <button className="mt-6 bg-yellow-400 text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition duration-300">
            Shop Now
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={offsale}
            alt="Special Offer"
            className="w-80 md:w-[420px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default OfferBanner;
