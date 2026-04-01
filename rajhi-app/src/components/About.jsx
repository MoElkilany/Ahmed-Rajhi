import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 md:py-32 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl"></div>
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
              <img className="w-full h-full object-cover" src="/src/assets/aboutRajhiImage.jpeg" alt="أحمد راجح" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent"></div>
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-sm font-semibold tracking-wider rounded-full mb-6"
            >
              عن أحمد راجح
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-primary mb-6"
            >
              شريكك في <span className="text-gradient">الاستثمار العقاري</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-5 text-text-muted leading-relaxed"
            >
              <p>أحمد راجح هو المدير التنفيذي لشركة الراجحي للمشاريع العمرانية، يتمتع بخبرة تزيد عن 18 عاماً في سوق العقارات المصري.</p>
              <p>حاصل على درجة <span className="font-bold text-primary">ماجستير إدارة الأعمال (MBA)</span> في الإدارة الاستراتيجية، يجمع بين الحدس الاستراتيجي والدقة الأكاديمية لضمان أفضل العوائد لعملائه.</p>
              <p>يلعب دوراً محورياً في تطوير وإدارة المشاريع العقارية والتجارية في منطقة الشروق ومصر.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              <div className="p-4 rounded-xl bg-surface-dark border border-border">
                <div className="text-2xl font-bold text-primary">18+</div>
                <div className="text-sm text-text-muted">سنة خبرة</div>
              </div>
              <div className="p-4 rounded-xl bg-surface-dark border border-border">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-text-muted">وحدة مباعة</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-2xl bg-primary-dark text-white"
            >
              <blockquote className="text-lg leading-relaxed">
                "دورنا هو اختيار الفرص التي تتجاوز السوق المباشر، لضمان أن يصبح كل استثمار ركيزة من ركائز الثروة المتوارثة لعملائنا."
              </blockquote>
              <div className="mt-4 text-accent font-semibold">— أحمد راجح</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}