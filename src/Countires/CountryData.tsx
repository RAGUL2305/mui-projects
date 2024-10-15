import React from "react";
import TopCountires from "./Topcountires";

export interface CountryType {
  image: string;
  label: string;
  android: string;
  windows:string;
  ios:string;
}

export interface AuthorsType{
  icon:string;
  name:string;
  rating:string;
}

const countries: CountryType[] = [
  {
    image: "https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
    label: "Germany",
    android: "9.91k",
    windows:"1.95k",
    ios:"9.12k"
  },
  {
    image: "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
    label: "England",
    android: "1.95k",
    windows:"9.12k",
    ios:"6.98k",
  },
  {
    image: "https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg",
    label: "France",
    android: "9.12k",
    windows:"6.98k",
    ios:"8.49k",
  },
  {
    image: "https://purecatamphetamine.github.io/country-flag-icons/3x2/KR.svg",
    label: "Korean",
    android: "6.98k",
    windows:"8.49k",
    ios:"2.03k",
  },
  {
    image: "https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
    label: "USA",
    android: "8.49k",
    windows:"2.03k",
    ios:"3.36k",
  },
  
  {
    image: "https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg",
    label: "France",
    android: "9.12k",
    windows:"6.98k",
    ios:"8.49k",
  },
  {
    image: "https://purecatamphetamine.github.io/country-flag-icons/3x2/KR.svg",
    label: "Korean",
    android: "6.98k",
    windows:"8.49k",
    ios:"2.03k",
  },
  {
    image: "https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
    label: "USA",
    android: "8.49k",
    windows:"2.03k",
    ios:"3.36k",
  },
];

const authors:AuthorsType[] = [
  {icon:"https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-1.webp",name:"Jayvion Simon",rating:"9.91k"},
  {icon:"https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-3.webp",name:"Deja Brady",rating:"9.12k"},
  {icon:"https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-2.webp",name:"Lucian Oberien",rating:"1.95k"}
]

const CountryData = () => {
  return (
    <div>
      <TopCountires data={countries} authors={authors} />
    </div>
  );
};

export default CountryData;
