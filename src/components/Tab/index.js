
import React, { useEffect, useState } from "react";
// import "./index.css";

const Tab = ({ children, active = 0 }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    let data = [];

    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;

      const {
        props: { tab, children },
      } = element;
      data.push({ tab, children });
    });

    setTabsData(data);
  }, [children]);

  return (
    <div className="">
      <ul className="flex cursor-pointer">
        {tabsData.map(({ tab }, idx) => (
          <li key={idx}
          className={`${idx === activeTab ? "w-auto py-2 px-10 bg-putih border-t-4 border-blue-900 border-opacity-90 shadow-t-lg rounded-t-md text-xl" : "w-auto py-2 px-10 bg-putih bg-opacity-40 rounded-none text-xl"}`}>
              
            <a
              className={`${idx === activeTab ? "font-semibold" : ""}`}
            //   href="#/KelolaSurat"
              onClick={() => setActiveTab(idx)}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>

      <div className="">
        {tabsData[activeTab] && tabsData[activeTab].children}
      </div>
    </div>
  );
};

const TabPane = ({ children }) => {
  return { children };
};

Tab.TabPane = TabPane;

export default Tab;