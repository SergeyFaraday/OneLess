/**
 * Created by Sergey Tyshchenko on 5/26/2016.
 */
var message;
var myObj = {
    name: "ritis"
};
myObj["age"] = 27;
message = prompt("Enter message.", defaultStatus);
message = parseInt(message);
showMessage(myObj.age);
function showMessage(a) {
    alert(a);
}

