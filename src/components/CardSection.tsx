
import React from 'react';
import GiftCardItem from './GiftCardItem';

const CardSection = () => {
  const cards = [
    {
      amount: 1000,
      imageSrc: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=500&auto=format&fit=crop&q=80',
      description: 'Идеально подходит для небольших покупок в App Store и iTunes'
    },
    {
      amount: 2500,
      imageSrc: 'https://images.unsplash.com/photo-1561715276-a2d087060f1d?w=500&auto=format&fit=crop&q=80',
      description: 'Откройте для себя еще больше возможностей в мире Apple'
    },
    {
      amount: 5000,
      imageSrc: 'https://images.unsplash.com/photo-1595452767427-0905ad9b036d?w=500&auto=format&fit=crop&q=80',
      description: 'Максимальные возможности для приложений, игр, музыки и подписок'
    }
  ];

  return (
    <section className="py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Выберите номинал</h2>
          <p className="text-apple-darkgray max-w-2xl mx-auto">
            Подарочные карты Apple Gift Card доступны с разными номиналами на выбор
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <GiftCardItem
              key={card.amount}
              amount={card.amount}
              imageSrc={card.imageSrc}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
