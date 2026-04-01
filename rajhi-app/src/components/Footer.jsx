import { motion } from 'framer-motion';

const footerLinks = [
  { href: '#about', label: 'عن راجح' },
  { href: '#companies', label: 'الشركات' },
  { href: '#philosophy', label: 'الفلسفة' },
  { href: '#app', label: 'التطبيق' },
  { href: '#contact', label: 'تواصل' },
];

const socialLinks = [
  { icon: 'chat', href: '#' },
  { icon: 'share', href: '#' },
];

export default function Footer() {
  return (
    <footer className="py-16 bg-primary-dark text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12"
        >
          <div className="flex items-center gap-3">
            <div>
              <div className="text-2xl font-bold">أحمد راجح</div>
              <div className="text-sm text-white/50">للاستثمار العقاري</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                className="text-sm text-white/60 hover:text-accent transition-colors"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-accent hover:text-accent transition-colors"
                href={social.href}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">© 2024 راجح للاستثمار العقاري. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}