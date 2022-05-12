// Invokes on inital load
(async function () {
    // Load the data
    const result = await loadData();

    // Convert the data to html
    const html = convertDataToHtml(result.data);

    // Append the html to the data element
    appendHtmlToData(html);
})();

// Load the data
async function loadData() {
    return axios.get("/data");
}

// Convert the data to html
function convertDataToHtml(data) {
    // Create headers for table based on first row keys
    const header =
        `<thead><tr>` +
        Object.keys(data[0])
            .map((key) => {
                return `<th>${key}</th>`;
            })
            .join("") +
        `</tr></thead>`;

    const body = data
        .map((row, index) => {
            // On the first row, create header of all the property keys
            return `<tr>
                        <td>${row.city}</td>
                        <td>${row.state}</td>
                        <td>${row.zipcode}</td>
                        <td>${row.plays_a_musical_instrument}</td>
                        <td>${row.favorite_musician}</td>
                        <td>${row.favorite_actor}</td>
                    </tr>`;
        })
        .join("");

    return header + body;
}

// Append the html to the data element
function appendHtmlToData(html) {
    document.getElementById("data").innerHTML = html;
}
