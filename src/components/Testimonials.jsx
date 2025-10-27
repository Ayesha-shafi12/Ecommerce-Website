import { Star } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Ayesha Khan",
      review:
        "Amazing quality and super fast delivery! The products are exactly as shown. Definitely shopping again!",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
    },
    {
      name: "Ali Raza",
      review:
        "Great service and packaging. The sneakers I ordered were perfect and very comfortable!",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 4,
    },
    {
      name: "Sara Malik",
      review:
        "Loved the beauty products! The prices are reasonable and the quality is excellent.",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            What Our <span className="text-blue-600">Customers Say</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Real feedback from our valued customers.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-14 h-14 rounded-full border-2 border-yellow-400 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{review.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                “{review.review}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
