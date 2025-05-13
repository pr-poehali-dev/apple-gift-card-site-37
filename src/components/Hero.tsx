
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-apple-gray overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-apple-black mb-4">
              Apple Gift Card
            </h1>
            <p className="text-xl text-apple-darkgray max-w-md mx-auto md:mx-0 mb-8">
              Идеальный подарок для всех, кто любит Apple. Музыка, приложения, игры и многое другое.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-apple-blue hover:bg-blue-600 text-white">
                Купить карту
              </Button>
              <Button size="lg" variant="outline" className="border-apple-blue text-apple-blue hover:bg-apple-blue/5">
                Узнать больше
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-apple-gray/50 rounded-2xl transform rotate-6"></div>
              <img
                src="https://images.unsplash.com/photo-1557316943-0e2a2e4fc693?w=600&auto=format&fit=crop&q=80"
                alt="Apple Gift Card"
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
