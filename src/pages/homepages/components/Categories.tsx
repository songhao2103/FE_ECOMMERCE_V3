import { CATEGORIES_DATA } from "../data";
import BoxSection from "./BoxSection";

const Categories = () => {
  return (
    <div>
      <BoxSection title="Categories">
        <div>
          <div className="title-h2">Browse By Category</div>
          <div className="grid grid-cols-2 gap-4 mt-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {CATEGORIES_DATA.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  className="flex flex-col items-center justify-center h-40 gap-2 p-4 
             border rounded-lg max-w-[220px] mx-auto w-full cursor-pointer 
             transition-all duration-300 ease-in-out 
             hover:shadow-lg hover:bg-secondary hover:text-surface 
             hover:-translate-y-1 group"
                >
                  <Icon
                    size={45}
                    className="transition-colors duration-300 ease-in-out"
                  />
                  <p className="mt-2 text-xl transition-colors duration-300 ease-in-out group-hover:text-surface">
                    {category.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </BoxSection>
    </div>
  );
};

export default Categories;
