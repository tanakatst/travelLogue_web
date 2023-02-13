import React from 'react';
import CalendarComponent from './Calendar';
import { Box, Typography } from '@mui/material';


const MakeDate = ({setLeaveDate, leaveDate,setReturnDate,returnDate,setDateArray}: {setLeaveDate:React.Dispatch<React.SetStateAction<string>>, leaveDate:string,setReturnDate:React.Dispatch<React.SetStateAction<string>>, returnDate:string, setDateArray:React.Dispatch<React.SetStateAction<Date[]>>}) => {
    // 時間をフォーマットする。
    return (
        <>
            <CalendarComponent setLeaveDate={setLeaveDate} leaveDate={leaveDate} setReturnDate={setReturnDate} returnDate={returnDate} setDateArray={setDateArray} />
            <Box paddingLeft={5} pt={3}>
                <Typography>出発日：{leaveDate}</Typography>
                <Typography>最終日：{returnDate}</Typography>
            </Box>
        </>
    )
}

export default MakeDate;
