
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-apple-blue to-blue-600 text-white">
      <div className="container max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 max-w-2xl mx-auto">
          Подарите возможность выбора с Apple Gift Card
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Музыка, фильмы, приложения, игры, подписки — миллионы возможностей на выбор
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-apple-blue hover:bg-white/90">
            Купить сейчас
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Смотреть доступные номиналы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
