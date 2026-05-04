import { motion } from 'motion/react';
import { FileSpreadsheet, Scale, TrendingUp } from 'lucide-react';

export default function DataShowcase() {
  return (
    <section id="혜택" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Visual: Geometric Flowchart */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square max-w-md mx-auto lg:max-w-none w-full flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-slate-50 rounded-[40px] -z-10 transform rotate-3" />
          
          <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-xl">
            <defs>
              <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
              <linearGradient id="costGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#F43F5E" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Sales Circle */}
            <circle cx="200" cy="200" r="120" fill="url(#flowGrad)" fillOpacity="0.05" />
            
            {/* Inputs */}
            <g transform="translate(40, 100)">
              <rect x="0" y="0" width="100" height="40" rx="20" fill="white" stroke="#E2E8F0" strokeWidth="2" />
              <text x="50" y="25" textAnchor="middle" fill="#475569" fontSize="14" fontWeight="600" fontFamily="sans-serif">판매단가</text>
            </g>
            <g transform="translate(40, 260)">
              <rect x="0" y="0" width="100" height="40" rx="20" fill="white" stroke="#E2E8F0" strokeWidth="2" />
              <text x="50" y="25" textAnchor="middle" fill="#475569" fontSize="14" fontWeight="600" fontFamily="sans-serif">판매량</text>
            </g>

            {/* Connecting Lines */}
            <path d="M 140 120 C 170 120, 180 180, 200 180" fill="none" stroke="#CBD5E1" strokeWidth="2" />
            <path d="M 140 280 C 170 280, 180 220, 200 220" fill="none" stroke="#CBD5E1" strokeWidth="2" />

            {/* Center Node (Total Revenue) */}
            <circle cx="200" cy="200" r="40" fill="white" stroke="url(#flowGrad)" strokeWidth="3" />
            <text x="200" y="205" textAnchor="middle" fill="#1E293B" fontSize="16" fontWeight="bold" fontFamily="sans-serif">매출</text>

            {/* Cost Flow Out (변동비, 고정비) */}
            <path d="M 235 185 C 270 185, 280 100, 320 100" fill="none" stroke="url(#costGrad)" strokeWidth="10" strokeLinecap="round" />
            <text x="320" y="80" textAnchor="middle" fill="#F43F5E" fontSize="14" fontWeight="600" fontFamily="sans-serif">변동비</text>

            <path d="M 240 200 C 270 200, 280 180, 320 180" fill="none" stroke="url(#costGrad)" strokeWidth="10" strokeLinecap="round" />
            <text x="320" y="160" textAnchor="middle" fill="#F43F5E" fontSize="14" fontWeight="600" fontFamily="sans-serif">고정비</text>

            {/* Profit Flow Out */}
            <path d="M 235 215 C 270 215, 280 280, 320 280" fill="none" stroke="#10B981" strokeWidth="16" strokeLinecap="round" />
            <circle cx="320" cy="280" r="30" fill="white" stroke="#10B981" strokeWidth="3" />
            <text x="320" y="285" textAnchor="middle" fill="#10B981" fontSize="16" fontWeight="bold" fontFamily="sans-serif">영업이익</text>
          </svg>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-8 md:mb-10 leading-tight">
            앱에 데이터를 입력하면<br/>어떻게 분석되는지 확인하세요.
          </h2>

          <div className="space-y-6">
            {/* Widget 1 */}
            <div className="bg-white border border-slate-100 rounded-[24px] p-6 flex items-center gap-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-shadow">
              <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                <FileSpreadsheet className="w-7 h-7 text-indigo-600" />
              </div>
              <div>
                <p className="text-base md:text-lg font-bold text-slate-900 tracking-tight">공헌이익계산서</p>
              </div>
            </div>

            {/* Widget 2 */}
            <div className="bg-white border border-slate-100 rounded-[24px] p-6 flex items-center gap-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-shadow">
              <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                <Scale className="w-7 h-7 text-emerald-600" />
              </div>
              <div>
                <p className="text-base md:text-lg font-bold text-slate-900 tracking-tight">손익분기 <br className="md:hidden" />최소 판매량과 매출액</p>
              </div>
            </div>

            {/* Widget 3 */}
            <div className="bg-white border border-slate-100 rounded-[24px] p-6 flex items-center gap-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-shadow">
              <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                <TrendingUp className="w-7 h-7 text-purple-600" />
              </div>
              <div>
                <p className="text-base md:text-lg font-bold text-slate-900 tracking-tight">목표 순이익 달성 시 <br className="md:hidden" />필요 판매량과 매출액</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
