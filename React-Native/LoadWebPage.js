
import { URIpage } from './app.js'

function LoadWebPage() {
    window.location = URIPage;
}
document.addEventListener("DOMContentLoaded", function (event) {
    window.onload = LoadWebPage();
    window.onload = URIpage;
});
