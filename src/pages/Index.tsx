import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
    consent: false
  });

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

  const faqs = [
    {
      question: 'Как я могу связаться с вами?',
      answer: 'Вы можете выбрать удобный способ связи, нажав на кнопку "Напишите мне" или заполнив форму обратной связи внизу страницы.'
    },
    {
      question: 'Как я могу вас отблагодарить?',
      answer: 'Поблагодарить можете так, как посчитаете нужным, и только при желании. Моя помощь бескорыстна.'
    },
    {
      question: 'Вы практикуете порчу?',
      answer: 'Нет, порча не практикуется. Это разрушительная сатанинская практика, которая противоречит моим принципам.'
    },
    {
      question: 'Вы можете погадать на отношения?',
      answer: 'Я не занимаюсь гаданиями. Моя цель — практическая помощь через обрядную работу.'
    },
    {
      question: 'Сколько стоят ваши услуги?',
      answer: 'Магия не имеет цены. Не советую обращаться к магам, которые назначают фиксированную стоимость своих услуг.'
    },
    {
      question: 'Со скольки лет вы принимаете клиентов?',
      answer: 'Принимаю только совершеннолетних клиентов — с 18 лет.'
    },
    {
      question: 'Чем конкретно вы занимаетесь?',
      answer: 'Практической обрядной работой. Я не занимаюсь гаданиями, а помогаю решать жизненные ситуации через магические практики.'
    },
    {
      question: 'Есть ли религиозные ограничения?',
      answer: 'Мои методы универсальны и подходят для людей любой религиозной принадлежности.'
    },
    {
      question: 'Обряды не навредят мне или моей семье?',
      answer: 'Все мои обряды абсолютно безопасны. Я ответственно отношусь к своей работе и никогда не причиню вред.'
    }
  ];

  const testimonials = [
    {
      name: 'Дарья',
      city: 'Новосибирск',
      text: 'Обратилась к Раисе с проблемой в отношениях. Муж стал холодным, почти не разговаривал. После проведённого обряда всё изменилось кардинально. Он снова стал внимательным и заботливым. Благодарю от всего сердца!'
    },
    {
      name: 'Валерия',
      city: 'Пермь',
      text: 'Долгое время была одинока, никак не могла встретить подходящего человека. Раиса провела обряд на снятие одиночества. Через месяц познакомилась с удивительным мужчиной, теперь мы вместе уже год!'
    },
    {
      name: 'Ольга',
      city: 'Иркутск',
      text: 'Хочу поблагодарить Раису за её работу. Она помогла вернуть любимого человека. Мы расстались почти на полгода, а теперь планируем свадьбу. Её методы действительно работают!'
    },
    {
      name: 'Наталья',
      city: 'Санкт-Петербург',
      text: 'Раиса — настоящий профессионал своего дела. Помогла наладить отношения с мужем после серьёзного кризиса. Сейчас в нашей семье царит гармония и взаимопонимание.'
    },
    {
      name: 'Андрей',
      city: 'Волгоград',
      text: 'Скептически относился к подобным вещам, но жена убедила обратиться. Результат превзошёл все ожидания. Раиса помогла вернуть страсть в наши отношения. Рекомендую!'
    }
  ];

  const advantages = [
    {
      icon: 'Zap',
      title: 'Эффект виден сразу',
      description: 'Результат наступает быстро, изменения заметны в короткие сроки'
    },
    {
      icon: 'Shield',
      title: 'Без последствий',
      description: 'Обряды безвредны и не оставляют негативного воздействия'
    },
    {
      icon: 'Gift',
      title: 'Оплата по желанию',
      description: 'Услуги бесплатны, благодарность по вашему усмотрению'
    },
    {
      icon: 'Lock',
      title: 'Конфиденциально',
      description: 'Ценю личное пространство и сохраняю полную анонимность'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.consent) {
      alert('Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.');
      setFormData({ name: '', contact: '', message: '', consent: false });
    }
  };

  return (
    <div className="min-h-screen bg-mystic text-white font-open">
      {/* Navigation */}
      <nav className="fixed left-0 top-0 h-full w-20 bg-mystic-light/90 backdrop-blur-sm border-r border-gold/20 z-50 flex flex-col items-center py-8">
        <div className="flex flex-col gap-8">
          <a href="#hero" className="p-3 rounded-lg hover:bg-gold/20 transition-colors group">
            <Icon name="User" size={24} className="text-gold group-hover:text-white" />
          </a>
          <a href="#rituals" className="p-3 rounded-lg hover:bg-gold/20 transition-colors group">
            <Icon name="Sparkles" size={24} className="text-gold/70 group-hover:text-gold" />
          </a>
          <a href="#faq" className="p-3 rounded-lg hover:bg-gold/20 transition-colors group">
            <Icon name="HelpCircle" size={24} className="text-gold/70 group-hover:text-gold" />
          </a>
          <a href="#testimonials" className="p-3 rounded-lg hover:bg-gold/20 transition-colors group">
            <Icon name="MessageCircle" size={24} className="text-gold/70 group-hover:text-gold" />
          </a>
          <a href="#contact" className="p-3 rounded-lg hover:bg-gold/20 transition-colors group">
            <Icon name="Mail" size={24} className="text-gold/70 group-hover:text-gold" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Rituals Section */}
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

      {/* FAQ Section */}
      <section id="faq" className="py-20 ml-20 bg-mystic">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-montserrat font-bold text-center text-gold mb-12">
            Вопросы и ответы
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gold/20 rounded-lg bg-mystic-light/20">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline text-left text-white font-montserrat hover:text-gold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 ml-20 bg-mystic-dark">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-montserrat font-bold text-center text-gold mb-12">
            Отзывы и благодарности
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-mystic-light/40 border-gold/30 min-h-[300px] flex items-center">
              <CardContent className="p-8 text-center w-full">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gold">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </span>
                  </div>
                </div>
                
                <blockquote className="text-lg text-gray-200 leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div className="text-gold font-montserrat font-semibold">
                  {testimonials[currentTestimonial].name}
                  <span className="text-gray-400 ml-2">({testimonials[currentTestimonial].city})</span>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-gold' : 'bg-gold/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 ml-20 bg-mystic">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-montserrat font-bold text-center text-gold mb-12">
            Связаться со мной
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Card */}
            <Card className="bg-mystic-light/40 border-gold/30">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img 
                      src="/img/6365bafe-69c0-482e-849e-56ac86ceff9c.jpg" 
                      alt="Раиса" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold text-white mb-4">
                    Оставьте сообщение
                  </h3>
                  <Button className="bg-gold hover:bg-gold-dark text-mystic font-semibold">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Напишите мне
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="text-center">
                      <div className="p-3 bg-gold/20 rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-3">
                        <Icon name={advantage.icon as any} size={24} className="text-gold" />
                      </div>
                      <h4 className="font-montserrat font-semibold text-white mb-2">{advantage.title}</h4>
                      <p className="text-gray-300 text-sm">{advantage.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="bg-mystic-light/40 border-gold/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-montserrat font-semibold text-gold mb-6">Форма обратной связи</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">Имя *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-mystic-dark/50 border-gold/30 text-white placeholder:text-gray-400"
                      placeholder="Введите ваше имя"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="contact" className="text-white mb-2 block">Контакт (телефон/E-mail/WhatsApp) *</Label>
                    <Input
                      id="contact"
                      value={formData.contact}
                      onChange={(e) => setFormData({...formData, contact: e.target.value})}
                      className="bg-mystic-dark/50 border-gold/30 text-white placeholder:text-gray-400"
                      placeholder="Укажите способ связи"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-white mb-2 block">Сообщение *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-mystic-dark/50 border-gold/30 text-white placeholder:text-gray-400 min-h-[120px]"
                      placeholder="Опишите вашу ситуацию..."
                      required
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData({...formData, consent: checked as boolean})}
                    />
                    <Label htmlFor="consent" className="text-sm text-gray-300">
                      Согласен(а) с политикой конфиденциальности и обработкой персональных данных
                    </Label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={!formData.consent}
                    className="w-full bg-gold hover:bg-gold-dark text-mystic font-semibold py-3"
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;