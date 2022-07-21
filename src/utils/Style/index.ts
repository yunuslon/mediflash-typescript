const mainColor = {
  primary: '#1DA043',
  secondary: '#93CF18',
  grey: '#939393',
  grey2: '#F6F7F9',
  white: '#FFFFFF',
  black: '#030303',
  red: '#FB2E2E',
};

export const colors = {
  primary: mainColor.primary,
  secondary: mainColor.secondary,
  grey: mainColor.grey,
  red: mainColor.red,
  white: mainColor.white,
  black: mainColor.black,

  text: {
    primary: mainColor.black,
    subtitel: mainColor.grey,
    white: mainColor.white,
    green: mainColor.secondary,
    green2: mainColor.primary,
  },
  landingBackground: mainColor.grey2,
  border: mainColor.grey,
  button: {
    primary: {
      background: mainColor.primary,
      text: mainColor.white,
    },
    secondary: {
      background: 'white',
      text: mainColor.black,
    },
    disable: {
      background: mainColor.grey,
      text: mainColor.white,
    },
  },
};
