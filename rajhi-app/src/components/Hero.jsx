import { motion } from 'framer-motion';
import Rajhilogo from '../assets/Rajhilogo.jpg';
import Barwa from '../assets/Barwa.jpg';

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-surface via-surface-dark to-surface">
      <div className="absolute inset-0 section-pattern"></div>
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-sm font-medium text-primary">الشروق، مصر</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.3] mb-6"
          >
            نحو مستقبل مالي<br />
            <span className="text-gradient">أكثر إشراقاً مع الاستثمار العقاري</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-text-muted max-w-xl mb-8 leading-relaxed"
          >
            نوفر لك أفضل الفرص الاستثمارية في قطاع العقارات بمصر. مع خبرة واسعة ونجاحات متعددة، نساعدك على تحقيق أهدافك المالية من خلال استثمارات عقارية ذكية وآمنة.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            <a className="px-8 py-4 btn-accent text-sm font-semibold rounded-xl inline-flex items-center gap-2" href="#contact">
              ابدأ استثمارك الآن
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_left</span>
            </a>
            <a className="px-8 py-4 border-2 border-primary/20 text-primary text-sm font-semibold rounded-xl hover:bg-primary/5 transition-colors inline-flex items-center gap-2" href="#companies">
              اعرف أكثر عن شركاتنا
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>apartment</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border"
          >
            <div>
              <div className="text-3xl font-bold text-primary">18+</div>
              <div className="text-sm text-text-muted">سنوات خبرة</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-text-muted">عميل سعيد</div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-3xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img alt="شركة الراجحي" className="w-full h-full object-cover" src={Rajhilogo} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary-dark to-transparent">
                  <div className="text-white font-bold">الراجحي للعقارات</div>
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl mt-8">
                <img alt="شركة بروة" className="w-full h-full object-cover" src={Barwa} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary-dark to-transparent">
                  <div className="text-white font-bold">شركة بروة</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}