var filterValue;
var filterName;

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


function filterDate(sighting){
    var inputElement = d3.selectAll(".form-control")

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var inputName  = inputElement.property("name");

    // console.log(inputValue);
    // console.log(inputName);
    //console.log(`${inputValue} compared to ${sighting.datetime}`);
    //console.log("Filtering Date");

    return(inputValue === sighting.datetime)

}

function filterCity(sighting){
    console.log(`${filterValue} compared to ${sighting.city}`);
    return(filterValue === sighting.city)
}


function filterData(sighting){
    console.log(`${filterName}: ${filterValue} compared to ${sighting.city}`);
    switch(filterName) {
        case "datetime":
          // code block
          console.log(`${filterValue} compared to ${sighting.datetime}`);

          return(filterValue === sighting.datetime);
          break;
        case "city":
          // code block
          console.log(`${filterValue} compared to ${sighting.city}`);
          return(filterValue === sighting.city)
          break;
        default:
          // code block
      }



}

function filterTable2(sighting) {
    //var x = document.getElementByName("datetime");
    // var inputElement = d3.select("#text");

    console.log(`Filter Value: ${filterValue}`);
    console.log(`Filter Field: ${filterField}`)

    if(filterField === 'datetime'){
        console.log("DATETIME");
        var inputElement = d3.selectAll(".form-control").filter(function(d, i) { return i === 0}); 
        var inputValue = inputElement.property("value");
        var inputName  = inputElement.property("name");
    
        console.log(`TARGET ${inputValue}`);
        console.log(`FIELD ${inputName}`);
    
        console.log(`${inputValue} compared to ${sighting.datetime}`);
    
        return(inputValue === sighting.datetime)
    }

    if(filterField === 'city'){
        console.log("CITY");
        var inputElement = d3.selectAll(".form-control").filter(function(d, i) { return i === 1}); 
        var inputValue = inputElement.property("value");
        var inputName  = inputElement.property("name");
    
        console.log(`TARGET ${inputValue}`);
        console.log(`FIELD ${inputName}`);
    
    
        console.log(`${inputValue} compared to ${sighting.city}`);
    
        return(inputValue === sighting.city)
    }
    //var inputElement = d3.selectAll(".form-control").filter(function(d, i) { return i === 1}); 

    //console.log(inputElement.property.length);

    // var inputValue = inputElement.property("value");
    // var inputName  = inputElement.property("name");

    // console.log(`TARGET ${inputValue}`);
    // console.log(`FIELD ${inputName}`);


    // console.log(`${inputValue} compared to ${sighting.city}`);

    // return(inputValue === sighting.city)
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
    filterValue = d3.event.target.value;
    filterName = d3.event.target.name;
    
    console.log(`Handle Change Value: ${filterValue}`);
    console.log(`Handle Change Value: ${filterName}`)

    // var inputElement = d3.selectAll(".form-control")
    // var inputName  = inputElement.property("name");
    // console.log(inputName);
    console.log(this.name);
    console.log(this.value)

    // if(filterField === "datetime"){
    //     var results = data.filter(filterDate);
    // }
    // if(filterField === "city"){
    //     var results = data.filter(filterCity);
    // }

    var results = data.filter(filterData)

    var tbody = d3.select("tbody");
    tbody.selectAll('tr').remove();

    createTable(results)
    //console.log(results)

}

text.on("change", handleChange);