import React  from "react";
import InternshipCard from './component/intershipCard';
function App() {
  const data = {

    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris.",

    title: 'Summer Training',
    poweredBy:
    {
      name: "MyhashCode",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
    },

    location:
    {
      city: "Jaipur",
      state: "Rajasthan",
      remote: false
    },
    startDate: "15-07-2021",

    duration:
    {
      numOf: 2,
      units: "Months"
    },
    applyBy: "10-07-2021",

    stipend: 10000,
  }
  return (
    <>
      <InternshipCard data={data} />
      <InternshipCard data={data} />
      <InternshipCard data={data} />
    </>
  );
}

export default App;