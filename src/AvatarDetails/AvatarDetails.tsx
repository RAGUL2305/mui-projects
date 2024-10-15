import React from "react";
import { Grid } from "@mui/material";
import AvatarList from "./AvatarList";


export interface AuthorsType{
    id:number;
    icon:string;
    name:string;
    email:string;
  }

  const authors:AuthorsType[] = [
    {id:1,icon:"https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-1.webp",name:"Jayvion Simon",email:"nannie.abernathy70@yahoo.com"},
    {id:2,icon:"https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-2.webp",name:"Lucian Oberien",email:"ashlynn.ohara62@gmail.com"},
    {id:3,icon:"https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-3.webp",name:"DEja Brady",email:"milo.farrell@hotmail.com"},
    {id:4,icon:"https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-4.webp",name:"Harrison Stein",email:"violet.ratke86@yahoo.com"},
    {id:5,icon:"https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-5.webp",name:"Reece Chung",email:"letha.lubowitz24@yahoo.com"},
    {id:6,icon:"https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-6.webp",name:"Ragul",email:"nannie.abernathy70@yahoo.com"},
    {id:7,icon:"https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-7.webp",name:"Tamil",email:"ashlynn.ohara62@gmail.com"},
    {id:8,icon:"https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-8.webp",name:"Vasanth",email:"milo.farrell@hotmail.com"},
    {id:9,icon:"https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-9.webp",name:"Gopi",email:"violet.ratke86@yahoo.com"},
    {id:10,icon:"https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-10.webp",name:"Arun",email:"violet.ratke86@yahoo.com"}
  ]


  const AuthorsDetails = () =>{
    return(
        <Grid>
            <AvatarList authors = {authors}/>
        </Grid>
    )
  }
  export default AuthorsDetails;