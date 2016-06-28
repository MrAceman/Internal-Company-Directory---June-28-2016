import $ from "jquery";

var baseURL = 'http://api.randomuser.me/'
var resultsOptions = "results=12"
var nationalityOptions = "nat=us"
var includeOptions = "inc=picture,name,email,location,phone,id"
var node = $(".employees-container");
var container = $(".container");

function create_employee(employee) {
    return `<div class="employee-ind">
  <img src="${employee.picture.large}">
  <ul><li class="emp-name">${employee.name.first} ${employee.name.last}</li>
  <li class="emp-email">${employee.email}</li>
  <li class="emp-address">${employee.location.street}</li>
  <li class="emp-address">${employee.location.city} ${employee.location.state}, ${employee.location.postcode}</li>
  <li class="emp-phone">${employee.phone}</li>
  <li class="emp-ssn">${employee.id.value}</li></div>`;
}

$.ajax({
    url: baseURL + "?" + resultsOptions + "&" + nationalityOptions + "&" + includeOptions,
    dataType: 'json'
}).then(function(employee) {
    var employeeHTML = employee.results.map(create_employee);
    node.append(employeeHTML);
});
