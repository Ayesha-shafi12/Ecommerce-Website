import { Truck, ShieldCheck, Headphones, RotateCcw } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Reliable delivery across Pakistan with carefully packed orders.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Shopping",
    description:
      "Your shopping experience is designed with security and privacy in mind.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "We're here to help with your questions, orders, and shopping needs.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description:
      "Simple return support so you can shop with greater confidence.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="border-y border-gray-100 bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left"
              >
                <div className="mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 sm:mr-4 sm:mb-0">
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
