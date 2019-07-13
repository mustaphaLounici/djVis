import createGraph from "ngraph.graph";
export const GraphFromMat = data => {
  data = data.toString();
  data = data.split("\n");
  data = data.map(d => {
    let line = d.split(";");
    line.pop();
    return line.map(n => parseInt(n));
  });
  let nodes = [...Array(data[0].length).keys()];
  const links = [];
  data.forEach((line, i) => {
    line.forEach((d, j) => d === 1 && links.push({ source: i, target: j }));
  });
  nodes = nodes.map(i => ({
    id: i
  }));
  return {
    nodes,
    links
  };
};

export const createNgraph = ({ nodes, links }) => {
  const g = createGraph();
  links.forEach(link => {
    g.addLink(link.source, link.target);
  });
  return g;
};
export const createPackData = ({ clusters }) => {
  const data = {
    name: "",
    children: clusters.map((c, i) => {
      let children = c.map(node => ({ name: node + "", value: 1 }));
      return {
        name: "",
        children
      };
    })
  };

  return data;
};
// return nodes list
export const GraphFromClust = clustString =>
  clustString.split(",").map(node => ({
    node
  }));
