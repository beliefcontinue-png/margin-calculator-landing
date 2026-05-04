import { motion } from 'motion/react';

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
            이번 달 배달앱에서 분명 1천만 원이나 팔았는데,<br className="hidden md:block" />
            <span className="text-[#F43F5E]">내 통장에는 왜 100만 원도 안 남았을까요?</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            매출이 아무리 높아도, 배달비 떼고, 수수료 떼고, 세금 떼면...<br className="md:hidden" />
            사장님, <strong>'진짜 내 수입'</strong>은 얼만지 정확하게 알고 계신가요?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
