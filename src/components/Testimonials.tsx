
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialProps {
  quote: string;
  author: string;
  avatarSrc?: string;
  initials: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, avatarSrc, initials }) => {
  return (
    <Card className="border border-apple-lightgray rounded-2xl hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex-1">
            <p className="text-apple-black italic">{quote}</p>
          </div>
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={avatarSrc} alt={author} />
              <AvatarFallback className="bg-apple-blue text-white">{initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{author}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-apple-gray">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Отзывы наших клиентов</h2>
          <p className="text-apple-darkgray max-w-2xl mx-auto">
            Узнайте, что говорят наши покупатели о подарочных картах Apple Gift Card
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Купил карту в подарок сыну, он был очень рад. Быстрая доставка кода на почту и простая активация."
            author="Антон С."
            initials="АС"
          />
          <TestimonialCard
            quote="Отличный подарок для любителей Apple. Я сама выбрала, на что потратить деньги - купила годовую подписку Apple Music."
            author="Марина К."
            initials="МК"
          />
          <TestimonialCard
            quote="Всегда дарю Apple Gift Card друзьям на дни рождения. Удобно, что можно выбрать разный номинал в зависимости от повода."
            author="Дмитрий Л."
            initials="ДЛ"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
