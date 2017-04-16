// возвращает cookie с именем name, если есть, если нет, то undefined
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// устанавливает cookie с именем name и значением value
// options - объект с свойствами cookie (expires, path, domain, secure)
function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

// удаляет cookie с именем name
function deleteCookie(name) {
  setCookie(name, "", {
    expires: -1
  })
}

if (getCookie('style') === undefined) {
  setCookie("style", "css/chaos.css")
  console.info('Get defalt cookie!')
};

/*
var staleSet = function(name) {
  var x = document.createElement("STYLE");
  var t = document.createTextNode("html, body {font-size:10pt;background:#000505;color:#00CCCC;}pre {text-indent: -7.3vh;font-family: Lucida Console, monospace;font-size:1.5vh;}.parent {width: 100%;height: 100%;position: absolute;top: 0;left: 0;overflow: auto;white-space: nowrap;text-align: center;font-size: 0;&:before {height: 100%;display: inline-block;vertical-align: middle;content: '';}}.block {display: inline-block;white-space: normal;vertical-align: middle;text-align: left;img {display: block;border: none;}}");
  x.appendChild(t);
  document.head.appendChild(x);
}
*/
