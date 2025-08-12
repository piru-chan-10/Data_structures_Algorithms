// making a graph data strucutre
class Graph{
    constructor(adjacency){
        this.adjacency_list=adjacency;
    }
    add_Vertex(vertex){
        Object.assign(this.adjacency_list,vertex);
    }
    // @params V1,V2 are string values 
    add_Edge(V1,V2){
        if(V1 in this.adjacency_list){
            this.adjacency_list[V1].push(V2);
        }
        if(V2 in this.adjacency_list){
            this.adjacency_list[V2].push(V1)
        }
     }
    // A normal traverse searching all edge all vertices;
    N_traverse(){
        for(let key in this.adjacency_list){
            console.log(key,'======>',this.adjacency_list[key])
        }
    }
    // method to find edges
    has_Edge(V1,V2){
        if(this.adjacency_list[V1].includes(V2)){
            return true;
        }
        else return false;
    }
    // now deleting an adge
    remove_Edge(V1,V2){
        // removing from V1 
        this.adjacency_list[V1].forEach((element,index) => {
            if(element===V2){
                this.adjacency_list[V1][index]=null;
            }});
        // removing from V2
        this.adjacency_list[V2].forEach((element,index)=>{
            if(element===V1){
                this.adjacency_list[V2][index]=null;
            } });
    }
    // it deletes a whole vertex from the adjacency list
    remove_Vertex(V){
       delete this.adjacency_list[V];
       for(let key in this.adjacency_list){
        this.adjacency_list[key]=this.adjacency_list[key].filter(item=>item!=V);
       }

    }
    // Now main traversal algorithms

}
// creating a new Graph object
let myGraph=new Graph({
    "A":["B","C"],
    "B":["A"],
    "C":["A","B"]
})
console.log(myGraph.adjacency_list)
// checking add_Vertex()
myGraph.add_Vertex({
    "D":["A"],
    "F":["A","B","D"]
})
console.log(myGraph.adjacency_list)
// checking add_Edge()
myGraph.add_Edge("D","B")
console.log(myGraph.adjacency_list)
// checking N_traverse()
myGraph.N_traverse()
// checking has_Edge method
console.log(myGraph.has_Edge("A","D"))
// checking remove_Edge() method 
myGraph.remove_Edge("B","A");
console.log(myGraph.adjacency_list)
// checking remove vertex
myGraph.remove_Vertex("B");
myGraph.N_traverse()
