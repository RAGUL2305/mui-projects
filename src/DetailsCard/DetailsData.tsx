import { Grid } from "@mui/material";
import React from "react";
import DetailsCard from "./DetailsCard";

export interface AuthorsType {
  icon: string;
  name: string;
  date: string;
  image: string;
}

const authors: AuthorsType[] = [
  {
    icon: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-1.webp",
    name: "Jayvion Simon",
    date: "26 Aug 2024  11.33 am",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpv0g_eIPM8UMwYQptGf3Pf_5qPJ5nX4fL90yYr6ZZGHDQx7RkGy-TrDuSwE2Ow2qHB0&usqp=CAU",
  },
  {
    icon: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-2.webp",
    name: "Lucian Oberien",
    date: "25 Aug 2024 10.33 am",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDss3HkeuG7UWEQ9_PujviIeUJN80XtVhbnTZTMMvwEzNmXVr4rNGDXJXW90zHcFOJbOI&usqp=CAU",
  },
  {
    icon: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-3.webp",
    name: "Deja Brady",
    date: "24 Aug 2024 9.33 am",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTemtqbugNipSNjAFCpzE9qYfZ4BclNcP3J3g&s",
  },
];

const DetailsData = () => {
  return (
    <Grid>
      <DetailsCard authors={authors} />
    </Grid>
  );
};

export default DetailsData;
