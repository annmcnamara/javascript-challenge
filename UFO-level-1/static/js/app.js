var text = d3.selectAll("#text");
//var text = d3.selectAll("#form-control>name")

function cleanUpValue(key, value){
    if(key === "comments"){
        value = value.replace(/[\&\#443933]/g," ");
        //value = value.replace(/[\&\#33]/g," ");
        //value = value.replace(/[\&\#39]/g," ");
    }

    if(key==='state' || key === 'country'){
        value = value.toUpperCase();
    }

    if(key=='city' || key=='shape'){
        value = value.charAt(0).toUpperCase() + value.slice(1);
    }

    return value;
}

function createTable(tableData) {

    var tbody = d3.select("tbody");

    console.log(tbody);

    tableData.forEach((rows)=>{
        //console.log(rows);
        var row = tbody.append("tr");
        Object.entries(rows).forEach(([key, value])=>{
            //console.log(`${key}: ${value}`)
            value = cleanUpValue(key, value);

            row.append("td").text(value);
        });
    });
}
  
//createTable(data);

function filterTable(sighting) {
    //var x = document.getElementByName("datetime");
    var inputElement = d3.select("#text");
    var inputElement = d3.selectAll(".form-control")

    // Get the value property of the input element
    console.log(inputElement.keys)
    var inputValue = inputElement.property("value");
    var inputName  = inputElement.property("name");

    console.log(inputValue);
    console.log(inputName);
    //console.log(`${inputValue} compared to ${sighting.datetime}`);

    return(inputValue === sighting.datetime)
}

function printTable(results){
    Object.entries(results).forEach(([key, value])=>{
        console.log(value);
    });
}

function loadAll (){
    createTable(data)
}

var loadAllButton = d3.select("#loadall-btn");
loadAllButton.on("click", function(){
    var tbody = d3.select("tbody");

    tbody.selectAll('tr').remove();

    //console.log(`LOAD ALL TBODY ${tbody}`);

    createTable(data);
    //console.log(data)
});

var button = d3.select("#filter-btn");

button.on("click", function (){
    var results = data.filter(filterTable);

    var tbody = d3.select("tbody");
    tbody.selectAll('tr').remove();

    createTable(results)
    //console.log(results)
});

function handleChange(event){
    var filterValue = d3.event.target.value;
    var filterField = d3.event.target.name;
    
    console.log(filterValue);

    console.log(filterField)

    // var inputElement = d3.selectAll(".form-control")


    // var inputName  = inputElement.property("name");

    // console.log(inputName);

}

text.on("change", handleChange);