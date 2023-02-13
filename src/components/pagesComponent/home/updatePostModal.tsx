import React from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, InputLabel, Box, FormControl, MenuItem, Select, IconButton } from '@mui/material';
import { usePost } from "../../../queries/PostQuery";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUpdatePost } from "../../../queries/PostQuery";


type Inputs = {
    title: string,
    prefecture: string,
    content : string,
}

type Props ={
    id:number
    title: string
    prefecture: string
    content: string
}

const EditModal = (props:Props)=>{
    const id = props.id
    const propTitle = props.title
    const propPrefecture = props.prefecture
    const propContent = props.content
    const [open, setOpen] = React.useState(false);
    // posts
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        const title = data.title
        const prefecture = data.prefecture
        const content = data.content

        update.mutate({id,title, prefecture, content})
        setOpen(false)
    }

    const handleClickOpen  = () =>{
        setOpen(true)
    }
    const handleClose = ()=>{
        setOpen(false);
    }

    // 都道府県select

    const update = useUpdatePost();


    return (
        <div>
            <Button  size="small" onClick={handleClickOpen}>編集</Button>

            <Dialog open={open} onClose={handleClose} id={`${id}`}>
                <DialogTitle>投稿</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    投稿の入力をしてください
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="タイトル"
                    type="title"
                    defaultValue={propTitle}
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
                        defaultValue={propPrefecture}
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
                    defaultValue={propContent}
                    fullWidth
                    {...register('content')}
                />
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
export default EditModal;
