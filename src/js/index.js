function AJAX() {
    return new Promise(function (myResolve, myReject) {
        const http = new XMLHttpRequest();
        http.onreadystatechange = function () {
            if (this.status === 200, this.readyState === 4) {
                myResolve(this.responseText);
            }
        }
        http.open('GET', 'https://timeapi.io/api/time/current/zone?timeZone=Europe%2FAmsterdam', true);
        http.send();
    })
}
async function callAJAX() {
      return document.getElementById('show-time').innerText = await AJAX();
}

setInterval(() => {
    callAJAX();
}, 10000);
