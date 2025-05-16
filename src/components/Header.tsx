import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Icon name="Apple" className="h-8 w-8 text-black" />
            <span className="ml-2 font-semibold text-lg">Apple Gift Card</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-apple-blue transition-colors"
            >
              Главная
            </Link>
            <Link
              to="/instructions"
              className="text-gray-700 hover:text-apple-blue transition-colors"
            >
              Инструкция
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:flex">
              <Icon name="User" className="mr-2 h-4 w-4" />
              Войти
            </Button>
            <Button className="bg-apple-blue hover:bg-blue-600">
              <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Корзина</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
