import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBonus, setCurrentBonus] = useState(500);
  const [spinCount, setSpinCount] = useState(250);

  useEffect(() => {
    setIsVisible(true);
    
    const bonusInterval = setInterval(() => {
      setCurrentBonus(prev => (prev >= 500 ? 150 : prev + 50));
    }, 2000);

    const spinInterval = setInterval(() => {
      setSpinCount(prev => (prev >= 250 ? 50 : prev + 25));
    }, 3000);

    return () => {
      clearInterval(bonusInterval);
      clearInterval(spinInterval);
    };
  }, []);

  const games = [
    { name: 'Слоты', icon: 'Dices', count: '500+' },
    { name: 'Рулетка', icon: 'Circle', count: '10+' },
    { name: 'Блэкджек', icon: 'Spade', count: '15+' },
    { name: 'Покер', icon: 'Heart', count: '20+' },
    { name: 'Краш', icon: 'TrendingUp', count: '5+' },
    { name: 'Баккара', icon: 'Diamond', count: '8+' }
  ];

  const bonuses = [
    { 
      title: 'Первый депозит', 
      bonus: '500%', 
      description: 'До 5 BTC + 250 фриспинов',
      color: 'bg-gradient-to-r from-casino-gold to-casino-purple'
    },
    { 
      title: 'Второй депозит', 
      bonus: '300%', 
      description: 'До 3 BTC + 150 фриспинов',
      color: 'bg-gradient-to-r from-casino-purple to-casino-gold'
    },
    { 
      title: 'Третий депозит', 
      bonus: '200%', 
      description: 'До 2 BTC + 100 фриспинов',
      color: 'bg-gradient-to-r from-casino-gold to-casino-purple'
    }
  ];

  const testimonials = [
    {
      name: 'Алексей К.',
      text: 'Выиграл 12 BTC на слотах! Быстрые выплаты, крутая поддержка.',
      amount: '12 BTC',
      game: 'Слоты'
    },
    {
      name: 'Мария В.',
      text: 'Лучшее казино для крипто. Бонусы просто огонь! Рекомендую всем.',
      amount: '8.5 BTC',
      game: 'Рулетка'
    },
    {
      name: 'Дмитрий П.',
      text: 'Играю уже год, всегда честная игра. Поддержка отвечает мгновенно.',
      amount: '15 BTC',
      game: 'Покер'
    }
  ];

  const faqItems = [
    {
      question: 'Как получить бонус за депозит?',
      answer: 'Просто пополните счет криптовалютой и бонус начислится автоматически! Бонус до 500% + 250 фриспинов на первый депозит.'
    },
    {
      question: 'Какие криптовалюты принимаются?',
      answer: 'Мы принимаем все популярные криптовалюты: Bitcoin, Ethereum, Litecoin, Dogecoin, USDT, USDC и многие другие.'
    },
    {
      question: 'Как быстро происходят выплаты?',
      answer: 'Выплаты обрабатываются моментально! Средства поступают на ваш кошелек в течение 5-10 минут.'
    },
    {
      question: 'Есть ли лимиты на депозиты?',
      answer: 'Минимальный депозит - 0.001 BTC. Максимальных лимитов нет - играйте на любые суммы!'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-casino-dark via-casino-dark-blue to-casino-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-casino-gold rounded-full animate-float opacity-20"></div>
          <div className="absolute top-1/4 right-20 w-16 h-16 bg-casino-purple rounded-full animate-pulse-gold opacity-30"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-casino-gold rounded-full animate-float opacity-25"></div>
          <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-casino-purple rounded-full animate-spin-slow opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="font-orbitron text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-casino-gold via-casino-purple to-casino-gold bg-clip-text text-transparent animate-pulse-gold">
                CRYPTO CASINO
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-casino-gold/90 font-rubik">
                Будущее азартных игр уже здесь! 🚀
              </p>
            </div>

            {/* Bonus Cards */}
            <div className={`grid md:grid-cols-2 gap-6 mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Card className="bg-gradient-to-r from-casino-gold to-casino-purple p-1 animate-pulse-gold">
                <div className="bg-casino-dark rounded-lg p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <Icon name="Coins" size={48} className="text-casino-gold" />
                    <Badge className="bg-casino-gold text-casino-dark font-bold text-lg px-4 py-2">
                      {currentBonus}%
                    </Badge>
                  </div>
                  <h3 className="font-orbitron text-2xl font-bold mb-2 text-casino-gold">
                    БОНУС НА ДЕПОЗИТ
                  </h3>
                  <p className="text-casino-gold/80">
                    До 5 BTC + бесплатные спины
                  </p>
                </div>
              </Card>

              <Card className="bg-gradient-to-r from-casino-purple to-casino-gold p-1 animate-pulse-gold">
                <div className="bg-casino-dark rounded-lg p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <Icon name="Sparkles" size={48} className="text-casino-gold" />
                    <Badge className="bg-casino-purple text-white font-bold text-lg px-4 py-2">
                      {spinCount}
                    </Badge>
                  </div>
                  <h3 className="font-orbitron text-2xl font-bold mb-2 text-casino-gold">
                    ФРИСПИНЫ
                  </h3>
                  <p className="text-casino-gold/80">
                    Бесплатные вращения на популярных слотах
                  </p>
                </div>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-casino-gold to-casino-purple hover:from-casino-purple hover:to-casino-gold text-casino-dark font-bold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
              >
                <Icon name="Play" size={20} className="mr-2" />
                ИГРАТЬ СЕЙЧАС
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-casino-gold text-casino-gold hover:bg-casino-gold hover:text-casino-dark font-bold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
              >
                <Icon name="Gift" size={20} className="mr-2" />
                ПОЛУЧИТЬ БОНУС
              </Button>
            </div>

            {/* Crypto Icons */}
            <div className={`flex justify-center gap-8 mt-12 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center gap-2 text-casino-gold/70">
                <Icon name="Bitcoin" size={24} />
                <span>BTC</span>
              </div>
              <div className="flex items-center gap-2 text-casino-gold/70">
                <Icon name="Coins" size={24} />
                <span>ETH</span>
              </div>
              <div className="flex items-center gap-2 text-casino-gold/70">
                <Icon name="DollarSign" size={24} />
                <span>USDT</span>
              </div>
              <div className="flex items-center gap-2 text-casino-gold/70">
                <Icon name="Zap" size={24} />
                <span>LTC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-20 bg-casino-dark-blue/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-casino-gold">
              ИГРЫ
            </h2>
            <p className="text-xl text-casino-gold/80 max-w-2xl mx-auto">
              Более 500 игр от лучших провайдеров мира
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {games.map((game, index) => (
              <Card key={index} className="bg-casino-dark/80 border-casino-gold/30 hover:border-casino-gold hover:bg-casino-dark/90 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Icon name={game.icon} size={48} className="text-casino-gold mx-auto mb-4" />
                  <h3 className="font-orbitron text-lg font-bold mb-2 text-casino-gold">
                    {game.name}
                  </h3>
                  <Badge className="bg-casino-purple text-white">
                    {game.count}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-casino-gold">
              БОНУСЫ
            </h2>
            <p className="text-xl text-casino-gold/80 max-w-2xl mx-auto">
              Щедрые бонусы за депозиты криптовалютой
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bonuses.map((bonus, index) => (
              <Card key={index} className={`${bonus.color} p-1 transform hover:scale-105 transition-all duration-300`}>
                <div className="bg-casino-dark rounded-lg p-8 h-full">
                  <div className="text-center">
                    <h3 className="font-orbitron text-2xl font-bold mb-4 text-casino-gold">
                      {bonus.title}
                    </h3>
                    <div className="text-6xl font-black mb-4 text-casino-gold">
                      {bonus.bonus}
                    </div>
                    <p className="text-casino-gold/80 mb-6">
                      {bonus.description}
                    </p>
                    <Button className="bg-casino-gold text-casino-dark hover:bg-casino-gold/90 font-bold w-full">
                      Получить бонус
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-casino-dark-blue/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-casino-gold">
              ОТЗЫВЫ
            </h2>
            <p className="text-xl text-casino-gold/80 max-w-2xl mx-auto">
              Что говорят наши игроки
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-casino-dark/80 border-casino-gold/30 hover:border-casino-gold transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Icon name="Star" size={20} className="text-casino-gold mr-1" />
                    <Icon name="Star" size={20} className="text-casino-gold mr-1" />
                    <Icon name="Star" size={20} className="text-casino-gold mr-1" />
                    <Icon name="Star" size={20} className="text-casino-gold mr-1" />
                    <Icon name="Star" size={20} className="text-casino-gold mr-1" />
                  </div>
                  <p className="text-casino-gold/80 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-casino-gold">{testimonial.name}</p>
                      <p className="text-sm text-casino-gold/60">{testimonial.game}</p>
                    </div>
                    <Badge className="bg-casino-purple text-white">
                      {testimonial.amount}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-casino-gold">
              FAQ
            </h2>
            <p className="text-xl text-casino-gold/80 max-w-2xl mx-auto">
              Часто задаваемые вопросы
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-casino-gold/30">
                  <AccordionTrigger className="text-casino-gold hover:text-casino-gold/80 font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-casino-gold/80">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Registration/Login Section */}
      <section className="py-20 bg-casino-dark-blue/50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="bg-casino-dark/90 border-casino-gold/30">
              <CardHeader className="text-center">
                <CardTitle className="font-orbitron text-3xl text-casino-gold">
                  НАЧАТЬ ИГРАТЬ
                </CardTitle>
                <CardDescription className="text-casino-gold/80">
                  Регистрация займет всего 30 секунд
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-casino-gold">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com"
                    className="bg-casino-dark-blue border-casino-gold/30 text-casino-gold"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-casino-gold">Пароль</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••"
                    className="bg-casino-dark-blue border-casino-gold/30 text-casino-gold"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-casino-gold to-casino-purple hover:from-casino-purple hover:to-casino-gold text-casino-dark font-bold text-lg py-6">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  РЕГИСТРАЦИЯ
                </Button>
                <p className="text-center text-casino-gold/60 text-sm">
                  Уже есть аккаунт? <span className="text-casino-gold cursor-pointer hover:underline">Войти</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-casino-dark py-12 border-t border-casino-gold/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-orbitron text-2xl font-bold mb-4 text-casino-gold">
                CRYPTO CASINO
              </h3>
              <p className="text-casino-gold/80">
                Лучшее казино для игры с криптовалютами
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-casino-gold">Игры</h4>
              <ul className="space-y-2 text-casino-gold/80">
                <li>Слоты</li>
                <li>Рулетка</li>
                <li>Блэкджек</li>
                <li>Покер</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-casino-gold">Поддержка</h4>
              <ul className="space-y-2 text-casino-gold/80">
                <li>FAQ</li>
                <li>Чат 24/7</li>
                <li>Telegram</li>
                <li>Email</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-casino-gold">Криптовалюты</h4>
              <ul className="space-y-2 text-casino-gold/80">
                <li>Bitcoin</li>
                <li>Ethereum</li>
                <li>Litecoin</li>
                <li>USDT</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-casino-gold/30 mt-8 pt-8 text-center text-casino-gold/60">
            <p>© 2024 Crypto Casino. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}