function printNames(){

    var dataset = labels.property("name");
    console.log(`Name` + dataset);

}



var labels = d3.selectAll("#text").on("change", printNames);
