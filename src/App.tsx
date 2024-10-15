import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AuthorsData from "./File/authors";
import Dashboard from "./Dashboard/dashboard";
import CountryData from "./Countires/CountryData";
import DetailsData from "./DetailsCard/DetailsData";
import AvatarList from "./AvatarDetails/AvatarList";
import AuthorsDetails from "./AvatarDetails/AvatarDetails";
import InvoiceTable from "./InvoiceTable/InvoiceTable";
import AvatarForm from "./AvatarForm/AvatarForm";
import Carousel from "./carousel/carousel";

function App() {
  return (
    <div className="App">
      {/* <Dashboard /> */}
      {/* <CountryData /> */}
      {/* //  < AuthorsData/> */}
      {/* <DetailsData /> */}
      {/* <AuthorsDetails /> */}
      {/* <InvoiceTable /> */}
      {/* <AvatarForm /> */}
      <Carousel />
    </div>
  );
}

export default App;
