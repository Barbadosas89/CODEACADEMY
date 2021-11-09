let table = document.createElement('table');
table.setAttribute('id', 'data')
document.body.appendChild(table)




fetch("https://jsonplaceholder.typicode.com/posts").then(
    res => {
        res.json().then(
            data => {
                console.log(data);
                if (data.length > 0) {

                    let temp = "";
                    data.forEach((title) => {
                        temp += "<tr>";
                        temp += "<td>" + title.title + "</td>"
                        "</tr>";
                    });
                    document.getElementById('data').innerHTML = temp;
                    document.body.appendChild(table)
                }
            }
        )
    }
)