import { motion } from 'motion/react';
import { Calculator } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
            <Calculator size={24} />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">마진 계산기</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['특징', '혜택', '모집 안내'].map((item) => (
            <a key={item} href={`#${item}`} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <button 
          onClick={() => {
            const element = document.getElementById('모집 안내');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-sm font-semibold hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-300"
        >
          테스터 신청
        </button>
      </div>
    </header>
  );
}
