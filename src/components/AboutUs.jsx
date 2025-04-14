import React from "react";
import aboutImage from "../assets/Group-6687.png";

function App() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-yellow-300 min-h-screen p-8">
      <div className="text-left md:w-1/2 p-2 lg:p-6">
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
          Nearly 50% of the world lacks essential health care. Digital
          technology has the potential to bridge that gap. However, if not
          achieved in an inclusive, equitable and sustainable manner, digital
          health transformation risks widening this gap.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-black mb-6">
          <span className="font-bold">Transform Health</span> is a coalition of
          organisations that advocate for equitable digital transformation of
          health{" "}
          <span className="font-bold">
            to achieve health for all in the digital age.
          </span>
        </p>
        <a
          href="#"
          className="text-pink-400 text-lg md:text-xl lg:text-4xl font-bold inline-block"
        >
          ABOUT US <span className="ml-2">→</span>
        </a>
      </div>
      <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={aboutImage}
          alt="Illustration of a hand holding a smartphone with a doctor on the screen"
          className="w-3/4 md:w-full"
        />
      </div>
    </div>
  );
}

export default App;
