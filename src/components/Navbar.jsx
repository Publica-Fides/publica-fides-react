import { NavLink, useHistory } from "react-router-dom";

export default function Navbar() {
  let history = useHistory();

  function handleClick() {
    history.push("/tryChain");
  }

  return (
    <nav className="gradient w-full z-30 text-white py-5">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a
            className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            {/* <!--Icon from: http://www.potlabicons.com/ --> */}
            {/* <span className="text-emerald-700 align-text-bottom text-6xl">
              @
            </span> */}
            <img src="/logo.png" className="h-16 w-16 float-left" />
            <span className="align-middle pl-2">publica-fides</span>
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <NavLink
                exact
                className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                activeClassName="font-extrabold"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="mr-3">
              <NavLink
                exact
                className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                to="/chainFeed"
                activeClassName="font-extrabold"
              >
                chainFeed
              </NavLink>
            </li>
            <li className="mr-3">
              <NavLink
                exact
                className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                to="/tryChain"
                activeClassName="font-extrabold"
              >
                tryChain
              </NavLink>
            </li>
          </ul>
          <button
            id="navAction"
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-100 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            onClick={handleClick}
          >
            Try the Chain!
          </button>
        </div>
      </div>
    </nav>
  );
}
