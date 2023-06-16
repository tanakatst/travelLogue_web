import React, { useState, useRef, useCallback } from "react";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

interface ImageUploaderProps {
  onUpload: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onUpload }) => {
  const [src, setSrc] = useState<string | ArrayBuffer | null>(null);
  const [crop, setCrop] = useState<any>({ aspect: 1 });
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [croppedFile, setCroppedFile] = useState<File | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setSrc(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

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
    const blob = await new Promise<Blob>((resolve) =>
      canvas.toBlob(resolve, mimeType)
    );
    const file = new File([blob], fileName, { type: mimeType });

    return { croppedImageUrl, file };
  };

  const onClipClick = () => {
    onCropComplete();
  };

  const onUploadClick = () => {
    if (croppedFile) {
      console.log(URL.createObjectURL(croppedFile))
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={onSelectFile} />
      {src && (
        <>
          <ReactCrop
            src={src as string}
            crop={crop}
            onChange={(newCrop) => setCrop(newCrop)}
            onImageLoaded={onImageLoaded}
          />
          <button onClick={onClipClick}>クリップ</button>
        </>
      )}
      {previewUrl && (
        <>
          <img src={previewUrl} alt="Preview" />
          <button onClick={onUploadClick}>アップロード</button>
        </>
      )}
    </div>
  );
};

export default ImageUploader;
