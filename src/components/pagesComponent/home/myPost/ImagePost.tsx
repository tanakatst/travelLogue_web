import React, {useState} from "react";
import { Box, Button, Typography } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Height, Label } from "@mui/icons-material";
import { isNumber } from "util";
// 画像プレビューのインポート
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/system";



const ResponsiveGrid=()=>{
return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
        </Grid>
        ))}
    </Grid>
    </Box>
);
}

export const PhotoUpload = ({name,photos,setPhotos}: {name:string, photos:File[], setPhotos:React.Dispatch<React.SetStateAction<File[]>>})=>{

    // エラーステートの定義(同じファイル、ファイル数上限越え、ファイルの種類（写真ファイル以外の除去）　でエラーをステート保持する。)
    const [isSameError, setIsSameError ] = useState(false)
    const [isNumberError, setIsNumberError] = useState(false)
    const [isFileTypeError, setIsFileTypeError] = useState(false)

    // エラーの初期化をする関数の定義
    const resetErrors = () =>{
        setIsSameError(false)
        setIsNumberError(false)
        setIsFileTypeError(false)
    }
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files === null || e.target.files.length ===0){
            return;
        }
        // 配列の結合(ファイルの配列作成)
        const files = Object.values(e.target.files).concat();
        e.target.value = "";
        resetErrors();

        // 写真ファイルの取り出し:ファイルの配列からの取り出し
        const pickedPhotos = files.filter((file) =>{
            // タイプ（拡張子）によるエラーのハンドリング
            if(
                ![
                    "image/gif",
                    "image/jpeg",
                    "image/png",
                    "image/bmp",
                    "image/svg+xml",
                ].includes(file.type)
            ){
                // ファイルのタイプによるエラーハンドリング
                setIsFileTypeError(true)
                return false;
            }
            // サイズによるエラーハンドリング(setSameErrorのハンドリング)
            const existsSameSize = photos.some((photo) => photo.size === file.size);
            if(existsSameSize){
                setIsSameError(true);
                return false;
            }
            return true;
        });
        // 画像投稿されていない時は何も返さない。
        if(pickedPhotos.length === 0){
            return
        }
        //
        const concatPhotos =photos.concat(pickedPhotos);
        if(concatPhotos.length >= 4){
            setIsNumberError(true);
        }
        // エラーを表示させて、1~ 3枚分のみ表示する。
        setPhotos(concatPhotos.slice(0,3));
    };


    // 画像登校キャンセル関数
    const handleCancel = (photoIndex: number) =>{
        if(confirm('この画像を削除してもよろしいですか')){
            resetErrors();
            // 修正後の画像ファイルの配列を定義
            const modifyPhotos = photos.concat();
            // photoINdex(選択した画像のインデックス番号の写真尾削除)
            modifyPhotos.splice(photoIndex, 1);
            // Photosの修正（更新）
            setPhotos(modifyPhotos)

        }
    };
    return(
        <>
            <Box mt={2}>
                <Typography paddingLeft={1} color='gray' >写真投稿</Typography>
            </Box>
            <Container sx={{mt:3, mb:3}} maxWidth='lg' >
                <>
                    {/* ここが出力されていない。 */}
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                        {[...Array(3)].map((_: number, index: number) =>{
                            return(
                                index < photos.length ? (
                                    <>
                                        <Grid item xs={2} sm={4} md={6} key={index} height={150}  display='hidden'>
                                            <button
                                            type="button"
                                            style={{width:'100%', height:'100%',}}
                                            key={index}
                                            onClick={() => handleCancel(index)}
                                            >
                                                <img
                                                style={{width:'100%', height:'100%'}}
                                                src={URL.createObjectURL(photos[index])}
                                                alt={`あなたの写真 ${index + 1}`}
                                                />
                                            </button>
                                        </Grid>
                                    </>
                                )
                                :
                                (
                                    <Grid item xs={2} sm={4} md={4} key={index}>
                                        <label htmlFor={name} key={index}>
                                            <Box>
                                                <img src="" alt="" />
                                            </Box>
                                        </label>
                                    </Grid>
                                )
                            )
                        }
                        )}
                    </Grid>
                    {isSameError && (
                        <Typography>既に選択した画像を含んでいます。</Typography>
                    )}
                    {isNumberError && (
                        <Typography>3枚以上画像を投稿する事ができません。</Typography>
                    )}
                    {isFileTypeError && (
                        <Typography>写真ファイル(※jpeg, png, bmp, gif, svg)の画像を投稿してください。</Typography>
                    )}
                </>
            </Container>
            <Typography>画像は最大3枚までです。</Typography>
            <Button variant="contained" component="label" endIcon= {<AddPhotoAlternateIcon />}>
                Upload
                <input hidden accept="image/*" multiple type="file" onChange = {e => changeHandler(e)}/>
            </Button>
        </>
    )
}

