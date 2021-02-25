import { createMuiTheme } from '@material-ui/core/styles';
// import { light } from '@material-ui/core/styles/createPalette';
import 'fontsource-roboto';

// https://material-ui.com/es/customization/default-theme/
// const roboto = {
//     fontFamily: 'roboto',
// };

const theme = createMuiTheme({
    palette: {
        common:{
            white: '#FFFFFF',
            black:'#000000'
        },
        primary: {
            main: '#020F59',
            dark: '#00020E',
            light: '#4297D4'
        },
        secondary: {
            main: '#3DADF2',
            dark: '#0E89D4',
            light: '#85CBF7'
        },
        success: {
            main: '#198754',
            dark: '#0F5132',
            light: '#D1E7DD'
        },
        error: {
            main: '#dc3545',
            dark: '#842029',
            light:'#F8D7DA'
        },
        warning: {
            main: '#ffc107',
            dark: '#664D03',
            light:'#FFF3CD'
        },
        info: {
            main: '#0dcaf0',
            dark: '#055160',
            light:'#CFF4FC'
        },
        grey:{
            "50": "#EDEDED",
            "100": "#D4D4D4",
            "200":"#BBBBBB",
            "300":"#A1A1A1",
            "400":"#888888",
            "500":"#6F6F6F",
            "600":"#555555",
            "700":"#3C3C3C",
            "800":"#222222",
            "900":"#090909",
        },
        background:{
            default: "#212529",
            paper:"#FAFAFA"
        },
        text:{
            disabled:"#888888",
            primary:"#F8F9FA",
            secondary:"#141619",
            hint:"#0D6AA0",
        },

    },
});

export default theme;
