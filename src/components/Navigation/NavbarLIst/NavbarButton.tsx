import React from 'react';
import { ListItem, ListItemButton, ListItemDecorator, ListItemContent } from '@mui/joy';
import { useTheme, Icon } from '@mui/material';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';


const NavbarButton = ({id,name,icon, isSelected, setIsSelected}:{id:number,name:string,icon:ReactJSXElement,isSelected:boolean, setIsSelected:React.Dispatch<React.SetStateAction<number>>}) => {
    const materialTheme = useTheme().palette
    return (
        <ListItem>
        <ListItemButton
          sx={
            {
              color: isSelected? materialTheme.primary.contrastText: materialTheme.text.primary,
              backgroundColor:isSelected ? materialTheme.primary.main: materialTheme.bgColor.white,
              borderRadius: 8,
              ':hover':{backgroundColor:materialTheme.primary.light,color: materialTheme.primary.contrastText}
            }
          }
          onClick={()=> setIsSelected(id)}
        >
          <ListItemDecorator
            // sx={{
            //   color: materialTheme.textColor.white,
            //   ":hover": {
            //     backgroundColor: materialTheme.bgColor.blue,
            //     color: materialTheme.textColor.white,
            //   },
            // }}
          >
            {icon}
          </ListItemDecorator>
          <ListItemContent sx={{ fontWeight: "bold", pl: 1}}>
            {name}
          </ListItemContent>
        </ListItemButton>
      </ListItem>
    )
}

export default NavbarButton;