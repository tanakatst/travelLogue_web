import React, { useState } from "react";
import { Box, useTheme, Stack } from "@mui/material";
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
// 画面大きさmd以上の時

const CreatePost = () => {
  const [open, setOpen] = useState(false);
  const [dateError, setDateError] = React.useState<DateValidationError | null>(
    null
  );
  const theme = useTheme().palette;

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
            height: "95%",
            width: "95%",
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
          <Button sx={{ position: "absolute", right: "30px" }}>
            プレビュー
          </Button>

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

          <Box width="90%" height="100%" p={3} pt={1}>
            <Stack
              direction="column"
              alignItems="center"
              //   bgcolor="green"
              height="100%"
              pt={2}
              px={7}
            >
              <TextField
                label="タイトル:"
                sx={{ width: "80%", pb: 2, fontWeight: "bold" }}
              ></TextField>
              <Stack width="80%" direction="row" justifyContent="space-between">
                <FormControl sx={{ width: "45%" }}>
                  <FormLabel>都道府県</FormLabel>
                  <Autocomplete
                    placeholder="Placeholder"
                    // sx={{ width: "100%" }}
                  />
                  <FormHelperText>
                    A description for the combo box.
                  </FormHelperText>
                </FormControl>
                <FormControl sx={{ width: "45%" }}>
                  <FormLabel>日時</FormLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{
                        "& .css-yptv1a-MuiInputBase-root-MuiOutlinedInput-root":
                          {
                            backgroundColor: "background.paper",
                            minHeight: "2.0rem",
                            height: "39px",
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
                sx={{ width: "80%", height: "200px", maxHeight: "300px" }}
              >
                <FormLabel>内容</FormLabel>
                <Textarea placeholder="Placeholder" minRows={2} />
                <FormHelperText>This is a helper text.</FormHelperText>
              </FormControl>
              <Stack
                mt={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
                height="160px"
                maxHeight="300px"
                width="80%"
                sx={{
                  position: "relative",
                  cursor: "pointer",
                  backgroundColor: "background.paper",
                }}
                borderRadius={8}
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
                />
                <Upload fontSize="large" />
                <Typography sx={{ color: "primary.main", fontWeight: "bold" }}>
                  画像のアップロード
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Sheet>
      </Modal>
    </>
  );
};

export default CreatePost;
