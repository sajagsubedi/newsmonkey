import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header
        className="text-gray-400 sticky top-0 bg-gray-900 body-font"
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl">NewsMonkey</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 text-white hover:text-gray-600">
              Home
            </Link>
            {this.props.category.map((element) => {
              return (
                <Link
                  key={element}
                  to={`/${element}`}
                  className="mr-5 text-white hover:text-gray-600"
                >
                  {element.charAt(0).toUpperCase() + element.slice(1)}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    );
  }
}
export default Header;
