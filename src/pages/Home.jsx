import Collection from "../components/Collection";
import FeaturedProducts from "../components/FeaturedProducts";
import Header from "../components/Header";
import OfferBanner from "../components/OfferBanner";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <Collection />
      <FeaturedProducts />
      <OfferBanner />
      <Testimonials />
    </>
  );
};

export default Home;
