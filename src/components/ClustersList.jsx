import React, { useState } from "react";

function ClustersList({ setGraph }) {
  const [clusters, setClusters] = useState([[]]);
  const updateClusters = () => {
    let nodes = [];

    clusters.forEach(c => (nodes = [...nodes, ...c]));
    nodes = [...new Set(nodes)];
    nodes = nodes.filter(a => a);

    let links = [];

    let newClusters = clusters.map(c => c.filter(a => a));

    for (let i = 0; i < nodes.length - 1; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        links.push({
          source: i,
          target: j
        });
      }
    }

    // console.log({
    //   clusters: clusters.map(c => c.map(n => parseInt(n)).filter(a => a)),
    //   nodes: nodes.map(n => parseInt(n)).filter(a => a)
    // });

    setGraph({
      clusters: newClusters,
      nodes: nodes.map(n => ({ id: n })),
      links
    });
  };

  const addCluster = () => {
    setClusters([...clusters, []]);
  };
  const removeCluster = id => {
    setClusters(clusters.filter((c, index) => index != id));
  };
  const onChange = (e, id) => {
    setClusters(
      clusters.map((c, i) => (i == id ? e.target.value.split(",") : c))
    );
  };
  return (
    <div className="w-100">
      <ul className="list-group">
        <li className="list-group-item h3 mb-4">Liste des Clusters</li>
        {clusters.map((c, i) => (
          <li className="list-group-item">
            <div className="form-group">
              <label for=""> C{i} :</label>

              <div class="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={c}
                  onChange={e => onChange(e, i)}
                />
                <div class="input-group-append">
                  <button
                    type="button"
                    class="btn btn-danger "
                    onClick={() => removeCluster(i)}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
        <li className="list-group-item border-0 mt-n4 text-right">
          <button type="button" class="btn btn-success " onClick={addCluster}>
            +
          </button>
        </li>
        <li className="list-group-item">
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block"
            onClick={updateClusters}
          >
            Mettre a Jour
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ClustersList;
