"use strict";
var students = [
    { name: "student 1", roll: 10, division: "A" },
    { name: "student 2", roll: 11, division: "A" }
];

var tbody = document.getElementById("result");

function showdata() {
    tbody.innerHTML = ""; // Clear existing rows
    students.forEach((value, i) => {
        var { name, roll, division } = value;
        var trtag = document.createElement("tr");
        trtag.style.background = 'transparent';
        
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");

        td1.innerText = name;
        td2.innerText = division;
        td3.innerText = roll;

        var btnDelete = document.createElement("button");
        btnDelete.className = 'btn btn-danger';
        btnDelete.innerText = "X";
        btnDelete.addEventListener("click", deleterecord);
        td4.append(btnDelete);

        var btnEdit = document.createElement("button");
        btnEdit.innerText = "Edit";
        btnEdit.className = 'btn btn-success';
        btnEdit.addEventListener("click", editrecord);
        td5.append(btnEdit);

        trtag.append(td1, td2, td3, td4, td5);
        tbody.append(trtag);
    });
}

showdata();

document.querySelector(".add").onclick = function() {
    var data = document.querySelectorAll(".userinfo");
    var data1 = data[0].value;
    var data2 = data[1].value;
    var data3 = data[2].value;

    if (data1 && data2 && data3) {
        var dataset = { name: data1, roll: data3, division: data2 };
        students.push(dataset);
        showdata();

        data.forEach(input => input.value = ""); // Clear input fields
    } else {
        alert("Please fill out all fields.");
    }
};

var rowIndex;

function deleterecord() {
    var row = this.parentNode.parentNode;
    var name = row.children[0].innerText;
    students = students.filter(student => student.name !== name);
    showdata();
}

function editrecord() {
    var row = this.parentNode.parentNode;
    var data = document.querySelectorAll(".userinfo");

    data[0].value = row.children[0].innerText;
    data[1].value = row.children[1].innerText;
    data[2].value = row.children[2].innerText;

    document.querySelector(".add").style.display = "none";
    document.querySelector(".update").style.display = "block";

    rowIndex = Array.from(row.parentNode.children).indexOf(row);
}

document.querySelector(".update").onclick = function() {
    var data = document.querySelectorAll(".userinfo");
    var updatedDataset = {
        name: data[0].value,
        roll: data[2].value,
        division: data[1].value
    };

    students[rowIndex] = updatedDataset;
    showdata();

    data.forEach(input => input.value = ""); // Clear input fields
    document.querySelector(".update").style.display = "none";
    document.querySelector(".add").style.display = "block";
};
