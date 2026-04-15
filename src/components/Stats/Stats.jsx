import { Building2, Users, GraduationCap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import './Stats.css';

const CountUpCustom = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count.toLocaleString('ru-RU').replace(/,/g, ' ')}</span>;
};

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          <div className="stat-card glass-card">
            <div className="stat-icon-wrapper i-1">
              <Users size={32} />
            </div>
            <div className="stat-content">
              <span className="stat-title">Студентов</span>
              <div className="stat-value">
                {inView ? <CountUpCustom end={505240} duration={2.5} /> : '0'}
              </div>
            </div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-icon-wrapper i-2">
              <GraduationCap size={32} />
            </div>
            <div className="stat-content">
              <span className="stat-title">Кадровое обеспечение</span>
              <div className="stat-value">
                {inView ? <CountUpCustom end={47753} duration={2.5} /> : '0'}
              </div>
            </div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-icon-wrapper i-3">
              <Building2 size={32} />
            </div>
            <div className="stat-content">
              <span className="stat-title">Учебных заведений</span>
              <div className="stat-value">
                {inView ? <CountUpCustom end={757} duration={2.5} /> : '0'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
