"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter, routing } from "@/i18n/routing";
import { ChangeEvent, useTransition } from "react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="relative">
      <select
        value={locale}
        onChange={onSelectChange}
        disabled={isPending}
        className="appearance-none bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100 disabled:opacity-50 transition-colors cursor-pointer"
      >
        {routing.locales.map((cur) => (
          <option key={cur} value={cur} className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {cur.toUpperCase()}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-secondary-foreground">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
