
import React, { useState, useEffect } from 'react';
import { TranslationStrings } from '../types.ts';

// Declaration for Google Tag Manager / Global Tag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

interface Props {
  t: TranslationStrings;
}

const setCookie = (name: string, value: string, days: number) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  const secureFlag = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${name}=${value || ""}${expires}; path=/; SameSite=Lax${secureFlag}`;
};

const getCookie = (name: string): string | null => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i=0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const CookieConsent: React.FC<Props> = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie('cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    } else {
      syncConsentMode(consent === 'accepted' ? 'granted' : 'denied');
    }
  }, []);

  const syncConsentMode = (status: 'granted' | 'denied') => {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'ad_storage': status,
        'ad_user_data': status,
        'ad_personalization': status,
        'analytics_storage': status
      });
    }
  };

  const handleConsent = (consent: 'accepted' | 'rejected') => {
    const status = consent === 'accepted' ? 'granted' : 'denied';
    syncConsentMode(status);
    setIsVisible(false);
    setTimeout(() => {
      setCookie('cookie_consent', consent, 365);
    }, 600);
  };

  return (
    <div 
      className={`fixed bottom-6 left-6 z-[200] w-[calc(100%-3rem)] max-w-[320px] transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0 pointer-events-none'
      }`}
    >
      <div 
        className="overflow-hidden p-5 rounded-[1.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/40 bg-white/70"
        style={{
          backdropFilter: 'blur(20px) saturate(160%)',
          WebkitBackdropFilter: 'blur(20px) saturate(160%)',
        }}
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h4 className="text-[12px] font-black text-[#0b3b52] uppercase tracking-tight mb-1">
                {t.cookie.title}
              </h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                {t.cookie.message}
              </p>
            </div>
            <div className="w-6 h-6 rounded-lg bg-[#f7f0e3] flex items-center justify-center text-[#CBA76B] flex-shrink-0">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleConsent('accepted')}
              className="flex-1 px-4 py-2.5 bg-[#0b3b52] text-white text-[9px] font-black rounded-xl hover:bg-[#1f7a8c] transition-all active:scale-95 uppercase tracking-widest"
            >
              {t.cookie.accept}
            </button>
            <button
              onClick={() => handleConsent('rejected')}
              className="px-3 py-2.5 text-slate-400 text-[9px] font-bold hover:text-[#0b3b52] transition-colors uppercase tracking-widest"
            >
              {t.cookie.reject}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
