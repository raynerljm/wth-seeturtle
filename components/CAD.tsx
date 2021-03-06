import { FC } from "react";
import Image from "next/image";
import { Fade, Rotate } from "react-awesome-reveal";

const CAD: FC = ({ children }) => {
  return (
    <div className="w-full" id="CAD">
      {children}
      <br />
      <br />
      <h1 className="text-white text-center text-5xl font-semibold">
        SeeTurtle 3D Model Design{" "}
      </h1>
      <br />
      <h3 className="text-white text-center text-3xl font-semibold">
        Key Features
      </h3>
      <br />
      <br />
      <div className="grid grid-cols-2 h-4/5">
        <div className="flex justify-center items-center h-full transform hover:scale-110 transition-all">
          <Fade direction="left">
            <Image
              src="/turtlewhite.png"
              alt="Fish Icon"
              layout="fixed"
              width={400}
              height={400}
            />
          </Fade>
        </div>
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-white text-right text-5xl font-semibold">
            <span className="font-semibold">AI-powered</span>
            <br />
            <span className="font-semibold">battery electric</span>
            <br />
            <span className="font-semibold">microplastic remover</span>
          </h1>

          <div className="pl-10">
            <p className="text-right text-white text-lg font-light mt-6">
              The AI-powered battery electric microplastic remover. Our state of
              the art SeeTurtle attempts to decrease microplastics found in
              oceans by traversing the oceans and filtering out microplastics,
              while raising awareness on waste management issues. By leveraging
              on IOT, Software Platforms and Artificial Intelligence in the form
              of Computer vision, See Turtle offers a novel solution to tackle
              this crisis.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-white text-center text-5xl font-semibold">
          <br />
          <span className="font-semibold">SeeTurtle components</span>
        </h1>
        <span className="text-center text-white text-lg font-light mt-6">
          State-of-the-art engineering with advanced functionalities.
        </span>
        <div className="transform hover:scale-110 transition-all">
          <Fade direction="up">
            <Image
              src="/blownup.png"
              alt="Fish Icon"
              layout="fixed"
              width={1000}
              height={800}
            />
          </Fade>
        </div>
      </div>
      <div className="flex flex-col justify-center h-full">
        <br />
        <h1 className="text-white text-center text-5xl font-semibold">
          <br />
          <span className="font-semibold">Connected wherever you go. </span>
        </h1>
        <span className="text-center text-white text-lg font-light mt-6">
          SeeTurtles are connected and live streaming on our website. <br />
          You can see our SeeTurtles in action and track how much plastic waste
          has been removed.
        </span>
        <br />{" "}
        <div className="video-border-jess w-4/5 mx-auto mb-16">
          <Image
            src="/map.png"
            alt="Map"
            layout="responsive"
            width={865}
            height={579}
          />
        </div>
      </div>
    </div>
  );
};

export default CAD;
