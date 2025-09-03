import { useEffect, useState, type ReactNode, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ScrollToTop from "../components/scrolls/ScrollToTop";
import { HeaderProvider } from "./header/HeaderContext";
import LoadingScreen from "../components/loader/LoadingScreen";
import usePopupAlertStore from "../store/popup-alert/store";
import PopupAlert from "../components/popup-alert/PopupAlert";

// Lazy import các component nặng
const HeaderAnimation = lazy(
  () => import("./header/components/HeaderAnimation")
);
const Footer = lazy(() => import("./footer"));
const BannerSlide = lazy(
  () => import("../pages/homepages/components/BannerSlide")
);
const ReusablePopup = lazy(() => import("../components/popups/Popup"));
const FormContact = lazy(() => import("./forms/FormContact"));
// const FloatingActions = lazy(() => import("./utils/FloatingActions"));

const MainLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [openForm, setOpenForm] = useState<boolean>(false);
  const { isOpen, message, type, closePopupAlert, isLoading } =
    usePopupAlertStore();

  useEffect(() => {
    const hash = location.state?.hash;
    const isFormOtherPage = location?.state?.isFormOtherPage;
    if (!hash) return;

    const el = document.querySelector("#" + hash);
    if (el) {
      const topPos = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: isFormOtherPage ? topPos - 500 : topPos - 200,
        behavior: "smooth",
      });
    }
  }, [location]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setOpenForm(true);
    }, 2 * 1000);
    return () => clearInterval(handler);
  }, []);

  // const handleCloseForm = () => setOpenForm(false);
  // const handleOpenForm = () => setOpenForm(true);

  return (
    <div className="relative flex flex-col min-h-screen ">
      <div className="absolute inset-0 -z-50 bg-[#fafafa]"></div>

      <HeaderProvider>
        <Suspense fallback={<LoadingScreen />}>
          <HeaderAnimation />
        </Suspense>
      </HeaderProvider>

      {location.pathname !== "/" && <Breadcrumb />}

      <div className="flex-1 max-w-[1820px] w-full mx-auto font-medium text-foreground">
        {location.pathname === "/" && (
          <Suspense fallback={<div>Đang tải banner...</div>}>
            <div className="relative z-0">
              <BannerSlide />
            </div>
          </Suspense>
        )}

        <div className="px-1 xl:px-2">{children}</div>
      </div>

      <div className="w-full mt-auto">
        <Suspense fallback={<div>Đang tải footer...</div>}>
          <Footer />
        </Suspense>
      </div>

      <ScrollToTop />

      {/* <div className="fixed z-50 bottom-8 right-4">
        <Suspense fallback={<></>}>
          <FloatingActions onOpenForm={handleOpenForm} />
        </Suspense>
      </div> */}

      {/* <Suspense fallback={<></>}>
        <ReusablePopup
          open={openForm}
          onClose={handleCloseForm}
          width="max-w-[800px]"
        >
          <FormContact onClose={handleCloseForm} />
        </ReusablePopup>
      </Suspense> */}

      {(isOpen || isLoading) && (
        <PopupAlert
          message={message}
          type={type}
          onClose={closePopupAlert}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default MainLayout;
