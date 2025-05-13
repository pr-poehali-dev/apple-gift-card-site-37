
import React from 'react';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F7] py-12 border-t border-apple-lightgray">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-sm font-semibold text-apple-black mb-4">О нас</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-apple-darkgray hover:text-apple-blue transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-apple-darkgray hover:text-apple-blue transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-apple-darkgray hover:text-apple-blue transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-apple-black mb-4">Карты Apple Gift Card</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-apple-darkgray hover:text-apple-blue transition-colors">
                  Номинал 1000 ₽
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-apple-darkgray hover:text-apple-blue transition-colors">
                  Номинал 2500 ₽
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-apple-darkgray hover:text-apple-blue transition-colors">
                  Номинал 5000 ₽
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-apple-black mb-4">Связаться с нами</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-apple-darkgray hover:text-apple-blue transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-apple-darkgray hover:text-apple-blue transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-apple-darkgray hover:text-apple-blue transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-apple-darkgray hover:text-apple-blue transition-colors">
                <Icon name="Mail" className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
            <p className="mt-4 text-sm text-apple-darkgray">
              support@applegiftcard.ru
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-apple-lightgray">
          <p className="text-xs text-apple-darkgray text-center">
            Copyright © {new Date().getFullYear()} Apple Gift Card. Все права защищены. Apple и логотип Apple являются зарегистрированными товарными знаками Apple Inc. в США и других странах.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
