import React from "react";
import { Button } from "@mui/material";

export const ButtonAtom =(props: { label: any; })=>{
    const label = props.label
    return(

        <Button variant="contained" href="#contained-buttons">{label}</Button>
    )

}
