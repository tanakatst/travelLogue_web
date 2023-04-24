import React, { ChangeEvent, useState } from "react";
import { Box, useTheme, Stack, Divider } from "@mui/material";
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
import { Add, Upload } from "@mui/icons-material";
import {
  DatePicker,
  DateValidationError,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Image from "next/image";
import styles from "./Image.module.css";
// 画面大きさmd以上の時

const CreatePost = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme().palette;
  // imageのstateを持つ。
  const [selectedImages, setSelectedImages] = useState<File[] | null>(null);
  console.log(selectedImages);

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
  console.log(page);

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
              page != 3
                ? { xs: "70%", sm: "70%", md: "70%", lg: "80%" }
                : "95%",
            width:
              page != 3
                ? { xs: "80%", sm: "60%", md: "50%", lg: "40%" }
                : "80%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: theme.background.paper,
            borderRadius: "md",
            p: 3,
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
          {page < 3 && (
            <Button
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
              sx={{ position: "absolute", left: "30px" }}
              onClick={() => {
                page - 1 > 0 && setPage(page - 1);
              }}
            >
              戻る
            </Button>
          )}
          <Box
            height="100%"
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              width="100%"
              textAlign="center"
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              fontWeight="lg"
              pt={1}
            >
              New Post
            </Typography>
            {page == 1 && (
              <Stack width="100%" height="80%" alignItems="center">
                <SelectImages handleChangeImages={handleChangeImage} />
              </Stack>
            )}
            {page == 2 && <PreviewImages images={selectedImages} />}
            {page == 3 && <CreateDetails />}
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
      }}
      borderRadius="20px"
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
      <Upload fontSize="large" />
      <Typography sx={{ color: "primary.main", fontWeight: "bold" }}>
        ここに画像をアップロード
      </Typography>
    </Stack>
  );
};

type PreviewImagesProps = {
  images: File[] | null;
};
// page2
const PreviewImages = ({ images }: PreviewImagesProps) => {
  return (
    <Box height="100%" width="100%" py={2}>
      {images && (
        <Image
          height="46px"
          width="50px"
          layout="responsive"
          className={styles.image}
          src={URL.createObjectURL(images[0])}
        />
      )}
    </Box>
  );
};

// page3
const CreateDetails = () => {
  const [dateError, setDateError] = React.useState<DateValidationError | null>(
    null
  );

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
  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", md: "row" },
        alignItems: { sm: "center" },
        justifyContent: { md: "center" },
      }}
      width="90%"
      height="100%"
      p={3}
      pt={3}
    >
      <Box
        p={3}
        sx={{
          width: { xs: "90%", md: "60%" },
          height: { xs: "60%", md: "90%" },
        }}
        width="60%"
        height="100%"
      >
        <Box height="100%" width="100%" sx={{ position: "relative" }}>
          <Image
            height="100%"
            width="100%"
            layout="responsive"
            src="data:image/jpeg;base64,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"
            alt=""
            style={{ position: "absolute", width: "100%", height: "100%" }}
          />
        </Box>
      </Box>
      <Stack
        direction="column"
        alignItems="center"
        sx={{ justifyContent: { md: "center" } }}
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
              placeholder="都道府県"
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
            placeholder="Placeholder"
            minRows={2}
          />
          <FormHelperText></FormHelperText>
        </FormControl>
      </Stack>
    </Stack>
  );
};
