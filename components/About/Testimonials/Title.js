import { TextReveal } from "../../../utils/animations";

const Title = () => {
  return (
    <div className="flex flex-col gap-2 text-center ">
      {/* <h1 className="text-3xl font-medium leading-3 tracking-wide uppercase sm:text-xl md:text-2xl lg:text-3xl text-info-content xl:text-4xl 2xl:text-5xl text-balance">
        Ce spun
      </h1>
      <h2 className="text-4xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
        clientii nostri
      </h2> */}
      <TextReveal duration={1.3}>
        <h1 className="text-3xl font-medium leading-3 tracking-wide uppercase sm:text-xl md:text-2xl lg:text-3xl text-info-content xl:text-4xl 2xl:text-5xl text-balance">
          Ce spun
        </h1>
      </TextReveal>
      <TextReveal duration={1.3}>
        <h2 className="text-4xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          clientii nostri
        </h2>
      </TextReveal>
    </div>
  );
};

export default Title;
