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

export const messages = languages[localStorage.language];