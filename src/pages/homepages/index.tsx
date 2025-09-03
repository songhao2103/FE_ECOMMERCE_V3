// import BannerSlide from "./components/BannerSlide";
import Categories from "./components/Categories";
import { Feedbacks } from "./components/Feedbacks";
import MoreAboutUs from "./components/MoreAboutUs";
import NewArrival from "./components/NewArrival";
import ProductsBestSelling from "./components/ProductsBestSelling";
import ProductsOnSale from "./components/ProductsOnSale";
import ServicesOverview from "./components/ServicesOverview";
import ShopServices from "./components/ShopServices";
import Statistical from "./components/Statistical";
import Workflow from "./components/Workflow";

const HomePage = () => {
  return (
    <div className="w-full">
      <ProductsOnSale />
      <Categories />
      <ProductsBestSelling />
      <NewArrival />
      <ShopServices />
      {/* MoreAboutUs nằm sau IntroduceSections */}
      <div className="mt-[50px]">
        <MoreAboutUs />
      </div>

      {/* Services Overview */}
      <ServicesOverview />

      {/* Workflow */}
      <Workflow showTitleSection />

      {/* Feedbacks */}
      <Feedbacks />

      {/* Statistical */}
      <Statistical />
    </div>
  );
};

export default HomePage;
