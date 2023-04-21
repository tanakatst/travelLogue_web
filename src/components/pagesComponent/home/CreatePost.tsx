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
} from "@mui/joy";
import Autocomplete from "@mui/joy/Autocomplete";
import { Add, Upload } from "@mui/icons-material";

// 画面大きさmd以上の時

const CreatePost = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme().palette;
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
          <Typography
            textAlign="center"
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            New Post
          </Typography>

          <Box width="90%" height="100%" p={4}>
            <Stack
              direction="column"
              alignItems="center"
              //   bgcolor="green"
              height="100%"
              p={5}
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
                    placeholder="都道府県"
                    // sx={{ width: "100%" }}
                  />
                  <FormHelperText>
                    A description for the combo box.
                  </FormHelperText>
                </FormControl>
                <FormControl sx={{ width: "45%" }}>
                  <FormLabel>日時</FormLabel>
                  <Autocomplete
                    placeholder="Placeholder"
                    // sx={{ width: "100%" }}
                  />
                  <FormHelperText>
                    A description for the combo box.
                  </FormHelperText>
                </FormControl>
              </Stack>
              <FormControl sx={{width:'80%', height:'900px', maxHeight:'300px'}}>
                <FormLabel>Label</FormLabel>
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
                width="70%"
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
