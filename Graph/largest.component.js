const largestComponent = (graph) => {
    const visited = new Set();
    let longest = 0;
    for (let node in graph) {
        const size = exploreSize(graph, node, visited);
        if (size > longest) longest = size;
    }

    return longest;
};

const exploreSize = (graph, current, visited) => {
    if (visited.has(current)) return 0;

    visited.add(current);

    let size = 1;

    for (let neighbor of graph[current]) {
        size += exploreSize(graph, neighbor, visited)
    }

    return size;
};