
let users = JSON.parse(localStorage.getItem('users')) || [];

function renderTable() {
    const tableBody = document.getElementById("userTableBody");
    tableBody.innerHTML= '';
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML=`
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>
            <button onclick="editUser(${index})">Edit</button>
            <button onclick="deleteUser(${index})">Delete</button>
         </td>
        `;
        tableBody.appendChild(row);
    })
}

function addUser(){
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (firstName && lastName && email && phone){
        const user = {firstName, lastName, email, phone};
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
    } else {
        alert("Please fill all the textboxes!")
    }
}

function editUser(index) {
    const user = users[index];
    document.getElementById('firstName').value = user.firstName;
    document.getElementById('lastName').value = user.lastName;
    document.getElementById('email').value = user.email;
    document.getElementById('phone').value = user.phone;

    deleteUser(index);

}

function deleteUser(index) {
    users.splice(index, 1)
    localStorage.setItem('users', JSON.stringify(users));
    renderTable();
}
renderTable();