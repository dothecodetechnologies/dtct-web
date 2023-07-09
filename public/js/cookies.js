var delay = 300; // milliseconds
var cookie_expire = 0; // days

var cookie = localStorage.getItem("list-builder");
console.log("set cookies - " + cookie);
var final_cookie_expire = ++cookie_expire;

if (cookie == undefined || cookie == null) {
  cookie = 0;
}

if (((new Date()).getTime() - cookie) / (1000 * 60 * 60 * 24) > final_cookie_expire) {
  $("#list-builder").delay(delay).fadeIn("fast", () => {
    $("#popup-box").fadeIn("fast", () => { });
  });
  $("button[name=subscribe]").click(() => {
    localStorage.setItem("list-builder", (new Date()).getTime());
  });
}
