import React, { useCallback, useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, InputLabel, Box, FormControl, MenuItem, Select, IconButton } from '@mui/material';
import { usePost } from "../../../../queries/PostQuery";
import { SubmitHandler, useForm } from "react-hook-form";
import { title } from "process";
import {Fab} from "@mui/material";
import { Add } from "@mui/icons-material";
import { PhotoUpload } from "./ImagePost";
import imageCompression from "browser-image-compression";
type Inputs = {
    title: string,
    prefecture: string,
    content : string,
}


const PostModal = ()=>{
    const [open, setOpen] = React.useState(false);
    // 写真ステート
    const [photos, setPhotos] = useState<File[]>([])
    // react hook form
    const { register, handleSubmit, watch, formState: { errors }, } = useForm<Inputs>();
    // 投稿機能
    const onSubmit: SubmitHandler<Inputs> = async(data):Promise<void> => {
        const {title,prefecture,content} = data
        const formData = new FormData()
        formData.append('title', title)
        formData.append('prefecture',prefecture)
        formData.append('content', content)
        // 写真の容量小さくする処理
        const compressOptions = {
            // 3MB以下に圧縮する
            maxSizeMB: 3,
          };
          const compressedPhotoData = await Promise.all(
            photos.map(async (photo) => {
              return {
                blob: await imageCompression(photo, compressOptions),
                name: photo.name,
              };
            })
          );

        compressedPhotoData.forEach((photoData,index) => {
            formData.append('photos[' + index + ']', photoData.blob, photoData.name);
        });
        post.mutate(formData)
        setOpen(false)
    }
    //  　モーダルの処理
    const handleClickOpen  = () =>{
        setOpen(true)
    }
    const handleClose = ()=>{
        setOpen(false);
    }

    // 都道府県select

    const post = usePost();
    return (
        <div>
             {/* <Fab color="primary" aria-label="add" sx={{mr:2, mb:2 ,zIndex:80,":hover":{backgroundColor:'#9ab7c9'}}}
                onClick={handleClickOpen}
                >
                <Add />
            </Fab> */}
            <Fab aria-label="add" onClick={handleClickOpen} sx={{backgroundColor:'#3a9bb3',":hover":{backgroundColor:'#2f788b'}}}>
                <Add />
            </Fab>
            <Dialog open={open} onClose={handleClose} sx={{height:{xs:400, sm:600}, width: {xs:'90%', sm:'100%'}, margin:{xs:'auto'}}}>
                <DialogTitle sx={{fontWeight:900}}>新しい旅のログ</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="タイトル"
                    type="title"
                    fullWidth
                    variant="standard"
                    {...register('title')}
                />
                    <FormControl fullWidth margin="dense">
                        <InputLabel>都道府県</InputLabel>
                        <Select
                        fullWidth
                        {...register("prefecture")}
                        label='都道府県'
                        >
                            <MenuItem value="北海道">北海道</MenuItem>
                            <MenuItem value="青森県">青森県</MenuItem>
                            <MenuItem value="岩手県">岩手県</MenuItem>
                            <MenuItem value="宮城県">宮城県</MenuItem>
                            <MenuItem value="秋田県">秋田県</MenuItem>
                            <MenuItem value="山形県">山形県</MenuItem>
                            <MenuItem value="福島県">福島県</MenuItem>
                            <MenuItem value="茨城県">茨城県</MenuItem>
                            <MenuItem value="栃木県">栃木県</MenuItem>
                            <MenuItem value="群馬県">群馬県</MenuItem>
                            <MenuItem value="埼玉県">埼玉県</MenuItem>
                            <MenuItem value="千葉県">千葉県</MenuItem>
                            <MenuItem value="東京都">東京都</MenuItem>
                            <MenuItem value="神奈川県">神奈川県</MenuItem>
                            <MenuItem value="新潟県">新潟県</MenuItem>
                            <MenuItem value="富山県">富山県</MenuItem>
                            <MenuItem value="石川県">石川県</MenuItem>
                            <MenuItem value="福井県">福井県</MenuItem>
                            <MenuItem value="山梨県">山梨県</MenuItem>
                            <MenuItem value="長野県">長野県</MenuItem>
                            <MenuItem value="岐阜県">岐阜県</MenuItem>
                            <MenuItem value="静岡県">静岡県</MenuItem>
                            <MenuItem value="愛知県">愛知県</MenuItem>
                            <MenuItem value="三重県">三重県</MenuItem>
                            <MenuItem value="滋賀県">滋賀県</MenuItem>
                            <MenuItem value="京都府">京都府</MenuItem>
                            <MenuItem value="大阪府">大阪府</MenuItem>
                            <MenuItem value="兵庫県">兵庫県</MenuItem>
                            <MenuItem value="奈良県">奈良県</MenuItem>
                            <MenuItem value="和歌山県">和歌山県</MenuItem>
                            <MenuItem value="鳥取県">鳥取県</MenuItem>
                            <MenuItem value="島根県">島根県</MenuItem>
                            <MenuItem value="岡山県">岡山県</MenuItem>
                            <MenuItem value="広島県">広島県</MenuItem>
                            <MenuItem value="山口県">山口県</MenuItem>
                            <MenuItem value="徳島県">徳島県</MenuItem>
                            <MenuItem value="香川県">香川県</MenuItem>
                            <MenuItem value="愛媛県">愛媛県</MenuItem>
                            <MenuItem value="高知県">高知県</MenuItem>
                            <MenuItem value="福岡県">福岡県</MenuItem>
                            <MenuItem value="佐賀県">佐賀県</MenuItem>
                            <MenuItem value="長崎県">長崎県</MenuItem>
                            <MenuItem value="熊本県">熊本県</MenuItem>
                            <MenuItem value="大分県">大分県</MenuItem>
                            <MenuItem value="宮崎県">宮崎県</MenuItem>
                            <MenuItem value="鹿児島県">鹿児島県</MenuItem>
                            <MenuItem value="沖縄県">沖縄県</MenuItem>
                        </Select>
                    </FormControl>
                <TextField
                    multiline
                    rows={4}
                    autoFocus
                    margin="dense"
                    id="utlined-multiline-static"
                    label="旅のログをご記入ください"
                    fullWidth
                    {...register('content')}
                />
                <PhotoUpload name="photos" photos={photos} setPhotos={setPhotos}/>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>キャンセル</Button>
                <Button onClick={handleSubmit(onSubmit)}>
                    投稿
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}
export default PostModal;
