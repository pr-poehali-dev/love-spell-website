import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const RitualsSection = () => {
  const rituals = [
    {
      icon: 'Heart',
      title: 'Приворот на жену',
      description: 'Обряд для укрепления отношений в браке'
    },
    {
      icon: 'Users',
      title: 'Приворот на мужа',
      description: 'Ритуал для привлечения внимания супруга'
    },
    {
      icon: 'Sparkles',
      title: 'Обряд на внушение любви',
      description: 'Мягкое воздействие для пробуждения чувств'
    },
    {
      icon: 'Sun',
      title: 'Обряд на снятие одиночества',
      description: 'Помощь в обретении спутника жизни'
    },
    {
      icon: 'Moon',
      title: 'Лунный приворот',
      description: 'Ритуал, проводимый в особые лунные фазы'
    },
    {
      icon: 'Star',
      title: 'Обряд возвращения любимого',
      description: 'Восстановление разорванных отношений'
    }
  ];

  return (
    <section id="rituals" className="py-20 ml-20 bg-mystic-dark">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-montserrat font-bold text-center text-gold mb-12">
          Обряды, которые я практикую
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rituals.map((ritual, index) => (
            <Card key={index} className="bg-mystic-light/40 border-gold/20 hover:border-gold/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="p-4 bg-gold/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                  <Icon name={ritual.icon as any} size={32} className="text-gold" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-white mb-3">{ritual.title}</h3>
                <p className="text-gray-300">{ritual.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-mystic">
            <Icon name="Plus" size={20} className="mr-2" />
            Показать ещё обряды
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RitualsSection;