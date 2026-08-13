import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/data/testimonial.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load testimonials");
        }

        return res.json();
      })
      .then((data) => setReviews(data))
      .catch((err) => console.error("Testimonials loading error:", err));
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-bold uppercase tracking-wider text-sm">
            Customer Experience
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            What Our <span className="text-blue-600">Customers Say</span>
          </h2>

          <p className="text-gray-500 mt-3">
            Feedback from customers who have experienced Trend.pk.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <article
              key={review.id || index}
              className="relative bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100 hover:shadow-xl transition"
            >
              <Quote
                size={40}
                className="absolute top-5 right-5 text-blue-100"
              />

              <div className="flex items-center gap-4 relative z-10">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-14 h-14 rounded-full border-2 border-yellow-400 object-cover"
                />

                <div>
                  <h3 className="font-bold text-gray-800">{review.name}</h3>

                  <div className="flex gap-0.5 mt-1">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        fill="currentColor"
                        className="text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-7 mt-6 relative z-10">
                "{review.review}"
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
