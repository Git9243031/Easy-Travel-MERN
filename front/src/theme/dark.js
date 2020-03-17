import bgDark from "../assets/images/bg_dark.jpg";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

const theme = {
  colors: {
    bgColor: "#000",
    bgMain: bgDark,
    logo: "red",
    navLink: "#eee",
    text: "#eee",
    btnColorText: "#fff",
    primary: "#ff0052",
    secondary: "#2DD6AD"
  },
  borderRadius: "3px",
  device: {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
  }
};

export default theme;
