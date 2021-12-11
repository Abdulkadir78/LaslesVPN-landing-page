import Slider from "react-slick";

import { StyledTestimonials, CarouselDot } from "../styled/Testimonials.styled";
import Container from "../styled/Container.styled";
import profile1 from "../../assets/images/review-1.svg";
import profile2 from "../../assets/images/review-2.svg";
import profile3 from "../../assets/images/review-3.svg";
import TestimonialCard from "./TestimonialCard";
import CarouselArrow from "./CarouselArrow";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Viezh Robert",
    image: profile1,
    location: "Warsaw, Poland",
    rating: "4.5",
    message:
      '"Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best".',
  },
  {
    name: "Yessica Christy",
    image: profile2,
    location: "Shanxi, China",
    rating: "4.5",
    message:
      '"I like it because I like to travel far and still can connect with high speed".',
  },
  {
    name: "Kim Young Jou",
    image: profile3,
    location: "Seoul, South Korea",
    rating: "4.5",
    message:
      '"This is very unusual for my business that currently requires a virtual private network that has high security".',
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    nextArrow: <CarouselArrow type="next" />,
    prevArrow: <CarouselArrow type="prev" />,
    customPaging: () => {
      return <CarouselDot className="carousel-dot" />;
    },

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledTestimonials id="testimonials">
      <Container>
        <h1>Trusted by Thousands of Happy Customers</h1>
        <p>
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>

        <Slider {...settings} className="slider">
          {testimonials.map((test, index) => (
            <TestimonialCard key={index} testimonial={test} />
          ))}
        </Slider>
      </Container>
    </StyledTestimonials>
  );
}

export default Testimonials;
