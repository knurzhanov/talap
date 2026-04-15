import { ArrowRight, Calendar } from 'lucide-react';
import './News.css';

const newsItems = [
  {
    id: 1,
    title: 'Педагогтерге арналған жаңашыл курс!',
    description: '«5С»/«TOLD» құралдарын пайдаланып оқу сабақтарын жоспарлау тақырыбындағы біліктілікті арттыру курсы басталды...',
    date: '31.05.2023',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    title: 'Бизнес пен білім беру процесін интеграциялау үшін өңірлік білім беру-өндірістік кластерін құруға ұсынымдар',
    description: 'Қазақстан Республикасындағы колледждер жаны...',
    date: '24.05.2023',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    title: '"Басты мақсатымыз – тек білім саласын ғана емес, жұмыс берушілер мен бизнес өкілдерін де қамту"',
    description: 'Бүгінгі таңда бас-бастаған құндылық мамандармен қарым-қатынасты нығайтқаннан, экономиканың өсуіне еңбегі сіңген азаматтар болып қалыптасуына жағдай жасау...',
    date: '16.05.2023',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600'
  }
];

const News = () => {
  return (
    <section className="news">
      <div className="container">
        <div className="news-header">
          <h2 className="section-title">Новости</h2>
          <button className="view-all-btn">
            Показать все <ArrowRight size={16} />
          </button>
        </div>

        <div className="news-grid">
          {newsItems.map(item => (
            <div className="news-card glass-card" key={item.id}>
              <div className="news-image-wrapper">
                <img src={item.image} alt={item.title} className="news-image" />
                <div className="news-date-badge">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
              </div>
              <div className="news-content">
                <h3 className="news-title">{item.title}</h3>
                <p className="news-desc">{item.description}</p>
                <div className="news-footer">
                  <span className="read-more">Читать далее <ArrowRight size={14} /></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
