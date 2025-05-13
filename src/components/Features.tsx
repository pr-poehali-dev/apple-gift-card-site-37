
import React from 'react';
import Icon from '@/components/ui/icon';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="mb-4 p-4 bg-apple-gray rounded-full">
        <Icon name={icon} className="h-8 w-8 text-apple-blue" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-apple-darkgray">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Удобство Apple Gift Card</h2>
          <p className="text-apple-darkgray max-w-2xl mx-auto">
            Откройте для себя все возможности экосистемы Apple с нашими подарочными картами
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature
            icon="Gift"
            title="Идеальный подарок"
            description="Подарите близким возможность выбрать именно то, что они хотят из огромного каталога Apple"
          />
          <Feature
            icon="ShoppingCart"
            title="Мгновенная доставка"
            description="Получите код активации карты на email сразу после оплаты"
          />
          <Feature
            icon="Shield"
            title="Безопасные платежи"
            description="Все транзакции защищены современными протоколами безопасности"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
