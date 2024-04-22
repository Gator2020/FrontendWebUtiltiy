string URIpage;
function GetsPageString() {
    var value = document.getElementById("Input_identifier").innerText.toString();
    URIpage = value.toString();
    alert("The desired page has been stored into the directory and will be available for preview in the Load Page tab");
}
