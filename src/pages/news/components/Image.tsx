const Image = ({ image }: { image: string }) => {
  if (!image) return null;

  return (
    <div className="my-6">
      <img
        src={image}
        alt="Ảnh"
        className="max-w-full max-h-[500px] w-auto h-auto object-contain mx-auto"
      />
    </div>
  );
};
export default Image;
