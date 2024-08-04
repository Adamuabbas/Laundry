import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-scroll";
import img3 from "../assets/img (3).webp";
import img2 from "../assets/img (2).jpg";
import img5 from "../assets/img (5).jpg";

const Slide = ({ imageSrc, title, description }) => (
  <div className="relative">
    <LazyLoadImage src={imageSrc} alt={title} className="w-full h-screen object-cover" />
    <div className="absolute inset-0 flex items-center justify-center p-5">
      <div className="text-center">
        <h2 className="text-white text-2xl sm:text-6xl font-bold drop-shadow-lg">{title}</h2>
        <p className="text-white mt-4">{description}</p>
        <Link to="contact" spy={true} smooth={true} offset={-150} duration={500}>
          <button className="mt-6 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const Slideshow = () => {
  const slidesData = [
    {
      imageSrc: img3,
      title: "Laundry Pickup & Delivery Services",
      description: "We Believe in Health And Hygiene. With Hygiene And Cleaness comes A Better And Healthy Lifestyle.",
    },
    {
      imageSrc: img5,
      title: "Laundry Pickup & Delivery Services",
      description: "We Believe in Health And Hygiene. With Hygiene And Cleaness comes A Better And Healthy Lifestyle.",
    },
    {
      imageSrc: img2,
      title: "Laundry Pickup & Delivery Services",
      description: "We Believe in Health And Hygiene. With Hygiene And Cleaness comes A Better And Healthy Lifestyle.",
    },
  ];

  return (
    <div className="relative w-full lg:h-full" id="home">
      <Carousel
        autoPlay
        autoPlaySpeed={6000}
        infinite
        draggable
        swipeable
        showDots={false}
        keyBoardControl
        pauseOnHover={false}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            partialVisibilityGutter: 40,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        slidesToSlide={1}
      >
        {slidesData.map((slide, index) => (
          <Slide
            key={index}
            imageSrc={slide.imageSrc}
            title={slide.title}
            description={slide.description}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Slideshow;
