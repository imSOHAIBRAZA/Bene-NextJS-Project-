import React from 'react';
import TabButton from "./TabButton";


//** CATEGORIES ALL TAB BUTTONS **//

const TabList = [
  {
    title: "Featured",

  },
  {
    title: "All",

  },
  {
    title: "Oils",

  },
  {
    title: "Capsules",

  },
  {
    title: "Topicals",

  },
  {
    title: "Edibles",

  },
  {
    title: "Pets",

  }
];
const tabButton = TabList.map(e => <TabButton title={e.title} />)
const TabAllButton = () => (
  <ul class="nav nav-pills">
    {tabButton}
  </ul>
);

export default TabAllButton;
