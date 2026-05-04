import { motion } from 'motion/react';
import { Calculator, Flag, Target, Cloud } from 'lucide-react';

const features = [
  {
    title: "복잡한 원가 구조화",
    description: "판매단가, 변동비, 고정비를 한눈에 정리",
    icon: Calculator,
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    title: "손익분기점(BEP) 실시간 추적",
    description: "흑자 전환 시점을 매일 추적",
    icon: Flag,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50"
  },
  {
    title: "원하는 수익을 위한 시뮬레이션",
    description: "목표 달성을 위한 필요 판매량 분석",
    icon: Target,
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    title: "내 장사 데이터, 안전하게 보관",
    description: "데이터 저장 및 불러오기 기능",
    icon: Cloud,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50"
  }
];

export default function Features() {
  return (
    <section id="특징" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            장사의 기본, 이익 관리를 완벽하게
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            마진 계산기 하나로 복잡한 계산은 끝내고<br className="md:hidden" /> 비즈니스에 집중하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[32px] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
