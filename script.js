var salesEmployees = [];
var serviceEmployees = [];
var financeEmployees = [];
var itEmployees = [];
var hrEmployees = [];
myStorage = window.localStorage;

class Employee {
    constructor(name, email, dept, manager, team, profile, contact1, contact2) {
        this.name = name;
        this.email = email;
        this.dept = dept;
        this.manager = manager;
        this.team = team;
        this.profile = profile;
        this.contact1 = contact1;
        this.contact2 = contact2;

        //Default extra properties
        this.eid = "xyz";
        this.rating = "*";
        this.attendence = 0;
    }

    updateEmpId(eid) {
        this.eid = eid;
    }

    updateRating(rating) {
        this.rating = rating;
    }

    updateAttendence(attendence) {
        attendence = (attendence/31)*100;
        this.attendence = attendence;
    }

    display(){
        console.log(
            `Name : ${this.name}`
        );
    }
}

$("#login").click(function(){

    var name = $("#empName").val();
    var email = $("#empEmail").val();
    var dept = $("#empDept").val();
    var manager = $("#rManager").val();
    var team = $("#team").val();
    var profile = $("#empProfile").val();
    var contact1 = $("#empPhone1").val();
    var contact2 = $("#empPhone2").val();

    var emp = new Employee(name, email, dept, manager, team, profile, contact1, contact2);
    var eid = emp.eid + name;
    emp.updateEmpId(eid);

    if(emp.dept == "Sales") {
        salesEmployees.push(emp);
        localStorage.setItem('Sales' , JSON.stringify(salesEmployees));
    }
    else if(emp.dept == "Service") {
        serviceEmployees.push(emp);
        localStorage.setItem('Service' , JSON.stringify(serviceEmployees));
    }
    else if(emp.dept == "Finance") {
        financeEmployees.push(emp);
        localStorage.setItem('Finance' , JSON.stringify(financeEmployees));
    }
    else if(emp.dept == "IT") {
        itEmployees.push(emp);
        localStorage.setItem('IT' , JSON.stringify(itEmployees));
    }
    else if(emp.dept == "HR") {
        hrEmployees.push(emp);
        localStorage.setItem('HR' , JSON.stringify(hrEmployees));
    }
});

$("#clear").click(function(){
    localStorage.clear();
});


//department.html

//stats.html
$("#empList").click(function(){
    var dept = $("#dept").val();
    var list = JSON.parse(localStorage.getItem(dept));
    for(var i = 0; i < list.length; i++) {
        $("#nameList").append(`<option>${list[i]["name"]}</option>`);
    }
});

$("#calAttendence").click(function(){

});