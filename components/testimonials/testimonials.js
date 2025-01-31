import Carousel from "./Carousel";
import Title from "./Title";
import { promises as fs } from "fs";

import DATA from "../../app/reviews.json";

const Testimonials = async () => {
  // const data = require("../../app/reviews.json");
  const file = await fs.readFile(process.cwd() + "/app/reviews.json", "utf8");
  const data = JSON.parse(file);
  console.log(data);

  return (
    <section className="flex flex-col items-start gap-1 py-24 md:py-36 xl:py-48 sm:gap-4 lg:gap-6 h-fit md:flex-col ">
      <Title />
      <Carousel data={data.reviews} />
    </section>
  );
};

export default Testimonials;
