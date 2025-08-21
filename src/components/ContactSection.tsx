import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

interface FormData {
  name: string;
  contact: string;
  message: string;
  consent: boolean;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contact: '',
    message: '',
    consent: false
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.consent) {
      alert('Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.');
      setFormData({ name: '', contact: '', message: '', consent: false });
    }
  };

  return (
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
  );
};

export default ContactSection;