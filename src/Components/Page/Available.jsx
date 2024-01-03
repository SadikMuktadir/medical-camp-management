import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useItem from "../../Hooks/useItem";
import ItemsData from "../Available/ItemsData";
import { useState } from "react";
import { Link } from "react-router-dom";

const Available = () => {
    const [data] = useItem();
    const general = data.filter((item) => item.category === "general");
    const pediatric = data.filter((item) => item.category === "pediatric");
    const cardiovascular = data.filter((item) => item.category === "cardiovascular");
    const womenHealth = data.filter((item) => item.category === "womenHealth");
    const popular = data.filter((item) => item.category === "popular");
    const diabetes = data.filter((item) => item.category === "diabetes");
  return (
    <div>
      <Tabs>
        <TabList className="flex justify-center my-[80px]">
          <Tab>General</Tab>
          <Tab>Pediatric</Tab>
          <Tab>Cardiovascular</Tab>
          <Tab>Women Health</Tab>
          <Tab>Diabetes</Tab>
          <Tab>Popular</Tab>
        </TabList>

        <TabPanel>
            <ItemsData items={general}></ItemsData>
        </TabPanel>
        <TabPanel>
            <ItemsData items={pediatric}></ItemsData>
        </TabPanel>
        <TabPanel>
            <ItemsData items={cardiovascular}></ItemsData>
        </TabPanel>
        <TabPanel>
            <ItemsData items={womenHealth}></ItemsData>
        </TabPanel>
        <TabPanel>
            <ItemsData items={diabetes}></ItemsData>
        </TabPanel>
        <TabPanel>
            <ItemsData items={popular}></ItemsData>
        </TabPanel>
        
      </Tabs>
      {/* <div className="flex justify-center">
        <Link to="/seeAll"><button className="bg-[#8D5CF6] px-5 py-3 rounded-[10px] text-white">See All</button></Link>
      </div> */}
    </div>
  );
};

export default Available;
