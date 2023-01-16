const tableRow = document.getElementById("row");
const tableColumn = document.getElementById("columns");
const tableBody = document.getElementById("myTableBody");

function dynamicTable(){
    rows = Number(tableRow.value);
    columns = Number(tableColumn.value);
    tableBody.innerHTML = "";
    for(let r = 0; r < rows; r++){
        let addedRow = document.createElement("tr");
        for(let c = 0; c < columns; c++){
            let addedInfo = document.createElement("td");
            addedInfo.innerText = `Row: ${r+1} Column: ${c+1}`;
            addedRow.appendChild(addedInfo);
        }
        tableBody.appendChild(addedRow);
    }
}

tableRow.addEventListener("input", dynamicTable);
tableColumn.addEventListener("input", dynamicTable);