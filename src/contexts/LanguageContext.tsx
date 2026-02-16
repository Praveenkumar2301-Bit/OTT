'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getStrings, LANG_COOKIE, type Lang } from '@/lib/i18n';

type Strings = ReturnType<typeof getStrings>;

type ContextValue = {
  lang: Lang;
  setLanguage: (lang: Lang) => void;
  t: Strings;
};

const LanguageContext = createContext<ContextValue | null>(null);

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: Lang;
}) {
  const router = useRouter();
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLanguage = useCallback(
    (newLang: Lang) => {
      setLangState(newLang);
      document.cookie = `${LANG_COOKIE}=${newLang};path=/;max-age=31536000`;
      router.refresh();
    },
    [router]
  );

  const value = useMemo<ContextValue>(
    () => ({
      lang,
      setLanguage,
      t: getStrings(lang),
    }),
    [lang, setLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): ContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
