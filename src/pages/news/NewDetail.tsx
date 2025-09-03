import { useParams } from "react-router-dom";
import LayoutNew from "./components/LayoutNew";
import { BLOGS_DATA } from "./data";
import { useMemo } from "react";

const NewDetail = () => {
  const { id } = useParams() || 1;

  const Component = useMemo(() => {
    const currentItem = BLOGS_DATA.find((item) => item.id === Number(id));
    return currentItem?.component;
  }, [id]);

  if (!Component) {
    return <div className="text-center text-red-500">Blog not found</div>;
  }
  return (
    <LayoutNew>
      <Component />
    </LayoutNew>
  );
};

export default NewDetail;
