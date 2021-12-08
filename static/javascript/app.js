
const tableData = data;

//Build the table
var tbody = d3.select("tbody");

function buildTable(data) {
  tbody.html("");

  data.forEach((dataRow) => {

    let row = tbody.append("tr");

    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

//Update the table filters
var filters = {}
function updateFilters() {

    element = d3.select(this);
    key = element.property("id")
    value = element.property("value")

    if (value == "") {
      delete filters[key];
    }
    else {
      filters[key] = value;
    };
    console.log("Updated Filters")
    console.log(filters)
  
    filterTable();
  
  }

  //Filter the table based off the filters
  function filterTable() {
    let filteredData = tableData;
    for (const [key, value] of Object.entries(filters)) {
      filteredData = filteredData.filter(row => row[key] === value)
    }
    buildTable(filteredData)
  }
  //check if the filters are updated
  d3.select("#datetime").on("change", updateFilters);
  d3.select("#city").on("change", updateFilters);
  d3.select("#state").on("change", updateFilters);
  d3.select("#country").on("change", updateFilters);
  d3.select("#shape").on("change", updateFilters);
  
  buildTable(tableData);
