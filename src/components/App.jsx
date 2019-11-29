import React from "react";
import Header from "./Header";
import Ad from "./Ad";
import addData from "../addData";

function createAdd(ad) {
  return (
    <Ad
      tag={ad.tag}
      key={ad.id}
      name={ad.name}
      img={ad.imgUrl}
      phone={ad.phone}
    />
  );
}

function App() {
  return (
    <div className="wrapper">
      <Header />
      {addData.map(createAdd)}
    </div>
  );
}

export default App;
