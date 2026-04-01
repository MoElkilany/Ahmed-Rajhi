import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'عن أحمد راجح' },
    { href: '#companies', label: 'عن شركات' },
    { href: '#philosophy', label: 'الفلسفة' },
    { href: '#app', label: 'التطبيق' },
    { href: '#contact', label: 'تواصل' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <div className="text-2xl font-bold text-primary">أحمد راجح</div>
            <div className="text-xs text-text-muted">المدير التنفيذي</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            className="hidden sm:flex items-center px-4 py-2.5 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-colors"
            href="tel:+201XX"
          >
            <span className="material-symbols-outlined ml-2" style={{ fontSize: '18px' }}>call</span>
            اتصل بنا
          </a>
          <a
            className="px-5 py-2.5 text-sm font-semibold btn-accent rounded-lg"
            href="https://wa.me/yourlink"
          >
            واتساب
          </a>
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-white"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  className="text-sm font-medium text-text-muted hover:text-primary transition-colors py-2"
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors py-2"
                href="#app"
                onClick={() => setIsOpen(false)}
              >
                التطبيق
              </a>
              <a
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors py-2"
                href="tel:+201XX"
              >
                اتصل بنا
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}