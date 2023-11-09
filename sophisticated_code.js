// Filename: sophisticated_code.js

// This javascript code demonstrates an implementation of a complex algorithm for finding the shortest path in a weighted graph using Dijkstra's algorithm.

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.edges[node] = {};
  }

  addEdge(nodeA, nodeB, weight) {
    this.edges[nodeA][nodeB] = weight;
    this.edges[nodeB][nodeA] = weight;
  }

  dijkstra(start) {
    // Initializing distance and visited array
    let distances = {};
    let visited = {};
    let currentNode = null;

    for (let i = 0; i < this.nodes.length; i++) {
      distances[this.nodes[i]] = Infinity;
      visited[this.nodes[i]] = false;
    }

    distances[start] = 0;

    // Finding the shortest path for all the nodes
    for (let i = 0; i < this.nodes.length - 1; i++) {
      let minDistance = Infinity;

      // Find the node with the minimum distance
      // from the set of unvisited nodes
      for (let j = 0; j < this.nodes.length; j++) {
        if (visited[this.nodes[j]] === false && distances[this.nodes[j]] < minDistance) {
          minDistance = distances[this.nodes[j]];
          currentNode = this.nodes[j];
        }
      }

      // Mark the selected node as visited
      visited[currentNode] = true;

      // Update distances of the adjacent nodes
      for (let neighbor in this.edges[currentNode]) {
        let distance = distances[currentNode] + this.edges[currentNode][neighbor];

        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
        }
      }
    }

    return distances;
  }
}

// Usage of the graph class and Dijkstra's algorithm
let graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge("A", "B", 3);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "D", 5);
graph.addEdge("C", "D", 1);
graph.addEdge("C", "E", 4);
graph.addEdge("D", "E", 6);

let shortestDistances = graph.dijkstra("A");

console.log("Shortest distances from node A: ", shortestDistances);
