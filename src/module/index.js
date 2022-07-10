const dialog = document.getElementById("dialog");
const addUserBtn = document.getElementById("addUser");
const addUserTable = document.getElementById("addUser-Table");
const tableFrame= `<tr>
<th class="sortbutton">
  <button id="sort1">First Name</button>
</th>
<th class="sortbutton">
  <button id="sort2">Last Name</button>
</th>
<th class="sortbutton">
  <button id="sort3">Email</button>
</th>
<th class="sortbutton">
  <button id="sortNumbers">Age</button>
</th>
<th class="sortbutton">
  <button>Phone Number</button>
</th>
</tr>`;
// dialog show-close
function showDialog() {
  if (dialog.open === false) {
    dialog.open = true;
  } else {
    dialog.open = false;
  }
}
addUserBtn.addEventListener("click", function () {
  showDialog();
});
addUserTable.addEventListener("click", function () {
  showDialog();
});
// add user in table
const addData = document.querySelector(".new-data");
const userData = document.querySelector(".table");
const data = JSON.parse(localStorage.getItem("data")) || [];

function pushData(e) {
  e.preventDefault();
  const firstName = this.querySelector("[name=firstName]").value;
  const lastName = this.querySelector("[name=lastName]").value;
  const email = this.querySelector("[name=email]").value;
  const age = this.querySelector("[name=age]").value;
  const phoneNumber = this.querySelector("[name=phoneNumber]").value;
  const personData = {
    firstName,
    lastName,
    email,
    age,
    phoneNumber,
  };
  data.push(personData);
  populateList(data, userData);
  localStorage.setItem("data", JSON.stringify(data));

  this.reset();
}
function populateList(data = [], userData) {
  userData.innerHTML =
   tableFrame +
    data
      .map(function (personData, i) {
        return `
      <tr>
        <td class="newData" for="personData${i}">${personData.firstName}</td>
        <td class="newData" for="personData${i}">${personData.lastName}</td>
        <td  class="newData" for="personData${i}">${personData.email}</td>
        <td  class="newData" for="personData${i}">${personData.age}</td>
        <td  class="newData" for="personData${i}">${personData.phoneNumber}</td>
        </tr>
        
        `;
      })
      .join("");
}

addData.addEventListener("submit", pushData);
populateList(data, userData);

// sort the table

const FirstName = document.getElementById("sort1");
const LastName = document.getElementById("sort2");
const Email = document.getElementById("sort3");
const Age = document.getElementById("sortNumbers");



function sortTable(){
    
}
function sortNumbers(){
    
}














FirstName.addEventListener("click",sortTable)
LastName.addEventListener("click",sortTable)
Email.addEventListener("click",sortTable)
Age.addEventListener("click",sortNumbers)