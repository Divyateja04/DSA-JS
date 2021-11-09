//A set of values related in a pair wise fashion and this is the most used Datastructure
//Each point is a node or a vertex while each connection is an edge or basically it represents links or relationships
//Used for recommendations and stuff like that

//Types of Graphs:
//1. Directed and undirected graphs:
//Directed are used for describing flows and it's unidirectional while undirected doesn't have any such conditions. Directed is one way while undirected is like a highway. Facebook is undirected(friends) while twitter is directed(follows)

//2. Weighted and Unweighted Graphs
//In weighted graphs we can have numbers in the edges also example: google maps(distances) and calculating optimum paths

//3. Cyclic and Acyclic Graphs:
//Cyclic graphs Start and end at the same point
//Acyclic graphs are not cyclic in nature

//Graph Representation
//Graph is 2---0
//        / \
//       1---3

//Edge List
const graph = [[0, 2], [2, 3], [2, 1], [1, 3]];
//This simple is showing the connection lines

//Adjacent List
const graph = [[2], [2, 3], [0,1,3], [1, 2]]
//Here graph[index] shows the other neighbours it's connected to
//For example, 0 is connected to 2 and in the graph each number shows it's index
//We can also use Objects

//Adjacent Matrix
const graph = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0]
]
//Basically same as previous one but instead of us showing the connected ones we are using matrix to show which is connected to it(1) and which is not(0)

//https://www.youtube.com/watch?v=5hPfm_uqXmw

//Graphs Review:
//Pros:
//Relationships

//Cons:
//Scaling is hard