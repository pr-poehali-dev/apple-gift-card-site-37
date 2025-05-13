
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface GiftCardItemProps {
  amount: number;
  imageSrc: string;
  description: string;
}

const GiftCardItem: React.FC<GiftCardItemProps> = ({ amount, imageSrc, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden border border-apple-lightgray hover:shadow-lg transition-shadow duration-300 rounded-2xl">
        <CardContent className="p-0 h-full flex flex-col">
          <div className="relative pt-[75%] bg-gradient-to-br from-white to-apple-gray">
            <img
              src={imageSrc}
              alt={`Apple Gift Card ${amount} ₽`}
              className="absolute inset-0 w-full h-full object-contain p-8"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-2">
              {amount.toLocaleString('ru-RU')} ₽
            </h3>
            <p className="text-sm text-apple-darkgray mb-4 flex-grow">
              {description}
            </p>
            <Button className="w-full bg-apple-blue hover:bg-blue-600 transition-colors">
              Купить
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default GiftCardItem;
