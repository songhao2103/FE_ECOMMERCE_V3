import LayoutContent from "../../layouts/LayoutContent";
import LayoutNew from "./components/LayoutNew";
import NewList from "./components/NewList";

const News = () => {
  return (
    <LayoutContent>
      <LayoutNew>
        <NewList />
      </LayoutNew>
    </LayoutContent>
  );
};

export default News;
