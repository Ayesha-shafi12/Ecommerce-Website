import { useEffect, useState } from "react";
import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((previous) => {
        let { hours, minutes, seconds } = previous;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        } else {
          return {
            hours: 5,
            minutes: 42,
            seconds: 30,
          };
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => String(value).padStart(2, "0");

  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-blue-900 px-6 py-10 text-white sm:px-10">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="text-center lg:text-left">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                <Clock size={16} />
                Limited Time Offer
              </div>

              <h2 className="text-3xl font-bold sm:text-4xl">Flash Sale</h2>

              <p className="mt-3 max-w-lg text-blue-100">
                Grab your favorite products before the special prices disappear.
              </p>

              <Link
                to="/products"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-blue-900 transition hover:bg-yellow-300"
              >
                Shop Deals
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-sm sm:min-w-24">
                <div className="text-2xl font-bold sm:text-3xl">
                  {formatTime(timeLeft.hours)}
                </div>
                <div className="mt-1 text-xs text-blue-100">Hours</div>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-sm sm:min-w-24">
                <div className="text-2xl font-bold sm:text-3xl">
                  {formatTime(timeLeft.minutes)}
                </div>
                <div className="mt-1 text-xs text-blue-100">Minutes</div>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-sm sm:min-w-24">
                <div className="text-2xl font-bold sm:text-3xl">
                  {formatTime(timeLeft.seconds)}
                </div>
                <div className="mt-1 text-xs text-blue-100">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
