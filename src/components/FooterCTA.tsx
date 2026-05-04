import { motion } from 'motion/react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function FooterCTA() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
    businessNumber: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('이름과 이메일은 필수 입력 항목입니다.');
      return;
    }

    setStatus('loading');

    try {
      const { error } = await supabase.from('email_signups').insert({
        email: formData.email,
        name: formData.name,
        phone: formData.phone,
        business_type: formData.businessType,
        business_number: formData.businessNumber,
      });

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', phone: '', email: '', businessType: '', businessNumber: '' });
      alert('신청이 성공적으로 완료되었습니다!');

    } catch (error: any) {
      console.error('Error submitting form:', error?.message, error?.details, error?.hint, error?.code);
      setStatus('error');
      alert(`오류: ${error?.message || '알 수 없는 오류'}`);
    }
  };

  return (
    <section id="모집 안내" className="py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-[#4F46E5]/20 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-8 md:mb-12 leading-tight">
            지금 바로 사장님의 장사,<br/>진짜 이익을 계산해 보세요!
          </h2>

          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col gap-2 text-left md:col-span-2">
                <label className="text-sm font-medium text-slate-300 ml-1">이메일 *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4F46E5] focus:bg-white/10 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label className="text-sm font-medium text-slate-300 ml-1">이름 *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="홍길동"
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4F46E5] focus:bg-white/10 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label className="text-sm font-medium text-slate-300 ml-1">연락처 (선택)</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="010-0000-0000"
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4F46E5] focus:bg-white/10 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label className="text-sm font-medium text-slate-300 ml-1">업종 (선택)</label>
                <input 
                  type="text" 
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  placeholder="예: 요식업, 온라인 쇼핑몰"
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4F46E5] focus:bg-white/10 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label className="text-sm font-medium text-slate-300 ml-1">사업자등록번호 (선택)</label>
                <input 
                  type="text" 
                  name="businessNumber"
                  value={formData.businessNumber}
                  onChange={handleChange}
                  placeholder="000-00-00000"
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4F46E5] focus:bg-white/10 transition-all"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 md:py-5 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-base md:text-lg font-bold hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:scale-[1.02] transition-all duration-300 leading-snug disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? '전송 중...' : (
                <>
                  무료로 가장 먼저<br className="md:hidden" /> 신청 완료하기
                </>
              )}
            </button>
            <p className="text-xs text-slate-400 mt-5 text-center flex items-center justify-center gap-1.5 break-keep">
              <span role="img" aria-label="lock">🔒</span>
              스팸 문자를 발송하지 않으며, 출시 알림 용도로만 안전하게 사용됩니다.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
