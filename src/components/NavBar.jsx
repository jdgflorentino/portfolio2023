import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };
  }
  
  toggleMenu = () => {
    const { showMenu } = this.state;
    if(!showMenu) {
      this.setState({showMenu: true });
    } else {
      this.setState({showMenu: false });
    }
  }

  render() {
    const { showMenu } = this.state;
    return (
      <header className="sticky top-0 z-50 backdrop-blur-sm flex-none lg:border-b lg:border-slate-900/10">
	      <nav className="sm:container sm:mx-auto">
          <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
            <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
              <Link
                to="/"
                aria-label="about"
                className="uppercase block text-left text-lg py-2 pr-4 text-gray-700 rounded hover:bg-teal-600 md:hover:bg-transparent md:hover:text-teal-600" >início</Link>
              <Link
                to="/skills"
                aria-label='skills'
                className="uppercase block text-left text-lg py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-teal-600 md:hover:bg-transparent md:hover:text-teal-600">skills</Link>
              <Link
                to="/projects"
                aria-label='projects'
                className="uppercase block text-left text-lg py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-teal-600 md:hover:bg-transparent md:hover:text-teal-600">projetos</Link>
              <Link to="/contact" className="uppercase block text-left text-lg py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-teal-600 md:hover:bg-transparent md:hover:text-teal-600">contato</Link>
            </div>
            <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
              <a
                href="https://drive.google.com/file/d/1WZFWZEP5Aeh9WEnR0YMT0IuHIVts2daW/view?usp=sharing"
                target="_blank"
                rel="noreferrer">
              <button
                type="button"
                className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-3 focus:outline-none focus:ring-teal-700 font-medium rounded-lg px-5 py-2.5 text-center text-base">
              Resume</button>

              </a>
            </div>
            {/* Small screen hamburguer menu*/}
            <div className="sm:hidden pr-5 flex flex-row-reverse">
						<button
							onClick={this.toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="h-7 w-7 fill-current text-gray-700"
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Header links small screen */}
				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
					<Link
						to="/"
            aria-label="about"
						className="block text-left text-sm text-gray-700 uppercase sm:mx-4 mb-2 sm:py-2"
					>
						ínicio
					</Link>
					<Link
						to="/skills"
						className="block text-left text-sm text-gray-700 uppercase sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light"
						aria-label="skills"
					>
						skills
					</Link>
					<Link
						to="/projects"
						className="block text-left text-sm text-gray-700 uppercase sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light"
						aria-label="projects"
					>
						projetos
					</Link>
          <Link
						to="/contact"
						className="block text-left text-sm text-gray-700 uppercase sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light"
						aria-label="contact"
					>
						contato
					</Link>
					<div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light">
						<a
              href="https://drive.google.com/file/d/1WZFWZEP5Aeh9WEnR0YMT0IuHIVts2daW/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
						>
						<button 
            type="button"
            className="font-general-medium sm:hidden block text-left text-md bg-teal-600 hover:bg-teal-700 text-white shadow-sm rounded-lg px-4 py-2 mt-2 duration-300 w-24">
              Resume </button>
						</a>
					</div>
				</div>
		  </nav>
    </header>
    );
  }
}

export default NavBar;