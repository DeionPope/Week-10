document.getElementById("submit").onclick = function () {
    document.getElementById("table").style.display = "block";
    //using constents to creat ways to add new lines to the table when
    //creating new date, 
    const table = document.getElementById("table");
    const row = table.insertRow(-1);
    const firstname = row.insertCell(0);
    const lastname = row.insertCell(1);
    const handle = row.insertCell(2);
    //using getElemntById to get the value that we entered
    firstname.innerHTML = document.getElementById("firstname").value;
    lastname.innerHTML = document.getElementById("lastname").value;
    handle.innerHTML = document.getElementById("handle").value;
    return false;
  }

  