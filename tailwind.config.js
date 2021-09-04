module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#F9881E',
      secondary: '#ffed4a',
      danger: '#e3342f',
      putih: '#FFFFFF',
      biru: '#16A7DA',
      oren: '#F9881E',
      orenHover: '#ED7300',
      brokenblack: '#174C54',
      bb: '#052631',
      birudua: '#49B6FF',
      biruduaHover: '#1990DF',
      abu: '#DADADA',
    }),
    textColor: (theme) => theme('colors'),

    textColor: {
      primary: '#F9881E',
      secondary: '#ffed4a',
      danger: '#e3342f',
      putih: '#FFFFFF',
      biru: '#16A7DA',
      oren: '#F9881E',
      brokenblack: '#174C54',
      bb: '#052631',
      birudua: '#49B6FF',
      abu: '#929292',
    },

    extend: {
      fontSize: {
        '5%': '5%',
        '3%': '3%',
        '7%': '7%',
        '50%': '50%',
        '110%': '110%',
        '200%': '200%',
      },
    },

    extend: {
      width: {
        '80%': '80%',
        '93%': '94%',
        '40%': '40%',
        '20%': '20%',
        '17%': '17%',
        '13%': '13%',
        '10%': '10%',
        '75%': '75%',
        '68%': '68%',
        '65%': '65%',
        '6%': '4%',
        '7%': '7%',
      },
      height: {
        '95%': '95%',
        '90%': '90%',
        '20%': '25%',
        '17%': '17%',
        '10%': '15%',
        '5%': '5%',
      },
    },
    // borderRadius:{
    //   DEFAULT: '4px',
    // }
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg:
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',

      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
