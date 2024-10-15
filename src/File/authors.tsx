import React from "react";
import { Grid } from "@mui/material";
import File from "./File";


export interface AuthorsType{
    icon:string;
    name:string;
    email:string;
  }

  const authors:AuthorsType[] = [
    {icon:"https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-1.webp",name:"Jayvion Simon",email:"nannie.abernathy70@yahoo.com"},
    {icon:"https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-2.webp",name:"Lucian Oberien",email:"ashlynn.ohara62@gmail.com"},
    {icon:"https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-3.webp",name:"DEja Brady",email:"milo.farrell@hotmail.com"},
    {icon:"https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-4.webp",name:"Harrison Stein",email:"violet.ratke86@yahoo.com"},
    {icon:"https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-5.webp",name:"Reece Chung",email:"letha.lubowitz24@yahoo.com"},
    
  ]


  const AuthorsData = () =>{
    return(
        <Grid>
            <File authors = {authors}/>
        </Grid>
    )
  }
  export default AuthorsData