// from data.js
var tableData = data;
// Console.log(data) to see if your data shows up in the console.
console.log(tableData)
//A. Populate the html file with the data in the form of table

// Get a reference to the table body
var tbody = d3.select("tbody");

// Step 1: Loop Through `data` and console.log each UFO Sighting report object
tableData.forEach(function(ufoSightings) {
    console.log(ufoSightings);
});

// Step 2:  Use d3 to append one table row `tr` for each UFO Sighting report object
tableData.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
        console.log(key, value);

        // Append one table row for each UFO Sighting
        var cell = row.append("td");
        cell.text(value);
    });
  });

//B. Pulling in the data from the form field

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", function(){
    // Prevent the page from refreshing
    d3.event.preventDefault();

    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputDate.property("value");
    console.log(inputValue)

//C. Filter the data.js using this pulled value to only reflect UFO Sightings from a input data from user.
        // Print the value to the console
        var filteredDate = tableData.filter(tableData => tableData.datetime === inputValue);
        console.log(filteredDate);
        
        filteredDate.forEach(function(inputs) {
        console.log(inputs);
        var row = tbody.append("tr");
        // We use object.entries to console.log for every UFO Sighting input.
        Object.entries(inputs).forEach(function([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each of the values
            var cell = row.append("td");
            cell.text(value);
        })
    });
});