import { Card, CardHeader, Rating, Body } from "../styled/Testimonials.styled";
import ratingStar from "../../assets/images/rating-star.svg";

function TestimonialCard({ testimonial }) {
  return (
    <Card>
      <CardHeader>
        <img src={testimonial.image} alt="user profile" />

        <div>
          <h5>{testimonial.name}</h5>
          <h6>{testimonial.location}</h6>
        </div>

        <Rating>
          <span>{testimonial.rating}</span>
          <img src={ratingStar} alt="star" />
        </Rating>
      </CardHeader>

      <Body>{testimonial.message}</Body>
    </Card>
  );
}

export default TestimonialCard;
