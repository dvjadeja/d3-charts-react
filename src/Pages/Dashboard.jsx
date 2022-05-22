import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import BarChart from "../Components/BarChart/BarChart";

const Dashboard = () => {
  const generateData = (value, length = 8) =>
    d3.range(length).map((item) => Math.floor(Math.random() * 40 + 5)); // never lower than 5

  const [data, setData] = useState(generateData());
  const changeData = () => {
    setData(generateData());
  };

  useEffect(() => {
    setData(generateData());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!data]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <BarChart randomData={data} width={400} height={400} padding={2} />
      <div style={{marginTop: '20px'}}>
        <button onClick={changeData} style={{ padding: "10px 20px" }}>
          Generate Random Data
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
