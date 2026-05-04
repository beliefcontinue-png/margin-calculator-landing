import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Mesh Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#4F46E5]/10 blur-[100px]" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#7C3AED]/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-[#10B981]/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.2] md:leading-[1.15] mb-6 whitespace-pre-line">
            {'감이 아닌 데이터로,\n남는 돈을 확인하세요.'}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 md:mb-10">
            복잡한 원가 계산과 손익분기점,<br className="md:hidden" /> '마진 계산기'로 한 번에 해결하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <button 
              onClick={() => {
                const element = document.getElementById('모집 안내');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-base md:text-lg font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              무료로 가장 먼저 이익 분석 시작하기
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-indigo-600 font-semibold bg-indigo-50 inline-block px-3 py-1 rounded-[12px] w-fit">
              🔥 선착순 100명 한정, 평생 무료 권한 증정
            </p>
            <p className="text-sm text-slate-500">
              ✨ 현재 1,200명의 사장님이 베타 출시를 기다리고 있습니다.
            </p>
          </div>
        </motion.div>

        {/* Right Mockups */}
        <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
          {/* Left Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 0 }}
            animate={{ opacity: 1, x: -120, rotate: -10, scale: 0.85 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="absolute z-0 w-[240px] h-[500px] bg-white rounded-[3rem] border-[8px] border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="p-4 bg-slate-50 h-full flex flex-col gap-3">
              <div className="h-8 bg-slate-200 rounded-md w-1/2 mb-4" />
              <div className="h-12 bg-white rounded-xl border border-slate-100" />
              <div className="h-12 bg-white rounded-xl border border-slate-100" />
              <div className="h-12 bg-white rounded-xl border border-slate-100" />
              <div className="h-12 bg-white rounded-xl border border-slate-100" />
              <div className="mt-auto h-12 bg-indigo-100 rounded-xl" />
            </div>
          </motion.div>

          {/* Right Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: 0 }}
            animate={{ opacity: 1, x: 120, rotate: 10, scale: 0.85 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="absolute z-0 w-[240px] h-[500px] bg-white rounded-[3rem] border-[8px] border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="p-4 bg-slate-50 h-full flex flex-col gap-4">
              <div className="h-8 bg-slate-200 rounded-md w-1/2 mb-2" />
              <div className="aspect-square rounded-full border-8 border-indigo-500 border-r-emerald-400 border-b-purple-400" />
              <div className="flex-1 bg-white rounded-xl border border-slate-100 mt-4" />
            </div>
          </motion.div>

          {/* Center Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: -20, scale: 1.05 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="absolute z-10 w-[260px] h-[540px] bg-white rounded-[3rem] border-[8px] border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden"
          >
            <div className="p-5 bg-white h-full flex flex-col">
              <div className="h-6 bg-slate-100 rounded w-1/3 mb-6" />
              <div className="h-24 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl mb-6 flex flex-col justify-center p-4">
                <div className="h-4 bg-indigo-200 rounded w-1/2 mb-2" />
                <div className="h-8 bg-indigo-500 rounded w-3/4" />
              </div>
              <div className="flex-1 flex items-end gap-2 pb-4">
                {[40, 60, 45, 80, 65, 90].map((h, i) => (
                  <div key={i} className="flex-1 bg-indigo-100 rounded-t-sm" style={{ height: `${h}%` }}>
                    <div className="w-full bg-indigo-500 rounded-t-sm" style={{ height: `${h * 0.6}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
