import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navigation = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { number: '01', label: 'About', href: '/#about' },
    { number: '02', label: 'Experience', href: '/#experience' },
    { number: '03', label: 'Portfolio', href: '/#work' },
    { number: '04', label: 'Codex', href: '/codex' },
    { number: '05', label: 'Contact', href: '/#contact' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 text-obsidian-100 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-obsidian-900/80 shadow-lg backdrop-blur-xl'
          : 'border-b border-white/5 bg-obsidian-900/55 backdrop-blur-md'
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="flex h-[72px] items-center justify-between py-3">
          <motion.div variants={itemVariants}>
            <Link href="/" className="group relative flex items-center gap-3">
              <div className="absolute -inset-2 rounded-xl bg-default-500/20 opacity-0 blur transition duration-300 group-hover:opacity-100" />
              <div className="relative grid h-11 w-11 place-items-center rounded-xl border border-default-500/30 bg-default-500/10">
                <Image
                  src="/Ntreklogov2.svg"
                  alt="Nighttrek logo"
                  width="34"
                  height="34"
                  className="transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>
          </motion.div>

          <motion.ul className="hidden items-center gap-5 md:flex lg:gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                variants={itemVariants}
                custom={index}
                className="group"
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-obsidian-200 transition-colors duration-300 hover:text-default-400"
                >
                  <span className="text-default-500">{item.number}</span>
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-default-400 to-default-500 transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile Menu Button */}
          <motion.button
            variants={itemVariants}
            className="group relative rounded-lg border border-white/10 bg-white/[0.03] md:hidden"
            onClick={() => setMenu(!menu)}
          >
            <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-default-500/20 to-default-400/20 opacity-0 blur transition duration-300 group-hover:opacity-100" />
            <div className="relative p-2">
              <div className="space-y-1.5">
                <motion.span
                  className="block h-0.5 w-6 bg-default-400 transition-all duration-300"
                  animate={{
                    rotate: menu ? 45 : 0,
                    y: menu ? 6 : 0,
                  }}
                />
                <motion.span
                  className="block h-0.5 w-6 bg-default-400 transition-all duration-300"
                  animate={{
                    opacity: menu ? 0 : 1,
                  }}
                />
                <motion.span
                  className="block h-0.5 w-6 bg-default-400 transition-all duration-300"
                  animate={{
                    rotate: menu ? -45 : 0,
                    y: menu ? -6 : 0,
                  }}
                />
              </div>
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden md:hidden"
            >
              <motion.ul
                className="glass-panel mb-4 space-y-4 rounded-2xl p-5"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
              >
                {navItems.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-obsidian-100 transition-colors duration-300 hover:text-default-400"
                      onClick={() => setMenu(false)}
                    >
                      <span className="text-default-500">{item.number}</span>
                      <span>{item.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navigation;
