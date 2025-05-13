
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-apple-lightgray">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <Icon name="Apple" className="h-6 w-6" />
              <span className="ml-2 text-lg font-medium hidden sm:inline-block">
                Gift Card
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-sm font-medium text-gray-900 hover:text-apple-blue transition-colors">
              Главная
            </a>
            <a href="/cards" className="text-sm font-medium text-gray-900 hover:text-apple-blue transition-colors">
              Карты
            </a>
            <a href="/guide" className="text-sm font-medium text-gray-900 hover:text-apple-blue transition-colors">
              Инструкция
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-apple-black">
                  <Icon name="Menu" className="h-6 w-6" />
                  <span className="sr-only">Открыть меню</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <a href="/" className="text-base font-medium px-2 py-3 hover:bg-apple-gray rounded-md transition-colors">
                    Главная
                  </a>
                  <a href="/cards" className="text-base font-medium px-2 py-3 hover:bg-apple-gray rounded-md transition-colors">
                    Карты
                  </a>
                  <a href="/guide" className="text-base font-medium px-2 py-3 hover:bg-apple-gray rounded-md transition-colors">
                    Инструкция
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <Button className="bg-apple-blue hover:bg-blue-600 text-white">
              Купить карту
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
