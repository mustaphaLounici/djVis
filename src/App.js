import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import PackClusters from "./components/PackClusters";
import ForceClusters from "./components/ForceClusters";

import ClustersList from "./components/ClustersList";

function App() {
  const [graph, setGraph] = useState({ nodes: [], links: [], clusters: [] });
  console.log(graph);
  return (
    <div className="App">
      <div className="d-flex border p-4">
        {graph && <PackClusters graph={graph} />}
      </div>
      <div className="d-flex">
        {graph && <ForceClusters graph={graph} />}
        {graph && <ClustersList setGraph={setGraph} />}
      </div>
    </div>
  );
}

export default App;
