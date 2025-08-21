import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  const practices = [
    {
      icon: 'Cross',
      title: 'Христианская магия',
      description: 'Основана на работе с архангелами, ангелами, святыми и известными архетипами Пресвятой Девы и Отца Небесного'
    },
    {
      icon: 'Zap',
      title: 'Руническая магия',
      description: 'Использование специальных знаков (рун) для получения информации, предсказаний и воздействия на окружающий мир'
    },
    {
      icon: 'Flame',
      title: 'Магия свечей',
      description: 'Искусство управления жизненными событиями и влияния на окружение посредством работы со свечами'
    },
    {
      icon: 'Infinity',
      title: 'Магия узлов',
      description: 'Магическое направление, связывающее специальные узлы с судьбой и энергиями человека'
    }
  ];

  return (
    <section id="hero" className="min-h-screen ml-20 flex items-center justify-center bg-gradient-to-br from-mystic-dark via-mystic to-mystic-light relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Card */}
          <Card className="bg-mystic-light/50 backdrop-blur-sm border-gold/30 animate-fade-in">
            <CardContent className="p-8 text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gold animate-glow">
                  <img 
                    src="/img/6365bafe-69c0-482e-849e-56ac86ceff9c.jpg" 
                    alt="Раиса Ильинская" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h1 className="text-3xl font-montserrat font-bold text-white mb-2">Раиса Ильинская</h1>
              <p className="text-gold text-xl mb-6 font-montserrat">Ворожея</p>
              <Button className="bg-gold hover:bg-gold-dark text-mystic font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Напишите мне
              </Button>
            </CardContent>
          </Card>

          {/* About */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-gold mb-6">Обо мне</h2>
              <p className="text-gray-200 leading-relaxed text-lg mb-4">
                Магия пришла в мою жизнь рано. С годами я научилась её контролировать и направлять на помощь людям. 
                Моя цель — помочь вам обрести счастье и гармонию в отношениях.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                Моя магия не имеет цены. Благодарность принимаю по желанию. Единство — наша сила.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-montserrat font-semibold text-gold mb-6">Чем я занимаюсь</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {practices.map((practice, index) => (
                  <Card key={index} className="bg-mystic-light/30 border-gold/20 hover:border-gold/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="p-2 bg-gold/20 rounded-lg mr-3">
                          <Icon name={practice.icon as any} size={24} className="text-gold" />
                        </div>
                        <h4 className="font-montserrat font-semibold text-white">{practice.title}</h4>
                      </div>
                      <p className="text-gray-300 text-sm">{practice.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;