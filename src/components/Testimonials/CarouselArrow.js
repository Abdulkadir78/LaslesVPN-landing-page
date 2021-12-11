import { ArrowButton } from "../styled/Testimonials.styled";
import nextArrow from "../../assets/images/next-arrow.svg";
import prevArrow from "../../assets/images/prev-arrow.svg";

function CarouselArrow({ type, onClick, style }) {
  return (
    <ArrowButton
      onClick={onClick}
      type={type}
    >
      <img src={type === "next" ? nextArrow : prevArrow} alt="arrow" />
    </ArrowButton>
  );
}

export default CarouselArrow;
