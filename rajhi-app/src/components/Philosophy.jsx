import { motion } from 'framer-motion';

const principles = [
  {
    icon: 'visibility',
    title: 'شفافية مطلقة',
    description: 'نكشف لك كل التفاصيل - من اتجاهات السوق إلى المخاطر الكامنة. لأن ثقتكم هي أساس شراكتنا.',
    delay: 0.1,
  },
  {
    icon: 'insights',
    title: 'رؤية استراتيجية',
    description: 'نستخدم بيانات السوق الدقيقة لتحديد مناطق النمو المرتفع قبل أن يصلها الجميع.',
    delay: 0.2,
  },
  {
    icon: 'account_balance',
    title: 'قيمة مستدامة',
    description: 'نركز على الندرة المعمارية والموقع لضمان نمو أصولكم عبر العقود، وليس المواسم.',
    delay: 0.3,
  },
];

export default function Philosophy() {
  return (
    <section className="py-24 md:py-32 bg-primary-dark text-white relative overflow-hidden" id="philosophy">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #c9a227 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-accent/20 text-accent text-sm font-semibold tracking-wider rounded-full mb-4"
          >
            فلسفتنا
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            لماذا تختار <span className="text-accent">الراجحي</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            نؤمن أن الاستثمار العقاري الناجح يتطلب أكثر من رأس المال - يحتاج رؤية استراتيجية وشفافية تامة.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl text-accent" style={{ fontSize: '32px' }}>
                  {item.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}