import { Box, Fab } from "@mui/material";
import { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { Crop as CropIcon } from "@mui/icons-material";
interface Props {
  imageToCrop: any;
  croppedImage: any;
}

const Cropper: React.FC<Props> = ({ imageToCrop, croppedImage }) => {
  const [crop, setCrop] = useState<any>({
    maxHeight: 800,
    maxWidth: 400,
  });
  const [image, setImage] = useState<any>(null);

  const cropImageNow = () => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx: any = canvas.getContext("2d");

    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

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

    const base64Image = canvas.toDataURL("image/jpeg");
    croppedImage(base64Image);
  };
  return (
    <>
      {imageToCrop && (
        <Box display='flex' alignItems='center' justifyContent='center'>
          <ReactCrop
            style={{
              height: "auto",
              margin: "auto",
              display: "flex",
              flexDirection:'row',
              alignItems: "center",
              position: "relative",
            }}
            src={imageToCrop}
            onImageLoaded={setImage}
            crop={crop}
            onChange={setCrop}
          />
          <Fab
            aria-label="crop"
            size="medium"
            sx={{
              position: "absolute",
              bottom: 20,
              backgroundColor: "background.paper",
            }}
            onClick={cropImageNow}
          >
            <CropIcon />
          </Fab>
        </Box>
      )}
    </>
  );
};

export default Cropper;
