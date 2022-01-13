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

const BFS = (graph, startNode) => {
  let need2visit = [];
  const visited = [];

  need2visit.push(startNode);

  while (need2visit.length !== 0) {
    const node = need2visit.shift();

    if (visited.indexOf(node) === -1) {
      visited.push(node);
      need2visit = [...need2visit, ...graph[node]];
    }
  }

  return visited;
};

console.log(BFS(graph, "A"));
