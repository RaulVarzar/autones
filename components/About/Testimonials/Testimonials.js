import Carousel from "./Carousel";
import Title from "./Title";
import REVIEWS from "./reviews";

const Testimonials = () => {
  return (
    <section className="flex flex-col items-start gap-1 sm:gap-4 lg:gap-6 h-fit md:flex-col ">
      <Title />
      <Carousel data={REVIEWS.reviews} />
    </section>
  );
};

export default Testimonials;
