const urlBacon = "https://jsonplaceholder.typicode.com/todos/1";

(function() {
    $.ajax({
        method: "GET",
        url: urlBacon,
        dataType: "json"

    })

    .done(function(data) {
        console.log(data);
    })

    .fail(function() {
        alert("no good");
    });

})()
var url = 'https://jsonplaceholder.typicode.com/todos';
var xhr = new XMLHttpRequest()

xhr.open('GET', url, true)

xhr.onload = function() {

    var users = JSON.parse(xhr.responseText);

    if (xhr.readyState == 4 && xhr.status == "200") {

        console.table(users);

    } else {

        console.error(users);

    }

}

xhr.send(null);