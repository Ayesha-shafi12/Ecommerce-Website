import { useState } from "react";
import Collection from "../components/Collection";
import FeaturedProducts from "../components/FeaturedProducts";
import Header from "../components/Header";
import OfferBanner from "../components/OfferBanner";
import Testimonials from "../components/Testimonials";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header
        onCategoryChange={setSelectedCategory}
        onSearchChange={setSearchTerm}
      />

      <Collection />
      <FeaturedProducts />
      <OfferBanner />
      <Testimonials />
    </>
  );
};

export default Home;
