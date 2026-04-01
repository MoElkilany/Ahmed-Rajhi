import { motion } from 'framer-motion';
import { useState } from 'react';

const contactInfo = [
  { icon: 'call', label: 'الهاتف', value: '+20 100 251 0710', dir: 'ltr', href: 'tel:+201002510710' },
  { icon: 'mail', label: 'البريد', value: 'info@alraghirealestate.com', dir: 'ltr', href: 'mailto:info@alraghirealestate.com' },
  { icon: 'location_on', label: 'الموقع', value: 'الشروق، القاهرة', href: 'https://www.google.com/maps?client=safari&rls=en&oe=UTF-8&um=1&ie=UTF-8&fb=1&gl=eg&sa=X&geocode=KWG1yJcuHVgUMTl93kvyNEiQ&daddr=El+Shorouk,+Cairo+Governorate+4932513' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    purpose: 'شراء عقار',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-24 md:py-32 bg-white" id="contact">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-sm font-semibold tracking-wider rounded-full mb-4"
          >
            تواصل معنا
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            ابدأ <span className="text-gradient">رحلتك العقارية</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-text-muted text-lg"
          >
            جاهز لمناقشة خطوتك التالية؟ تواصل مع مكتبنا للحصول على تقييم سري.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : '_self'}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className="flex items-center gap-4 p-6 rounded-2xl bg-surface-dark border border-border hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">{info.icon}</span>
              </div>
              <div>
                <div className="text-xs text-text-muted uppercase tracking-wider mb-1">{info.label}</div>
                <div className="text-primary font-semibold" dir={info.dir || 'rtl'}>{info.value}</div>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 p-8 md:p-12 rounded-3xl bg-surface-dark border border-border"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-text-muted text-sm mb-2 font-medium">الاسم الكامل</label>
              <input
                className="w-full bg-white border border-border rounded-xl px-5 py-4 text-text focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all"
                placeholder="أدخل اسمك"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-text-muted text-sm mb-2 font-medium">رقم الهاتف</label>
              <input
                className="w-full bg-white border border-border rounded-xl px-5 py-4 text-text focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all"
                placeholder="+20"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-text-muted text-sm mb-2 font-medium">غرض التواصل</label>
            <select
              className="w-full bg-white border border-border rounded-xl px-5 py-4 text-text focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all"
              value={formData.purpose}
              onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
            >
              <option>شراء عقار</option>
              <option>استشارة استثمارية</option>
              <option>بيع عقار</option>
              <option>استفسار آخر</option>
            </select>
          </div>
          <div>
            <label className="block text-text-muted text-sm mb-2 font-medium">الرسالة</label>
            <textarea
              className="w-full bg-white border border-border rounded-xl px-5 py-4 text-text focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all h-32 resize-none"
              placeholder="كيف يمكننا مساعدتك؟"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          <button
            className="w-full py-5 btn-primary text-white font-semibold rounded-xl text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
            type="submit"
          >
            <span>إرسال الرسالة</span>
            <span className="material-symbols-outlined">send</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}