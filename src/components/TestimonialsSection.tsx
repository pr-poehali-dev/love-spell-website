import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  name: string;
  city: string;
  text: string;
}

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
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
  );
};

export default TestimonialsSection;