import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-apple-gray overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-apple-black mb-4">
              Apple Gift Card
            </h1>
            <p className="text-xl text-apple-darkgray max-w-md mx-auto md:mx-0 mb-8">
              Идеальный подарок для всех, кто любит Apple. Музыка, приложения,
              игры и многое другое.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-apple-blue hover:bg-blue-600 text-white"
              >
                Купить карту
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-apple-blue text-apple-blue hover:bg-apple-blue/5"
              >
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="relative opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-apple-gray/50 rounded-2xl transform rotate-6"></div>
              <img
                src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=600&auto=format&fit=crop&q=80"
                alt="Apple Gift Card"
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
