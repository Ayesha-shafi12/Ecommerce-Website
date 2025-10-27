import about from "../assets/assets_frontend/about.jpg";
const About = () => {
  return (
    <section className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700">
            About <span className="text-yellow-400">Trend.pk</span>
          </h1>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Discover who we are, what we stand for, and why thousands trust us
            for quality and style.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Bringing You the Best Shopping Experience
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At <span className="font-semibold text-blue-700">Trend.pk</span>,
              we're dedicated to delivering a modern, seamless, and enjoyable
              shopping experience. From fashion to lifestyle and tech every
              product is hand picked to match your quality expectations.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our mission is to make online shopping easier, faster, and more
              reliable in Pakistan. We work closely with trusted brands and
              suppliers to ensure authenticity and the best prices.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Whether you're upgrading your wardrobe, buying gadgets, or
              exploring new trends, Trend.pk has you covered with{" "}
              <span className="font-semibold text-blue-700">
                style, quality,
              </span>{" "}
              and <span className="font-semibold text-yellow-500">trust</span>.
            </p>
          </div>
          <div className="relative">
            <img
              src={about}
              alt="About Trend.pk"
              className="rounded-2xl shadow-lg object-cover w-full h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
          </div>
        </div>
        <div className="text-center mt-16 mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            To redefine online shopping in Pakistan with reliability,
            affordability, and innovation while ensuring our customers feel
            confident and excited with every purchase.
          </p>
        </div>
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-blue-700 mb-10">
            Why Choose <span className="text-yellow-400">Trend.pk?</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fast & Reliable Delivery",
                desc: "We ensure your products are delivered quickly and securely across Pakistan.",
                icon: "🚚",
              },
              {
                title: "Premium Quality Products",
                desc: "Every product is carefully selected and checked to meet high-quality standards.",
                icon: "⭐",
              },
              {
                title: "Secure Online Payments",
                desc: "Shop with confidence using trusted payment methods and encrypted checkout.",
                icon: "💳",
              },
              {
                title: "Dedicated Customer Support",
                desc: "Our friendly team is always here to assist you with your orders or questions.",
                icon: "🤝",
              },
              {
                title: "Affordable Prices",
                desc: "We bring you top-quality products at prices that fit your budget.",
                icon: "💰",
              },
              {
                title: "Trusted by Thousands",
                desc: "Our customers love us for our honesty, quality, and excellent service.",
                icon: "🏆",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
