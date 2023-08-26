import { useRouter } from "next/router";
import Link from "next/link";
import { selected, unavailable } from "./LanguageSwitcher.module.scss";

export default function LanguageSwitcher() {
  const { locales, locale } = useRouter();

  const aliases = {
    en: "Eng",
    ru: "Рус",
  };

  return (
    <>
      {locales.map((oneLocale) => {
        return (
          <Language
            key={oneLocale}
            locale={oneLocale}
            className={oneLocale === locale ? selected : unavailable}
          >
            {aliases[oneLocale]}
          </Language>
        );
      })}
    </>
  );
}

const Language = ({ children, locale, className }) => {
  const router = useRouter();
  const { asPath, pathname, query } = router;

  const setLocale = (locale) => {
    router.push({ pathname, query }, asPath, { locale });
  };

  const setCookie = (locale) => {
    document.cookie = `NEXT_LOCALE=${locale};`;
  };

  return (
    <li>
      <Link
        className={className}
        href={pathname}
        onClick={(e) => {
          e.preventDefault();
          setLocale(locale);
          setCookie(locale);
        }}
      >
        {children}
      </Link>
    </li>
  );
};
