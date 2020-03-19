import ru from "./ru.json";
import en from "./en.json";

const languages = {
  ru,
  en
};

export const local = navigator.language;

if (!localStorage.language) {
  localStorage.setItem("language", local.split(/[-_]/));
}
const currentLang = localStorage.language.split(/[,]/)[0];

export const messages = languages[currentLang];
