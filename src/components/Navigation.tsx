import Icon from '@/components/ui/icon';

const Navigation = () => {
  return (
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
  );
};

export default Navigation;