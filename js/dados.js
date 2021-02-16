$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/v1/hotels/1?checkin=01/01/2018&checkout=02/01/2018&numAdultos=2&numCriancas=1"
    }).then(function(data) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
    });
});