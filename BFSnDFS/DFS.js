const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D", "E", "F"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const DFS = (graph, startnode) => {
  let need2visit = [];
  const visited = [];

  need2visit.push(startnode);

  while (need2visit.length) {
    const node = need2visit.shift();

    if (visited.indexOf(node) === -1) {
      visited.push(node);
      need2visit = [...graph[node], ...need2visit];
    }
  }

  return visited;
};

console.log(DFS(graph, "A"));
