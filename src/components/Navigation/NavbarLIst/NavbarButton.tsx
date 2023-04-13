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
              color: isSelected? materialTheme.textColor.white: materialTheme.textColor.black,
              backgroundColor:isSelected ? materialTheme.bgColor.blue: materialTheme.bgColor.white,
              borderRadius: 8,
              ':hover':{backgroundColor:materialTheme.bgColor.blue, color:materialTheme.textColor.white}
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
          <ListItemContent sx={{ fontWeight: "bold", pl: 1 }}>
            {name}
          </ListItemContent>
        </ListItemButton>
      </ListItem>
    )
}

export default NavbarButton;