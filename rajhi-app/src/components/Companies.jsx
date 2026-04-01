import { motion } from 'framer-motion';

const companies = [
  {
    logo: '/src/assets/Rajhilogo.jpg',
    title: 'شركة الراجحي للمشاريع العمرانية',
    description: 'تعمل في مجال التطوير العقاري والمششاريع العمرانية، تهتم ببناء وإدارة المشاريع السكنية والتجارية، ولديها خبرة في تنفيذ مشاريع عمرانية متكاملة.',
    delay: 0.1,
  },
  {
    logo: '/src/assets/Barwa.jpg',
    title: 'شركة بروة للمشاريع التجارية',
    description: 'تعمل في مجال المشروعات التجارية والاستثمارية، تركز على تطوير المولات والمباني التجارية، تهدف إلى تقديم حلول استثمارية وتجارية حديثة.',
    delay: 0.2,
  },
];

export default function Companies() {
  return (
    <section className="py-24 md:py-32 bg-surface-dark" id="companies">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-sm font-semibold tracking-wider rounded-full mb-4"
          >
            شركاتنا
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            عن <span className="text-gradient">شركات</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            أحمد راجح شريك في أكثر من شركة رائدة في مجال التطوير العقاري والتجاري، حيث يلعب دوراً محورياً في تطوير وإدارة الأعمال العقارية والاستثمارية.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: company.delay }}
              viewport={{ once: true }}
              className="fade-up p-8 rounded-2xl bg-white border border-border card-hover"
            >
              <div className="w-24 h-24 rounded-xl flex items-center justify-center mb-6 bg-surface-dark p-2">
                <img 
                  src={company.logo} 
                  alt={company.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{company.title}</h3>
              <p className="text-text-muted leading-relaxed">{company.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}