import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [currentBonus, setCurrentBonus] = useState(150);
  const [currentSpins, setCurrentSpins] = useState(50);
  const [timeLeft, setTimeLeft] = useState(3600);
  const [slotSymbols, setSlotSymbols] = useState(['🎰', '💎', '🍒']);
  const [jackpotAmount, setJackpotAmount] = useState(1234567);
  const [onlineCount, setOnlineCount] = useState(2847);
  const [isSlotSpinning, setIsSlotSpinning] = useState(false);
  const [showJackpot, setShowJackpot] = useState(false);
  const [winnerName, setWinnerName] = useState('');
  const [winAmount, setWinAmount] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());

  const symbols = ['🎰', '💎', '🍒', '🔔', '⭐', '💰', '🎲', '🍀', '💵', '🎯'];
  const winners = [
    { name: 'Алексей К.', amount: '12.45 BTC' },
    { name: 'Мария П.', amount: '8.73 BTC' },
    { name: 'Дмитрий В.', amount: '15.62 BTC' },
    { name: 'Анна С.', amount: '6.89 BTC' },
    { name: 'Игорь Т.', amount: '22.14 BTC' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBonus(prev => {
        const newBonus = prev >= 500 ? 150 : prev + 25;
        return newBonus;
      });
      setCurrentSpins(prev => prev >= 250 ? 50 : prev + 15);
      setJackpotAmount(prev => prev + Math.floor(Math.random() * 100));
      setOnlineCount(prev => prev + Math.floor(Math.random() * 10 - 5));
    }, 2000);

    const timerInterval = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 3600);
    }, 1000);

    const slotInterval = setInterval(() => {
      if (!isSlotSpinning) {
        setSlotSymbols(prev => prev.map(() => symbols[Math.floor(Math.random() * symbols.length)]));
      }
    }, 1500);

    const winnerInterval = setInterval(() => {
      const winner = winners[Math.floor(Math.random() * winners.length)];
      setWinnerName(winner.name);
      setWinAmount(winner.amount);
      setShowJackpot(true);
      setTimeout(() => setShowJackpot(false), 4000);
    }, 8000);

    return () => {
      clearInterval(interval);
      clearInterval(timerInterval);
      clearInterval(slotInterval);
      clearInterval(winnerInterval);
    };
  }, [isSlotSpinning]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setScrollProgress(scrolled);

      const sections = document.querySelectorAll('[data-section]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisibleSections(prev => new Set([...prev, section.getAttribute('data-section')]));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const spinSlot = () => {
    setIsSlotSpinning(true);
    let spinCount = 0;
    const spinInterval = setInterval(() => {
      setSlotSymbols(prev => prev.map(() => symbols[Math.floor(Math.random() * symbols.length)]));
      spinCount++;
      if (spinCount > 20) {
        clearInterval(spinInterval);
        setIsSlotSpinning(false);
        if (Math.random() > 0.7) {
          setSlotSymbols(['💰', '💰', '💰']);
          setShowJackpot(true);
          setTimeout(() => setShowJackpot(false), 3000);
        }
      }
    }, 100);
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString('ru-RU');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-casino-dark via-casino-dark-blue to-casino-dark overflow-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-casino-dark-blue z-50">
        <div 
          className="h-full bg-gradient-to-r from-casino-gold to-casino-purple transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Winner Notification */}
      {showJackpot && (
        <div className="fixed top-20 right-4 bg-gradient-to-r from-casino-gold to-casino-purple p-1 rounded-lg animate-bounce-in z-40">
          <div className="bg-casino-dark rounded-lg p-4 text-center">
            <Icon name="Trophy" size={24} className="text-casino-gold mx-auto mb-2" />
            <p className="text-casino-gold font-bold">{winnerName}</p>
            <p className="text-white text-sm">выиграл {winAmount}!</p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-section="hero">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-casino-gold rounded-full animate-coins opacity-20"></div>
          <div className="absolute top-1/4 right-20 w-16 h-16 bg-casino-purple rounded-full animate-float opacity-30"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-casino-gold rounded-full animate-glow opacity-25"></div>
          <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-casino-purple rounded-full animate-roulette opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Main Title */}
            <h1 className="text-5xl md:text-8xl font-black mb-6 bg-gradient-to-r from-casino-gold via-casino-purple to-casino-gold bg-clip-text text-transparent animate-glow">
              💰 CRYPTO JACKPOT 💰
            </h1>

            {/* Interactive Slot Machine */}
            <div className="bg-gradient-to-r from-casino-gold to-casino-purple p-1 rounded-xl mb-8 animate-neon-pulse">
              <div className="bg-casino-dark rounded-lg p-6">
                <div className="flex justify-center gap-4 mb-4">
                  {slotSymbols.map((symbol, index) => (
                    <div
                      key={index}
                      className={`w-20 h-20 bg-casino-dark-blue rounded-lg flex items-center justify-center text-4xl ${
                        isSlotSpinning ? 'animate-slot-spin' : ''
                      }`}
                    >
                      {symbol}
                    </div>
                  ))}
                </div>
                <Button
                  onClick={spinSlot}
                  disabled={isSlotSpinning}
                  className="bg-casino-gold text-casino-dark hover:bg-casino-gold/90 font-bold px-8 py-3 animate-jackpot"
                >
                  {isSlotSpinning ? 'КРУТИТСЯ...' : 'КРУТИТЬ СЛОТ!'}
                </Button>
              </div>
            </div>

            {/* Live Jackpot Counter */}
            <div className="bg-casino-dark/80 rounded-xl p-6 mb-8 border-2 border-casino-gold animate-glow">
              <div className="text-center">
                <p className="text-casino-gold/80 mb-2">ДЖЕКПОТ СЕЙЧАС:</p>
                <p className="text-4xl md:text-6xl font-black text-casino-gold animate-counter-up">
                  {formatNumber(jackpotAmount)} ₽
                </p>
                <p className="text-casino-gold/60 text-sm mt-2">Увеличивается каждую секунду!</p>
              </div>
            </div>

            {/* Bonus Cards with Timer */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-gradient-to-r from-casino-gold to-casino-purple p-1 animate-pulse-gold">
                <div className="bg-casino-dark rounded-lg p-6 h-full">
                  <div className="text-center">
                    <div className="text-6xl font-black mb-2 text-casino-gold animate-jackpot">
                      {currentBonus}%
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-casino-gold">
                      БОНУС НА ДЕПОЗИТ
                    </h3>
                    <p className="text-casino-gold/80 mb-4">
                      До 5 BTC криптовалютой
                    </p>
                    <div className="bg-casino-dark-blue rounded-lg p-2">
                      <p className="text-casino-gold/60 text-sm">Осталось времени:</p>
                      <p className="text-casino-gold font-mono text-lg">{formatTime(timeLeft)}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-r from-casino-purple to-casino-gold p-1 animate-pulse-gold">
                <div className="bg-casino-dark rounded-lg p-6 h-full">
                  <div className="text-center">
                    <div className="text-6xl font-black mb-2 text-casino-gold animate-jackpot">
                      {currentSpins}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-casino-gold">
                      ФРИСПИНЫ
                    </h3>
                    <p className="text-casino-gold/80 mb-4">
                      Бесплатные вращения
                    </p>
                    <div className="bg-casino-dark-blue rounded-lg p-2">
                      <p className="text-casino-gold/60 text-sm">Онлайн игроков:</p>
                      <p className="text-casino-gold font-mono text-lg">{formatNumber(onlineCount)}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-casino-gold to-casino-purple hover:from-casino-purple hover:to-casino-gold text-casino-dark font-bold text-xl px-12 py-6 transform hover:scale-105 transition-all duration-200 animate-glow"
              >
                🚀 ИГРАТЬ СЕЙЧАС! 🚀
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-casino-gold text-casino-gold hover:bg-casino-gold hover:text-casino-dark font-bold text-xl px-12 py-6 transform hover:scale-105 transition-all duration-200 animate-neon-pulse"
              >
                💎 ЗАБРАТЬ БОНУС! 💎
              </Button>
            </div>

            {/* Crypto Accepted */}
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-casino-gold/80 animate-float">
                <Icon name="Bitcoin" size={28} />
                <span className="font-bold">BTC</span>
              </div>
              <div className="flex items-center gap-2 text-casino-gold/80 animate-float">
                <Icon name="Coins" size={28} />
                <span className="font-bold">ETH</span>
              </div>
              <div className="flex items-center gap-2 text-casino-gold/80 animate-float">
                <Icon name="DollarSign" size={28} />
                <span className="font-bold">USDT</span>
              </div>
              <div className="flex items-center gap-2 text-casino-gold/80 animate-float">
                <Icon name="Zap" size={28} />
                <span className="font-bold">LTC</span>
              </div>
              <div className="flex items-center gap-2 text-casino-gold/80 animate-float">
                <Icon name="Wallet" size={28} />
                <span className="font-bold">XRP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Winners Section */}
      <section className="py-20 bg-casino-dark-blue/50" data-section="winners">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-casino-gold animate-glow">
              🏆 ПОСЛЕДНИЕ ВЫИГРЫШИ 🏆
            </h2>
            <p className="text-xl text-casino-gold/80 max-w-2xl mx-auto">
              Реальные игроки - реальные выигрыши каждую минуту!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {winners.map((winner, index) => (
              <Card 
                key={index} 
                className={`bg-casino-dark/80 border-casino-gold/30 hover:border-casino-gold transition-all duration-300 ${
                  visibleSections.has('winners') ? 'animate-bounce-in' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-casino-gold to-casino-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Trophy" size={32} className="text-casino-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-casino-gold mb-2">{winner.name}</h3>
                  <p className="text-2xl font-black text-casino-gold animate-jackpot">{winner.amount}</p>
                  <p className="text-casino-gold/60 text-sm mt-2">только что выиграл!</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-20" data-section="games">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-casino-gold animate-glow">
              🎮 ИГРЫ 🎮
            </h2>
            <p className="text-xl text-casino-gold/80 max-w-2xl mx-auto">
              Более 500 игр от лучших провайдеров мира
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Слоты', emoji: '🎰', count: '500+' },
              { name: 'Рулетка', emoji: '🎲', count: '10+' },
              { name: 'Покер', emoji: '🃏', count: '20+' },
              { name: 'Краш', emoji: '🚀', count: '5+' },
              { name: 'Блэкджек', emoji: '🎯', count: '15+' },
              { name: 'Баккара', emoji: '💎', count: '8+' },
              { name: 'Кено', emoji: '🎱', count: '12+' },
              { name: 'Дайс', emoji: '🎲', count: '6+' }
            ].map((game, index) => (
              <Card 
                key={index} 
                className={`bg-casino-dark/80 border-casino-gold/30 hover:border-casino-gold hover:bg-casino-dark/90 transition-all duration-300 transform hover:scale-105 ${
                  visibleSections.has('games') ? 'animate-bounce-in' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4 animate-float">{game.emoji}</div>
                  <h3 className="text-lg font-bold mb-2 text-casino-gold">{game.name}</h3>
                  <Badge className="bg-casino-purple text-white">{game.count}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 bg-casino-dark-blue/50" data-section="register">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-r from-casino-gold to-casino-purple p-1 animate-neon-pulse">
              <div className="bg-casino-dark rounded-lg p-8">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold mb-4 text-casino-gold animate-glow">
                    🎯 НАЧАТЬ ИГРАТЬ 🎯
                  </h2>
                  <p className="text-casino-gold/80 text-lg">
                    Регистрация займет всего 30 секунд
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-casino-dark-blue/50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-casino-gold animate-counter-up">
                      {currentBonus}%
                    </div>
                    <p className="text-casino-gold/80 text-sm">Бонус на депозит</p>
                  </div>
                  <div className="bg-casino-dark-blue/50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-casino-gold animate-counter-up">
                      {currentSpins}
                    </div>
                    <p className="text-casino-gold/80 text-sm">Фриспины</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-casino-gold">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com"
                      className="bg-casino-dark-blue border-casino-gold/30 text-casino-gold placeholder-casino-gold/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-casino-gold">Пароль</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="••••••••"
                      className="bg-casino-dark-blue border-casino-gold/30 text-casino-gold placeholder-casino-gold/50"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-casino-gold to-casino-purple hover:from-casino-purple hover:to-casino-gold text-casino-dark font-bold text-xl py-6 animate-jackpot">
                    💰 ПОЛУЧИТЬ БОНУС 500% 💰
                  </Button>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-casino-gold/60 text-sm mb-4">
                    Уже есть аккаунт? <span className="text-casino-gold cursor-pointer hover:underline">Войти</span>
                  </p>
                  <div className="flex justify-center gap-4">
                    <Badge className="bg-casino-gold text-casino-dark">Мгновенные выплаты</Badge>
                    <Badge className="bg-casino-purple text-white">Без комиссий</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20" data-section="trust">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-casino-gold animate-glow">
              🛡️ ПОЧЕМУ МЫ? 🛡️
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Shield', title: 'Лицензия', desc: 'Официальная лицензия Кюрасао' },
              { icon: 'Zap', title: 'Быстро', desc: 'Выплаты за 5 минут' },
              { icon: 'Lock', title: 'Безопасно', desc: 'SSL шифрование' },
              { icon: 'Users', title: 'Поддержка', desc: '24/7 онлайн чат' }
            ].map((item, index) => (
              <Card 
                key={index} 
                className={`bg-casino-dark/80 border-casino-gold/30 hover:border-casino-gold transition-all duration-300 text-center ${
                  visibleSections.has('trust') ? 'animate-bounce-in' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <Icon name={item.icon} size={48} className="text-casino-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-casino-gold mb-2">{item.title}</h3>
                  <p className="text-casino-gold/80">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-casino-dark py-12 border-t border-casino-gold/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-casino-gold animate-glow">
              💰 CRYPTO JACKPOT 💰
            </h3>
            <p className="text-casino-gold/80 mb-6">
              Лучшее казино для игры с криптовалютами
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <Icon name="Bitcoin" size={32} className="text-casino-gold/60" />
              <Icon name="Coins" size={32} className="text-casino-gold/60" />
              <Icon name="DollarSign" size={32} className="text-casino-gold/60" />
              <Icon name="Zap" size={32} className="text-casino-gold/60" />
            </div>
            <p className="text-casino-gold/60 text-sm">
              © 2024 Crypto Jackpot. Играйте ответственно. 18+
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}