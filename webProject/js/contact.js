(() => {

  let button = document.querySelector("#search");

  function showInput(e) {
    e.preventDefault()

    var strText = document.getElementById("txtName").value;
    var strText1 = document.getElementById("txtEmail").value;
    var strText2 = document.getElementById("txtTitle").value;
    var strText3 = document.getElementById("txtDesc").value;
    document.getElementById("p1").innerHTML = strText;
    document.getElementById("p2").innerHTML = strText1;
    document.getElementById("p3").innerHTML = strText2;
    document.getElementById("p4").innerHTML = strText3;
  }

  button.addEventListener("click", showInput);

})();