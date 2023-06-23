import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, useTheme, Stack, Divider, ToggleButton } from "@mui/material";
import {
  Modal,
  IconButton,
  ModalClose,
  Sheet,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea,
  Button,
} from "@mui/joy";
import Autocomplete from "@mui/joy/Autocomplete";
import {
  Add,
  Payment,
  PeopleOutline,
  Place,
  Upload,
} from "@mui/icons-material";
import {
  DatePicker,
  DateValidationError,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Image from "next/image";

import { useGetInitialData } from "../../../../queries/InitialDataQuery";
import CreatePostImage from "./CreatePostImage";
import colors from "@mui/joy/colors";

// 画面大きさmd以上の時

const CreatePost = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme().palette;
  // imageのstateを持つ。
  const [selectedImages, setSelectedImages] = useState<File[] | null>(null);
  const prefectureOptions = useGetInitialData();
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const filesArray = Array.from(files);
      setSelectedImages(filesArray);
      setPage(2);
    }
  };
  // page state
  const [page, setPage] = useState(1);

  // hook form

  return (
    <>
      <IconButton sx={{ flexGrow: 1 }} onClick={() => setOpen(true)}>
        <Add />
      </IconButton>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            height:
              page == 1
                ? { xs: "75%", sm: "70%", md: "70%", lg: "75%" }
                : page == 2
                ? { xs: "60%", sm: "70%", md: "70%", lg: "75%" }
                : "95%",
            width:
              page == 1
                ? { xs: "80%", sm: "60%", md: "50%", lg: "40%" }
                : page == 2
                ? { xs: "80%", sm: "60%", md: "50%", lg: "40%" }
                : "80%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: theme.background.paper,
            borderRadius: "20px",
            boxShadow: "lg",
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: "calc(-1/4 * var(--IconButton-size))",
              right: "calc(-1/4 * var(--IconButton-size))",
              boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
              borderRadius: "50%",
              bgcolor: "background.body",
            }}
          />

          <Box
            height="100%"
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              height="8%"
              width="100%"
              sx={{
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              }}
            >
              <Typography
                width="100%"
                textAlign="center"
                component="h2"
                id="modal-title"
                level="h6"
                textColor="inherit"
                fontWeight="lg"
              >
                {page == 1 && "新規投稿"}
                {page == 2 && "プレビュー"}
                {page == 3 && "コンテンツ作成"}
              </Typography>
              {page < 3 && (
                <Button
                  variant="plain"
                  sx={{ position: "absolute", right: "30px" }}
                  onClick={() => {
                    page + 1 < 4 && setPage(page + 1);
                  }}
                >
                  次へ
                </Button>
              )}
              {page == 3 && (
                <Button
                  sx={{ position: "absolute", right: "30px" }}
                  onClick={() => {
                    console.log("投稿");
                  }}
                >
                  投稿
                </Button>
              )}
              {page != 1 && (
                <Button
                  variant="plain"
                  sx={{ position: "absolute", left: "30px" }}
                  onClick={() => {
                    page - 1 > 0 && setPage(page - 1);
                  }}
                >
                  戻る
                </Button>
              )}
            </Box>
            <Divider light sx={{ width: "100%" }} />
            {page == 1 && (
              <Stack width="100%" height="92%" alignItems="center">
                <SelectImages handleChangeImages={handleChangeImage} />
              </Stack>
            )}
            {page == 2 && <CreatePostImage selectedImages={selectedImages} setSelectedImages = {setSelectedImages}/>}
            {page == 3 && <CreateDetails images={selectedImages} />}
          </Box>
        </Sheet>
      </Modal>
    </>
  );
};

export default CreatePost;

type SelectImagesProps = {
  handleChangeImages: (e: ChangeEvent<HTMLInputElement>) => void;
};
// page1
const SelectImages = ({ handleChangeImages }: SelectImagesProps) => {
  return (
    <Stack
      mt={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="100%"
      sx={{
        position: "relative",
        cursor: "pointer",
        margin: "auto",
        backgroundColor: "background.paper",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
      component="label"
    >
      <input
        hidden
        multiple
        type="file"
        accept="image/*"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          cursor: "pointer",
        }}
        onChange={handleChangeImages}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        viewBox="0 0 24 24"
      >
        <path d="M16 16h-3v5h-2v-5h-3l4-4 4 4zm3.479-5.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h3.5v-2h-3.5c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78 3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-3.5v2h3.5c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408z" />
      </svg>
      <Typography sx={{ pt:2,color: "primary.main", fontWeight: "bold" }}>
        ここに画像をアップロード
      </Typography>
    </Stack>
  );
};

type ImagesProps = {
  images: File[] | null;
};

// page3
const CreateDetails = ({ images }: ImagesProps) => {
  const [dateError, setDateError] = React.useState<DateValidationError | null>(
    null
  );
  const [imageURL, setImageURL] = useState<string | undefined>()
  useEffect(()=>{
    const imageURL = images && URL.createObjectURL(images[0])
    imageURL && setImageURL(imageURL)
  },[images])

  console.log(imageURL)
  const dateErrorMessage = React.useMemo(() => {
    switch (dateError) {
      case "maxDate": {
        return "現在より前の日付を入力してください。";
      }
      case "minDate": {
        return "Please select a date in the first quarter of 2022";
      }

      case "invalidDate": {
        return "指定された日付は有効ではありません。";
      }

      default: {
        return "";
      }
    }
  }, [dateError]);

  const prefectureOptions = useGetInitialData()?.data;
  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", md: "row" },
        alignItems: { sm: "center" },
        justifyContent: { md: "center" },
      }}
      width="100%"
      height="100%"
      p={3}
      pt={3}
    >
      <Box
        p={3}
        sx={{
          width: { xs: "90%", md: "60%" },
          height: { xs: "60%", md: "90%" },
          display: { md: "flex" },
          alignItems: { md: "center" },
          justifyContent: { md: "center" },
        }}
      >
        <Box height="auto" width="85%">
          {images && (
            <Image
              height="100%"
              width="100%"
              layout="responsive"
              src={URL.createObjectURL(images[0])}
              alt=""
              style={{
                // position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "15px",
              }}
            />
          )}
        </Box>
      </Box>
      <Stack
        direction="column"
        alignItems="center"
        sx={{ justifyContent: { md: "center" }, position: "relative" }}
        //   bgcolor="green"
        height="100%"
      >
        <TextField
          label="タイトル"
          placeholder="タイトル"
          sx={{ width: { xs: "80%", md: "90%" }, pb: 3, fontWeight: "bold" }}
        ></TextField>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: { xs: "80%", md: "90%" } }}
        >
          <FormControl sx={{ width: "45%" }}>
            <FormLabel>都道府県</FormLabel>
            <Autocomplete
              options={prefectureOptions}
              placeholder="都道府県"
              getOptionLabel={(option) => option.name}
              // sx={{ width: "100%" }}
            />
            <FormHelperText></FormHelperText>
          </FormControl>
          <FormControl sx={{ width: "45%" }}>
            <FormLabel>日時</FormLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{
                  "& .css-yptv1a-MuiInputBase-root-MuiOutlinedInput-root": {
                    backgroundColor: "background.paper",
                    minHeight: "2.0rem",
                    height: "39px",
                    fontSize: "0.9rem",
                    borderRadius: "8px",
                  },
                  "& .css-jck64u-MuiSvgIcon-root": {
                    fontSize: "1.1rem",
                  },
                }}
                defaultValue={dayjs()}
                onError={(newError) => setDateError(newError)}
                // minDate={startOfQ12022}
                maxDate={dayjs()}
              />
            </LocalizationProvider>
            <FormHelperText>{dateErrorMessage}</FormHelperText>
          </FormControl>
        </Stack>
        <FormControl
          sx={{
            width: { xs: "80%", md: "90%" },
            height: "60%",
            maxHeight: "400px",
            pt: 2,
          }}
        >
          <FormLabel>内容</FormLabel>
          <Textarea
            sx={{ height: "100%" }}
            placeholder="コンテンツを入力"
            minRows={2}
          />
          <FormHelperText></FormHelperText>
        </FormControl>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="space-around"
          sx={{
            position: "absolute",
            top: "10%",
            right: -60,
            height: "30%",
            backgroundColor: "background.paper",
            // opacity: "0.6",
            borderRadius: "20px",
            width: "60px",
          }}
        >
          <IconButton>
            <Place />
          </IconButton>
          <IconButton>
            <Payment />
          </IconButton>
          <IconButton>
            <PeopleOutline />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};
