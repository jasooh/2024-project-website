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
            lightWhite: Colors['light-white']
      },
    },
    styles: {
      global: {
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
        'p': {
            color: 'brand.lightWhite'
        }
      },
    },
  });

export default theme;