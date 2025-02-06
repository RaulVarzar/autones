import Carousel from "./Carousel";
import Title from "./Title";
import REVIEWS from "./reviews";

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center gap-4 mx-auto sm:gap-6 lg:gap-8 xl:gap-10 h-fit md:flex-col max-w-screen-3xl">
      <Title />
      <Carousel data={REVIEWS.reviews} />
    </section>
  );
};

export default Testimonials;
