import React, { useState, useRef } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Button, Card, styled } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { booksData } from "./BooksData";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Carousel() {
  const imageRef = useRef<HTMLUListElement>(null);
  const [uploadedImages, setUploadedImages] = useState<string[]>(
    booksData.map((item) => item.coverImage)
  );

  const [images, setImages] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/220px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg"
  );

  const scrollLeft = () => {
    if (imageRef.current) {
      imageRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (imageRef.current) {
      imageRef.current.scrollLeft += 200;
    }
  };

  const handleChange = (item: string) => {
    setImages(item);
  };

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files;
    if (file) {
      Array.from(file).forEach((file) => {
        const newImageUrl = URL.createObjectURL(file);
        setUploadedImages((prevImages) => [...prevImages, newImageUrl]);
      });
    }
  };

  return (
    <Card sx={{ width: 500, p: 2 }}>
      <Card sx={{ width: 470, height: 650 }}>
        <ImageListItem>
          <img src={images} alt="images" />
        </ImageListItem>
      </Card>
      <Card sx={{ width: 500, display: "flex", mt: 4 }}>
        <Button onClick={scrollLeft}>
          <ArrowBackIosIcon />
        </Button>
        <Box sx={{ width: 380 }}>
          <ImageList
            cols={uploadedImages.length}
            ref={imageRef}
            sx={{ scrollbarWidth: "none", overflow: "hidden" }}
          >
            {uploadedImages
              .filter((item) => item !== images)
              .map((item) => (
                <ImageListItem sx={{ width: 72 }} key={item}>
                  <img
                    onDragEnd={() => handleChange(item)}
                    src={item}
                    loading="lazy"
                    alt={item}
                  />
                </ImageListItem>
              ))}
          </ImageList>
        </Box>
        <Button onClick={scrollRight}>
          <ArrowForwardIosIcon />
        </Button>
      </Card>
      <Card
        sx={{
          width: 469,
          display: "flex",
          justifyContent: "center",
          p: 2,
          mt: 2,
        }}
      >
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload files
          <VisuallyHiddenInput
            accept="image/png, image/gif, image/jpeg, image/jpg"
            type="file"
            onChange={handleImageUpload}
            multiple
          />
        </Button>
      </Card>
    </Card>
  );
}
