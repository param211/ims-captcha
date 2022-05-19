console.log("YoYo")

async function getapi(url) {
    
    // Storing response
    const response = await fetch(url, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }}
    );
    
    window.frames[0].document.getElementById('cap').value = await response.json();
}

window.onload = function() {

    var img = window.frames[0].document.getElementById('captchaimg')

    var regexPattern = /\d+/g;

    captchaID = img.src.match(regexPattern)

    apiUrl = "https://uniprot-api.herokuapp.com/captcha=" + captchaID

    console.log(apiUrl)

    getapi(apiUrl)

}
