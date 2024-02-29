function floydWarshall(graph) {
    const arr = [];
    // инициализация матрицы расстояний
    for (let i = 0; i < graph.length; i++) {
      arr[i] = [];
      for (let j = 0; j < graph.length; j++) {
        if (i === j) {
          arr[i][j] = 0;
        } else if (graph[i][j]) {
          arr[i][j] = graph[i][j];
        } else {
          arr[i][j] = Infinity;
        }
      }
    }
    // основной алгоритм
    for (let k = 0; k < graph.length; k++) {
      for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph.length; j++) {
          if (arr[i][k] !== Infinity && arr[k][j] !== Infinity) {
            arr[i][j] = Math.min(arr[i][j], arr[i][k] + arr[k][j]);
          }
        }
      }
    }
    // возвращаем матрицу расстояний
    return arr;
}
   
// пример использования
const graph = [
    [0, 8, 5],
    [3, 0, Infinity],
    [Infinity, 2, 0],
];
console.log(floydWarshall(graph));
  