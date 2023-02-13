import React,{useState} from 'react';
import Card from '@mui/material/Card';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CardContent from '@mui/material/CardContent';
import DateTab from './DashbordContents/makePlanContent/dateTab';
import MakeDate from './DashbordContents/makeDate/makeDate';



const MakePlanCard = () => {
    // 旅行する日程(date)情報管理
    const [leaveDate, setLeaveDate] = useState<string>('')
    const [returnDate, setReturnDate] = useState<string>('')
    const [dateFlag,setDateFlag] = useState<boolean | string>(false)
    const [dateArray, setDateArray] = useState<Date[]>([])
    const [places, setPlaces] = useState([])
    // 場所の情報を管理しなくてはならない。
    return (
        <>
            <Box zIndex={10} display='inline' marginTop={9} marginLeft={5} height= '820px' width={350} bgcolor='red' position='absolute' top={0} left={30}>
                <Card sx={{height:'100%', width:'100%'}}>
                    <Box bgcolor='primary.main' height='8%' width='100%' display='flex' justifyContent='center' alignItems='center' >
                        <Typography variant='h6' fontWeight={800} color='white'>
                            旅行計画作成
                        </Typography>
                    </Box>
                {dateFlag === false?
                    // 日程の設定が完了したら、旅行計画欄に飛ぶ
                    <>
                        <MakeDate setLeaveDate={setLeaveDate} leaveDate={leaveDate} setReturnDate={setReturnDate} returnDate={returnDate} setDateArray={setDateArray}/>
                        <Box textAlign='center' pt={3}>
                            <Button  onClick={e =>setDateFlag(!dateFlag)} sx={{ backgroundColor:'#3a9bb3', color:'#fff' , ":hover":{backgroundColor:'#9ab7c9'} }}>日程確定</Button>
                        </Box>
                    </>
                    :
                    <>
                        <DateTab dateArray={dateArray} setDateArray={setDateArray}/>
                            ここには予定作成ダッシュボードを配置する予定です。
                            ここに必要な機能：検索機能,予定管理機能(カレンダーと同期)送信機能、場所検索機能、::最短ルート検索機能
                        <CardContent sx={{backgroundColor:'red'}}>
                        </CardContent>
                        <CardContent sx={{backgroundColor:'red'}}>
                        </CardContent>
                        <CardContent sx={{backgroundColor:'red'}}>
                        </CardContent>

                        <Box textAlign='center' pt={3}>
                            <Button onClick={e =>setDateFlag(!dateFlag)} sx={{ backgroundColor:'#3a9bb3', color:'#fff' , ":hover":{backgroundColor:'#9ab7c9'}}}>計画確定</Button>
                        </Box>
                    </>
                }
                </Card>
            </Box>
        </>
    )
}

export default MakePlanCard;
