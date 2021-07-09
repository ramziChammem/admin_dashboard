import React from "react";
import "./Home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import WidgetSml from "../../components/widgetSml/WidgetSml";
import WidgetLrg from "../../components/widgetLrg/WidgetLrg";
export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Users registered"
      />
      <div className="homeWidgets">
        <WidgetSml />
        <WidgetLrg />
      </div>
    </div>
  );
}
