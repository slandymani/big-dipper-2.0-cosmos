const backgroundDefault = '#0A0A0A';
const surfaceOne = '#18181C';
const surfaceTwo = '#252529';
const fontOne = '#E6E6E6';
const fontTwo = '#AAAAAB';
const fontThree = '#818181';
const icon = '#9F9F9F';

/** Custom theme overrides for dark mode */
export const dimanopiaThemeOverride = {
  mixins: {
    tableCell: {
      background: surfaceOne, // surface one
      '&.odd': {
        background: surfaceTwo, // surface two
      },
    },
  },
  props: {
    MuiSvgIcon: {
      htmlColor: icon, // same as custom /general /icons
    },
  },
  palette: {
    type: 'dark',
    general: {
      icon,
    },
    primary: {
      main: '#4160FF',
      contrastText: '#fff',
    },
    background: {
      default: backgroundDefault,
      paper: surfaceOne,
    },
    divider: '#2D374A',
    text: {
      primary: '#E6E6E6',
      secondary: '#AAAAAB',
    },
    custom: {
      general: {
        background: backgroundDefault, // same as background default
        surfaceOne, // same as background paper
        surfaceTwo, // striped tables
      },
      fonts: {
        fontOne,
        fontTwo,
        fontThree,
        fontFour: '#999999',
        highlight: '#009FFA',
      },
      primaryData: {
        one: '#4520E6',
        two: '#394DFF',
        three: '#088A93',
        four: '#8541E0',
      },
      results: {
        pass: '#198A65',
        fail: '#BB3746',
      },
    },
  },
  overrides: {
    MuiTableBody: {
      root: {
        '& .MuiTableRow-root': {
          '&:nth-child(odd)': {
            backgroundColor: surfaceTwo, // surface two
          },
        },
        '& .MuiTableCell-root': {
          color: fontTwo, // font two
        },
      },
    },
    MuiTabs: {
      root: {
        '& .MuiTab-textColorInherit': {
          color: fontThree, // font three
        },
        '& .MuiTab-textColorInherit.Mui-selected': {
          color: fontOne, // font one
        },
        '& .MuiTabs-indicator': {
          backgroundColor: fontOne, // font one (?)
        },
      },
    },
  },
};
