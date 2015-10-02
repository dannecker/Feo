function PostForm(isAsync, serviceUrl, data, callbackOk, callbackError) {
    $.ajax({
        async: isAsync,
        url: serviceUrl,
        type: 'post',
        dataType: "json",
        data: data,
        success: callbackOk,
        error: callbackError
    });
}

function PostJson(isAsync, serviceUrl, data, callbackOk, callbackError) {
    //var data = JSON.stringify({ Email: email });
    $.ajax({
        async: isAsync,
        url: serviceUrl,
        type: 'post',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: data,
        success: callbackOk,
        error: callbackError
    });
}


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/*
 function GetParameterByName(strName) {
 var urlParts = document.URL.split('?');
 if (urlParts.length < 2) {
 return "";
 }
 var params = urlParts[1].split('&');
 for (var i = 0; i < params.length; i++) {
 if (params[i].split('=')[0] == strName) {
 return params[i].split('=')[1];
 break;
 }
 }
 return "";
 }
 */


function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?|&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
        return uri + separator + key + "=" + value;
    }
}


function appendQuerystring(url, name, value) {
    if (url.indexOf('?') == -1) {
        url += '?' + name + '=' + value;
    } else {
        url += '&' + name + '=' + value;
    }
    return url;
}


function SearchEnterEventMobile(e) {
    if (e.keyCode == 13) {
        RedirectToSearchPageMobile();
    }
}

function RedirectToSearchPageMobile() {
    if ($('#uiTxtSearchMobile').val() != '') {
        window.location = '/Search?text=' + $('#uiTxtSearchMobile').val();
    }
}

function SearchEnterEvent(e) {
    if (e.keyCode == 13) {
        RedirectToSearchPage();
    }
}

function RedirectToSearchPage() {
    if ($('#uiTxtSearchText').val() != '') {
        window.location = '/Search?text=' + $('#uiTxtSearchText').val();
    }
}

function subscribe() {
    var email = $("#uiTxtEmmail").val();
    //  TODO: validate email
    if (email == "") {
        displayError("#formSubscribe", "Невірний Email");
        return;
    }

    clearError("#formSubscribe");

    //var data = JSON.stringify({ Email: email });
    var postData = "Email=" + email;

    PostForm(false, "", postData, subscriptionOk, subscriptionError);
}

function subscriptionOk(data, textStatus, jqXHR) {
    var status = data.status;
    var message = data.message;
    //var id = data.id;
    if (status) {
        $("#formSubscribe").text("Thank you.").addClass("alert-confirm");
        dataLayer.push({'event': 'email-subscription'});
    } else {
        displayError("#formSubscribe", message);
        //$("#formSubscribe").append("<label class='alert-error'>Error: " + message + "</label>");
    }
}

function subscriptionError(jqXHR, textStatus, errorMessage) {
    displayError("#formSubscribe", errorMessage);
    //$("#formSubscribe").append("<label class='alert-error'>Error: " + errorMessage + "</label>");
}

function login() {
    var userName = $("#uiTxtUsername").val();
    if (userName == "") {
        displayError("#loginError", "Введіть логін");
        return;
    }
    clearError("#loginError");
    //var data = JSON.stringify({ Email: email });
    var postData = "Username=" + userName + "&Password=" + $("#uiTxtPassword").val() + "&Remember=" + $("#uiChkRemember").prop("checked");

    PostForm(false, "", postData, loginOk, loginError);
}

function loginOk(data, textStatus, jqXHR) {
    var status = data.status;
    var message = data.message;
    //var id = data.id;
    if (status) {
        window.location.href = data.navigateUrl;
    } else {
        displayError("#loginError", message);
    }
}

function loginError(jqXHR, textStatus, errorMessage) {
    displayError("#loginError", errorMessage);
}

function displayError(container, message) {
    var errLbl = $(container + ">label.alert-error");
    if (errLbl.length == 1) {
        errLbl.text(message);
    } else {
        $(container).append("<label class='alert-error'>" + message + "</label>");
    }
}

function clearError(container) {
    var errLbl = $(container + ">label.alert-error");
    if (errLbl.length == 1) {
        errLbl.text("");
    }
}