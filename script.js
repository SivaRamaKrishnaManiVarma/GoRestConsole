let consoleForm = document.getElementById("consoleForm");
let requestUrl = document.getElementById("requestUrl");
let requestUrlMsg = document.getElementById("requestUrlMsg");
let requestUrlErrMsg = document.getElementById("requestUrlErrMsg");
let requestMethod = document.getElementById("requestMethod");
let requestBody = document.getElementById("requestBody");
let responseBody = document.getElementById("responseBody");
let responseStatus = document.getElementById("responseStatus");
let sendRequestBtn = document.getElementById("sendRequestBtn");
let formData = {
    requestUrl: "https://gorest.co.in/public-api/users",
    requestMethod: "POST",
    requestBody: ""
};

console.log(requestUrl);

requestUrl.addEventListener("change", function(event) {
    console.log("in req url");
    formData.requestUrl = event.target.value;
});

requestMethod.addEventListener("change", function(event) {
    console.log("in req method");
    formData.requestMethod = event.target.value;
});

requestBody.addEventListener("change", function(event) {
    console.log("in req body");
    formData.requestBody = event.target.value;
});

function validateRequestUrl(formData) {
    console.log("in validate");
    let {
        requestUrl
    } = formData;
    if (requestUrl === "") {
        requestUrlErrMsg.textContent = "Required";
    } else {
        requestUrlErrMsg.textContent = "";
    }
}

function sendRequest(formData) {
    let {
        requestUrl,
        requestMethod,
        requestBody
    } = formData;
    let option = {
        method: requestMethod,
        headers: {
            'Content-type': "application/json",
            Accept: "application/json",
            Authorzation: "Bearer 80dc347fe9b95c089d05cc75488574a90a0c8077886120a597b8179dc358a26b"
        },
        body: requestBody
    };

    fetch(requestUrl, option)
        .then(function(response) {
            return response.json();
        }).then(function(jsonData) {
            let responseStatus = jsonData.code;
            let responseBody = JSON.stringify(jsonData);
            responseStatus.value = responseStatus;
            responseBody.value = responseBody;
        }).catch((err) => {
            console.log("error is", err)
        });

}

sendRequestBtn.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("in send");
    validateRequestUrl(formData);
    sendRequest(formData);
});
