import Carousel from "../ui/Carousel";

const Projects = () => {
  return (
    <div id="projects" className="flex gap-4 my-16 justify-center items-center">
      <div className="relative h-full hidden md:block">
        <Carousel
          baseWidth={800}
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </div>
      <div className="relative h-full flex md:hidden ">
        <Carousel
          baseWidth={400}
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </div>
    </div>
  );
};

export default Projects;
