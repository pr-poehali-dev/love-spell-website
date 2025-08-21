import { Badge } from '@/components/ui/badge';

const Footer = () => {
  return (
    <footer className="py-12 ml-20 bg-mystic-dark border-t border-gold/20">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-montserrat font-bold text-gold mb-4">Раиса Ильинская</h3>
            <p className="text-gray-300">Профессиональная помощь в вопросах любовной магии</p>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-white mb-4">Разделы</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#hero" className="hover:text-gold transition-colors">Обо мне</a></li>
              <li><a href="#rituals" className="hover:text-gold transition-colors">Обряды</a></li>
              <li><a href="#faq" className="hover:text-gold transition-colors">Вопросы и ответы</a></li>
              <li><a href="#testimonials" className="hover:text-gold transition-colors">Отзывы</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-white mb-4">Важная информация</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p><Badge variant="outline" className="border-gold text-gold">18+</Badge> Сайт предназначен для совершеннолетних</p>
              <p>Политика конфиденциальности</p>
              <p>Услуги носят консультационный характер</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gold/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Раиса Ильинская. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;