"use client";

import { createContext, useContext, ReactNode } from "react";

type Messages = Record<string, any>;

interface I18nContextValue {
  locale: string;
  messages: Messages;
}

const I18nContext = createContext<I18nContextValue>({
  locale: "en",
  messages: {},
});

export function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: string;
  messages: Messages;
  children: ReactNode;
}) {
  return (
    <I18nContext.Provider value={{ locale, messages }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLang(): string {
  return useContext(I18nContext).locale;
}

export function useT(namespace?: string) {
  const { messages } = useContext(I18nContext);

  return function t(key: string, vars?: Record<string, string | number>): string {
    // Build full key path
    const fullKey = namespace ? `${namespace}.${key}` : key;
    const keys = fullKey.split(".");
    let value: any = messages;

    for (const k of keys) {
      if (value == null || typeof value !== "object") return fullKey;
      value = value[k];
    }

    if (typeof value !== "string") return fullKey;

    // Interpolate variables like {count}
    if (vars) {
      return value.replace(/\{(\w+)\}/g, (_, name) => String(vars[name] ?? `{${name}}`));
    }

    return value;
  };
}
