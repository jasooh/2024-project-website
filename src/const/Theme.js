import { extendTheme } from "@chakra-ui/react";
import Colors from "./Colors.json";

const theme = extendTheme({
    fonts: {
            heading: "'Bebas Neue', sans-serif", // Use Bebas Neue for headings
            body: "'Montserrat', sans-serif", // Use Montserrat for body text
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
            textShadow: '1px 1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px -1px 0 #FFFFFF' // outline effect
        },
        'p': {
            color: 'brand.lightWhite'
        }
      },
    },
  });

export default theme;