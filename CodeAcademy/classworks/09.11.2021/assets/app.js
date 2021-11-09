fetch("https://jsonplaceholder.typicode.com/posts").then(
    res => {
        res.json().then(
            data => {
                console.log(data);
                if (data.length > 0) {

                    let temp = "";
                    data.forEach((title) => {
                        temp += "<tr>";
                        temp += "<td>" + title.id + "</td>";
                        temp += "<td>" + title.title + "</td>";
                        temp += "<td>" + title.body + "</td>"
                        "</tr>";
                    });
                    document.getElementById('data').innerHTML = temp;

                }
            }
        )
    }
)