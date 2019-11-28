import React from "react";
import Header from "./Header";
import Ad from "./Ad";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Ad
        tag="eric"
        name="Eric Andre"
        img="https://i.ytimg.com/vi/8OWsHkIMTsg/maxresdefault.jpg"
        phone="219 573 8383"
      />
      <Ad
        name="Pablo Escobar"
        img="https://cdn.britannica.com/15/188715-050-94EA4753/Pablo-Escobar-1991.jpg"
        phone="+3 73 29 92 18"
      />
      <Ad
        name="Hank Hill"
        img="https://i.redd.it/j2jdb56u6n9z.jpg"
        phone="504 983 8373"
      />
      <Ad
        tag="joe"
        name="Joe Rogan"
        img="https://media1.tenor.com/images/39227133f978ee222942a4566ee9971c/tenor.gif?itemid=12472661"
        phone="219 098 3827"
      />
    </div>
  );
}

export default App;
