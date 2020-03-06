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
    bgMain: "#fff",
    logo: "#7066ff",
    navLink: "#333",
    text: "#393956",
    btnColorText: "#fff",
    primary: "#40a9ff",
    secondary: "#2DD6AD"

    // "#393956"
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
