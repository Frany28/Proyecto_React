import { Link } from "react-router-dom";
import Title from "./Title";
import Logo from "../../resources/img/logo.png";

export const Navbar = () => {
  return (
    <section className="header flex mx-auto bg-[#1F7A8C] border-b-[1px] border-[#022B3A]">
      <nav className="navbar flex justify-between items-center w-full p-2">
        <div className="logo flex items-center gap-[7px]">
          <img
            className="w-10 md:w-15 lg:w-14  h-10 md:h-12 lg:h-12"
            src={Logo}
            alt="Logo de la pagina"
          />
          <Title
            text="Rumours!"
            classes="text-white cursor-pointer md:text-1xl"
          />
        </div>

        <div className="flex items-center gap-[1rem]">
          <div>
            <ul>
              <li>
                <Link to="/"> Home</Link>
              </li>
            </ul>
          </div>

          <div className="icons flex items-center gap-[0.5rem] outline-none p-0.5">
            <Link to="/Login">Login</Link>
            <button className="searchButton bg-none border-none cursor-pointer">
              <i className="fas fa search"></i>
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};
