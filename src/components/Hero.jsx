import { useHistory } from "react-router-dom";
export default function Hero() {
  let history = useHistory();

  function handleClick() {
    history.push("/tryChain");
  }

  return (
    <div>
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* <!--Left Col--> */}
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p className="uppercase tracking-loose w-full">
            What usecase are you?
          </p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            We try to elicit the truth from people!
          </h1>
          <p className="leading-normal text-2xl mb-8">
            Whether you are a researcher or a studying at college, we can
            provide you with a peer prediction mechanism that will help you
            reach your goals!
          </p>
          <button
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            onClick={handleClick}
          >
            Try the Chain
          </button>
        </div>
        {/* <!--Right Col--> */}
        <div className="w-full md:w-3/5 py-6 text-center">
          <img className="w-full md:w-4/5 z-50" src="/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
}
