
import React from 'react';
import Icon from '@/components/ui/icon';

const HowToUse = () => {
  const steps = [
    {
      icon: 'CreditCard',
      title: 'Выберите и оплатите',
      description: 'Выберите номинал карты и оплатите удобным способом'
    },
    {
      icon: 'Mail',
      title: 'Получите код',
      description: 'Получите код активации на указанную электронную почту'
    },
    {
      icon: 'Gift',
      title: 'Используйте сами или подарите',
      description: 'Активируйте код в своем Apple ID или отправьте его в качестве подарка'
    },
    {
      icon: 'ShoppingBag',
      title: 'Наслаждайтесь покупками',
      description: 'Тратьте баланс на приложения, игры, музыку и подписки'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Как это работает</h2>
          <p className="text-apple-darkgray max-w-2xl mx-auto">
            Простые шаги для использования Apple Gift Card
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-apple-gray rounded-full mb-4">
                  <Icon name={step.icon} className="h-8 w-8 text-apple-blue" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-apple-lightgray transform -translate-y-1/2" style={{ width: 'calc(100% - 4rem)' }}></div>
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-apple-darkgray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
