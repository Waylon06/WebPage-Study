var connect = new XMLHttpRequest();
connect.open('get','http://43.138.138.11:1110/api/product');
connect.send();
connect.onreadystatechange = function() {
    if(connect.readyState == 4 && connect.status == 200) {
        console.log(JSON.parse( connect.responseText));
    }
}
