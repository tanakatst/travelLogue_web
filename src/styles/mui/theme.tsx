import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
    // TODO:テーマ設定を行います
    palette: {
        primary: {
            light:'#9ab7c9',
            main: '#3a9bb3 ',
        },
        secondary: {
            main: '#F2EFC4',
        },
        text: {
            primary: '#263238',
        },
        background:{
            default:'#e6e6e6',
        }
    },
    typography:{
        fontFamily: [
            'Noto Sans JP'
          ].join(','),

    },
});

export default theme;



