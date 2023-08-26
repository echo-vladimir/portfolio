import { useRouter } from "next/router";
import Link from "next/link";
import {
  selected,
  unselected,
  unavailable,
} from "./LanguageSwitcher.module.scss";

export default function LanguageSwitcher() {
  const { locale } = useRouter();

  const languages = [
    { code: "en", alias: "Eng", active: true },
    { code: "ru", alias: "Рус" },
  ];

  return (
    <>
      {languages.map((lang) => (
        <Language
          key={lang.code}
          locale={lang.code}
          isActive={lang.code === locale || lang.active}
        >
          {lang.alias}
        </Language>
      ))}
    </>
  );
}

const Language = ({ children, locale, isActive }) => {
  let className;

  if (isActive) {
    className = selected;
  } else if (locale === "en") {
    className = unselected;
  } else {
    className = unavailable;
  }

  return (
    <li>
      <a className={className} href="#">
        {children}
      </a>
    </li>
  );
};
