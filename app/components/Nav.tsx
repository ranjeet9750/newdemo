"use client";

import { useState } from "react";

const NavItemns = [
  { value: "P&I Online", key: "P&IOnline" },
  { value: "UTOM", key: "utom" },
  { value: "Azure Portal", key: "azurePortal" },
  { value: "SharePoint", key: "Product4" },
  { value: "Tools", key: "Product5" },
];

const DESC = {
  "P&IOnline": [
    {
      text: "DWTEST",
      link: "https://pandionlinedwtest.shipownersclub.com/",
    },
    {
      text: "PREPROD",
      link: "https://pandionlinedwtest.shipownersclub.com/",
    },
    {
      text: "PERFTEST",
      link: "https://pandionlineperf.shipownersclub.com",
    },
    {
      text: "PITEST",
      link: "https://pandionlinepitest.shipownersclub.com",
    },
    {
      text: "DWDEV",
      link: "https://pandionlinedwdev.shipownersclub.com",
    },
    {
      text: "PIDEV",
      link: "https://pandionlinedev.shipownersclub.com",
    },
    {
      text: "PRODTEST",
      link: "https://pandionlineprodtest.shipownersclub.com",
    },
  ],
  azurePortal: [
    {
      text: "PERFTEST",
      link: "https://pandionlineperf.shipownersclub.com",
    },
    {
      text: "PITEST",
      link: "https://pandionlinepitest.shipownersclub.com",
    },
    {
      text: "DWDEV",
      link: "https://pandionlinedwdev.shipownersclub.com",
    },
  ],
};
const Nav = () => {
  const [selectMenu, setSelectedMenu] = useState("P&IOnline");
  const [selectName, setName] = useState("P&I Online");
  const [data, setData] = useState(DESC["P&IOnline"]);
  const NavLinks = ({ value, key }) => {
    const handleClick = () => {
      setSelectedMenu(key);
      setName(value);
    };
    return (
      <div key={key} onClick={handleClick} className="hover:cursor-pointer">
        {value}
      </div>
    );
  };
  const listItems = NavItemns.map(NavLinks);

  return (
    <>
      <div className="flex justify-around  p-[10px] bg-blue-500 p-[20px] text-white bg-gradient-to-r from-violet-600 to-indigo-600">
        {listItems}
      </div>
      <div>
        <ShowInfo data={DESC[selectMenu] || []} name={selectName} />
      </div>
    </>
  );
};

const ShowInfo = ({ data = [], name }) => {
  const PageLinks = ({ text, link }) => {
    return (
      <a href={"/detail/contact"}>
        {" "}
        <div
          key={text}
          className="hover:cursor-pointer  m-[10px] p-[15px] rounded-md font-medium  text-cyan-500 shadow-xl bg-white"
        >
          {text}
        </div>
      </a>
    );
  };
  const listItems = data.map(PageLinks);
  return (
    <div className="w-[80%] mx-auto my-[20px]  items-center justify-center">
      <div className="text-3xl">{name}</div>
      {listItems}
    </div>
  );
};

export default Nav;
