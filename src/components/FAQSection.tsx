import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
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

  return (
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
  );
};

export default FAQSection;