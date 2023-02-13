import React from "react";
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Grid from '@mui/material/Unstable_Grid2';
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils';
import { PostCard } from "./PostCard";
import { title } from 'process';


interface image{
    created_at:Date,
    id:number,
    name:string,
    path:string,
    post_id:number,
    updated_at:Date
}
type Props = {
    id:number
    title: string
    prefecture: string
    content: string
    time: Date
    image?:image[]

}
interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));



// 画像カルーセル表示
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

// 投稿表示コンポーネント
const ShowPost  = (props:Props) =>{

    const title = props.title
    const prefecture = props.prefecture
    const content = props.content
    const id = props.id
    const time = props.time.toString()
    const substrTime = time.substring(0, time.indexOf('T'))
    const showTime = substrTime.replace(/-/g, "/",)
    const image = props.image
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // ハンバーガーメニュー
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

// 場所アイコン


  return (
      <>
        <Grid xs={12}  md={5} lg={4} justifyContent='space-between'>
            <PostCard id={id} title={title} prefecture={prefecture} content={content} time={time} image={image}/>
        </Grid>
      </>
  );
}
export default ShowPost

