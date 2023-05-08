import { Box, Button, Fab, Stack } from "@mui/material";
import Image, { ImageProps } from "next/image";
import React, { useState, useRef, useCallback, useEffect } from "react";
import ReactCrop, { Crop } from "react-image-crop";
import { Crop as CropIcon } from "@mui/icons-material";
import "react-image-crop/dist/ReactCrop.css";

type ImagesProps = {
  selectedImages: File[] | null;
  setSelectedImages: React.Dispatch<React.SetStateAction<File[] | null>>;
};

const CreatePostImage: React.FC<ImagesProps> = ({
  selectedImages,
  setSelectedImages,
}) => {
  const [src, setSrc] = useState<string | ArrayBuffer | null>(null);
  const [crop, setCrop] = useState<any>({ aspect: 1 });
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [croppedFile, setCroppedFile] = useState<File | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [cropped, setCropped] = useState<boolean>(false);

  useEffect(() => {
    if (selectedImages) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setSrc(reader.result));
      reader.readAsDataURL(selectedImages[0]);
    }
  }, [selectedImages]);

  const onImageLoaded = (image: HTMLImageElement) => {
    imgRef.current = image;
  };

  const onCropComplete = useCallback(async () => {
    if (imgRef.current && crop.width && crop.height) {
      const { croppedImageUrl, file } = await getCroppedImg(
        imgRef.current,
        crop,
        "image/jpeg",
        "cropped-image.jpg"
      );
      setPreviewUrl(croppedImageUrl);
      setCroppedFile(file);
    }
  }, [crop]);

  const getCroppedImg = async (
    image: HTMLImageElement,
    crop: Crop,
    mimeType: string,
    fileName: string
  ): Promise<{ croppedImageUrl: string; file: File }> => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d")!;

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const croppedImageUrl = canvas.toDataURL(mimeType);
    const blob = await new Promise<any>((resolve) =>
      canvas.toBlob(resolve, mimeType, 1)
    );
    const file = new File([blob], fileName, { type: mimeType });

    return { croppedImageUrl, file };
  };

  const onClipClick = () => {
    setCropped(true);
    onCropComplete();
  };

  const handleOnSave = () => {
    if (croppedFile) {
      setSelectedImages((prevArray) => {
        const prevImages = prevArray || []; // Use an empty array if prevArray is null
        return [croppedFile, ...prevImages.slice(1)];
      });
      setCropped(false);
    }
  };

  const backBeforeCrop = () => {
    setCropped(false);
    setPreviewUrl(null);
  };

  return (
    <>
      <Box
        height="100%"
        width="100%"
        display="flex"
        alignItems="center"
        className="App"
      >
        <Box
          height="100%"
          width="100%"
          overflow="hidden"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          className="Crop-Controls"
          sx={{
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          {src && cropped == false && (
            <>
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <ReactCrop
                  style={{
                    height: "auto",
                    margin: "auto",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    position: "relative",
                  }}
                  src={src as string}
                  crop={crop}
                  ruleOfThirds={true}
                  onChange={(newCrop) => setCrop(newCrop)}
                  onImageLoaded={onImageLoaded}
                />
                <Fab
                  aria-label="crop"
                  size="medium"
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    backgroundColor: "background.paper",
                  }}
                  disabled={crop.height == 0 || crop.width == 0}
                  onClick={onClipClick}
                >
                  <CropIcon />
                </Fab>
              </Box>
            </>
          )}
          {previewUrl && cropped == true && (
            <>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-evenly"
                alignItems="center"
                height="auto"
                width="100%"
              >
                <img
                  style={{
                    width: "auto",
                    height: "auto",
                    maxHeight: "80%",
                    maxWidth: "80%",
                  }}
                  src={previewUrl}
                  alt="Preview"
                />
                <Stack
                  direction="row"
                  justifyContent="space-around"
                  width="40%"
                >
                  <Button onClick={backBeforeCrop}>戻る</Button>
                  <Button onClick={handleOnSave}>保存</Button>
                </Stack>
              </Box>
              {/* <button onClick={onUploadClick}>アップロード</button> */}
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default CreatePostImage;
