var submit = document.getElementById("submitForm");
for (
  var i = 0;
  i < document.getElementsByClassName("contact-input").length;
  i++
) {
  document
    .getElementsByClassName("contact-input")
    [i].setAttribute("id", `input${i}`);
}
function check() {
  var data = new Array();
  data[0] = document.getElementById("input0").value;
  data[1] = document.getElementById("input1").value;
  data[2] = document.getElementById("input2").value;
  data[3] = document.getElementById("input3").value;
  for (i in data) {
    if (data[i].length == 0 ) {
      console.log("blank")
      submit.onclick = change;
      function change() {
        console.log(data);
        document.querySelector(".sended-request-box").style = "display:block";
        setTimeout(() => {
          document.querySelector(".sended-request-box").style = "display:none";
        }, 3000);
      }
    } else {
      submit.removeAttribute("disabled")
    }
  }
}
