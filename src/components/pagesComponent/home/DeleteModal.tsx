import React ,{useState}from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDeletePost } from "../../../queries/PostQuery";
import { useRouter } from 'next/router';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


type prop = {
    id:number
}
const DeleteModal = (prop:prop) =>{
    // 削除系の変数定義
    const postId = prop.id
    const deletePost = useDeletePost()

    // 再レンダリング
    const router = useRouter()

    // modal 処理
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // 削除ボタンイベント
    const handleDelete= ()=>{
        deletePost.mutate(postId)
        setOpen(false);
        router.push('/home')
    }
    return (
      <div>
        <Button onClick={handleOpen}>削除</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              本当に削除してよろしいですか。
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              削除した場合、この投稿の全国一周達成率への反映もなくなります。
            </Typography>
            <Button onClick={handleClose}>戻る</Button>
            <Button onClick={handleDelete}>削除</Button>
          </Box>
        </Modal>
      </div>
    );

}
export default DeleteModal;
