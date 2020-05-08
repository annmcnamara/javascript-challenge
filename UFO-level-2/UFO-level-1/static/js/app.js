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
  
createTable(data);

function selectDate(sighting) {
    var x = document.getElementById("datetime");
    //var x = d3.select("#datetime");
    //var x = d3.select("#datetime")
    console.log(`${x.value} compared to ${sighting.datetime}`);
    return(x.value == sighting.datetime)
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

    console.log(`LOAD ALL TBODY ${tbody}`);

    createTable(data);
    //console.log(data)
});

// var button = d3.select("#filter-btn");

// button.on("click", function (){
//     // console.log(d3.event.target.id)

//     //var results = data.filter(selectDate);
//     var results = data;
//     var tbody = d3.select("tbody");

//     tbody.selectAll('tr').remove();

//     console.log(`FILTER TBODY ${tbody}`);

//     createTable(results)
//     //console.log(results)
// });

// grab references to the input element and the output div
var text = d3.selectAll("#text");
var output = d3.select(".output");

function counter(text) {

  // convert text to lowercase characters (chars)
  // remove whitespace(/\s+/g) and convert to array/list
  var chars = text
    .toLowerCase()
    .replace(/\s+/g, "")
    .split("");

  var counts = {};
  chars.forEach((char) => {
    if (char in counts) {
      counts[char] += 1;
    }
    else {
      counts[char] = 1;
    }
  });

  return counts;
}

// Function to handle input change
function handleChange(event) {
  // grab the value of the input field
  var value = d3.event.target.value;
  console.log(this.name)
  // clear the existing output
  output.html("");

  var frequencyCounts = counter(value);
  Object.entries(frequencyCounts).forEach(([key, value]) => {
    var li = output.append("li").text(`${key}: ${value}`);
  });

}

text.on("change", handleChange);