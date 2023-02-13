import React, {ReactNode} from 'react';
import Box from '@mui/joy/Box';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Search from '@mui/icons-material/Search';
import Person from '@mui/icons-material/Person';
import { CssVarsProvider } from '@mui/joy';
import theme from '../../../styles/mui/theme';
import { deepmerge } from '@mui/utils';
import { joyTheme, muiTheme } from '../../styles/mui/JoytMaterialMixed';
import { Typography } from '@mui/material';



export const ChangeNav =()=> {
  const [index, setIndex] = React.useState(0);
  const colors = ['#3a9bb3 ', '#3a50b3 ', '#6c3ab3 '] as const;
  return (
    <CssVarsProvider theme={deepmerge(joyTheme, muiTheme)}>

        <Tabs
            size="lg"
            // aria-label="Bottom Navigation"
            value={index}
            onChange={(event, value) => setIndex(value as number)}
            sx={(theme) => ({
            borderRadius: 'xl',
            backgroundColor:'#e6e6e6',
            maxWidth: 700,
            mx: 'auto',
            boxShadow: theme.shadow.sm,
            '--Tabs-gap': '8px',
            '--joy-shadowChannel': colors[index],
            [`& .${tabClasses.root}`]: {
                boxShadow: 'none',
                borderRadius: 'lg',
                // whiteSpace: 'nowrap',
                transition: '0.3s',
                fontWeight: 'lg',
                flex: 1,
                [`&:not(.${tabClasses.selected}):not(:hover)`]: {
                opacity: 0.72,
                },
            },
            })}
        >
            <TabList variant="plain" sx={{ '--List-decorator-size': '28px' }}>
            <Tab
                orientation="vertical"
                {...(index === 0 && { variant: 'soft', color: colors[0] })}
            >
                <ListItemDecorator>
                <HomeOutlined />
                </ListItemDecorator>
                あなたの投稿
            </Tab>
            <Tab
                orientation="vertical"
                {...(index === 1 && { variant: 'soft', color: colors[1] })}
            >
                <ListItemDecorator>
                <FavoriteBorder />
                </ListItemDecorator>
                みんなの投稿
            </Tab>
            <Tab
                orientation="vertical"
                {...(index === 2 && { variant: 'soft', color: colors[2] })}
            >
                <ListItemDecorator>
                <Search />
                </ListItemDecorator>
                検索
            </Tab>
            </TabList>
        </Tabs>
    </CssVarsProvider>
  );
}
