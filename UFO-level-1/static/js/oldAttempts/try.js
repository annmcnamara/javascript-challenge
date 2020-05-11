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