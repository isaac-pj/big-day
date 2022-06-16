import { useMediaQuery } from "react-responsive";
import { mediaQueryConstants } from "../constants/mediaQueryConstants";

const useIsMobile = () => {
  const isMobile = useMediaQuery(mediaQueryConstants.MQ_SMALL_OR_MOBILE);
  return isMobile;
};

export default useIsMobile;
