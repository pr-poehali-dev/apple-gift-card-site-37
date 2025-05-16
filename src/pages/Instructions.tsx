
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Instructions = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <Link to="/" className="text-apple-blue hover:underline inline-flex items-center">
              <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
              Назад на главную
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-8 text-center">Инструкция по использованию Apple Gift Card</h1>
          
          <div className="grid gap-6 mb-10">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="w-8 h-8 bg-apple-blue text-white rounded-full flex items-center justify-center mr-3">1</span>
                  Покупка карты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Выберите номинал подарочной карты и оплатите её удобным способом.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="w-8 h-8 bg-apple-blue text-white rounded-full flex items-center justify-center mr-3">2</span>
                  Получение кода
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>После успешной оплаты код активации будет отправлен на указанную вами электронную почту.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="w-8 h-8 bg-apple-blue text-white rounded-full flex items-center justify-center mr-3">3</span>
                  Активация
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Откройте App Store, iTunes Store или Apple Books на вашем устройстве. Внизу найдите "Погасить" и введите полученный код.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button className="bg-apple-blue hover:bg-blue-600 text-white" size="lg" asChild>
              <Link to="/">Приобрести карту</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Instructions;
