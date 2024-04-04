// theme for website
import { extendTheme } from "@chakra-ui/react";
import Colors from "./Colors.json";

const theme = extendTheme({
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Montserrat', sans-serif",
  },
  colors: {
    brand: {
      black: Colors['black'],
      white: Colors['white'],
      lightWhite: Colors['light-white'],
      accent: Colors['accent']
    },
  },
  styles: {
    global: {
      'html': {
        userSelect: 'none',
        overflowX: 'hidden',
        overflowY: 'scroll',
        'scrollbar-width': 'none'
      },
      'body': {
        margin: 0,
        padding: 0,
        height: '100%',
        backgroundColor: 'brand.black',
      },
      'h2': {
        color: 'brand.black',
        textShadow: '0.05rem 0.05rem 0 #FFFFFF, -0.05rem 0.05rem 0 #FFFFFF, 0.05rem -0.05rem 0 #FFFFFF, -0.05rem -0.05rem 0 #FFFFFF' // outline effect
      },
      'h4': {
        color: 'brand.white'
      },
      'p': {
        color: 'brand.lightWhite'
      }
    },
  },
});

export default theme;