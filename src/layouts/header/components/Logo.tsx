import logo from "../../../assets/images/logos/logo-trang.png";
import logo2 from "../../../assets/images/logos/logo.png";

const Logo = ({
  className,
  isLogo2,
}: {
  className?: string;
  isLogo2?: boolean;
}) => {
  return (
    <a href="/">
      <img
        src={isLogo2 ? logo2 : logo}
        alt="Logo"
        className={`${
          isLogo2
            ? "h-[50px] w-auto"
            : "h-[30px] lg:h-[50px] w-[30px] lg:w-[50px]"
        } ml-2 ${className} `}
      />
    </a>
  );
};

export default Logo;
