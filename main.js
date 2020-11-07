class Login {
  constructor(user, pass) {
    this.user = user;
    this.pass = pass;
  }
}

class UI {
  loginKey(login) {
    const info = document.getElementById("log-msg");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${login.usernumber}</td>
        <td>${login.message}</td>
        `;
    info.appendChild(row);
  }
  clearFields() {
    document.getElementById("user").value = "";
    document.getElementById("pass").value = "";
  }
}

document.getElementById("login-form").addEventListener("submit", function (e) {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  const login = new Login(user, pass);
  const ui = new UI();
  if (user === "" || pass === "") {
    console.log("Please fill in all the Fields");
  } else {
    fetch(
      //+8801521553889
      //anikalexdiary
      `https://cors-anywhere.herokuapp.com/http://sellinbd.com/lexdiary-website/registration/login_new_user.php?usernumber=${user}&password=${pass}`
    )
      .then((res) => res.json())
      .then((data) => ui.loginKey(data))
      .catch((err) => console.log(err));
    //ui.loginKey(data);
    ui.clearFields();
  }
  e.preventDefault();
});

let output = "";
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((posts) => {
    posts.forEach((post) => {
      output += `<li> ${post.title} </li>`;
    });
    //console.log(output);
    document.getElementById("list").innerHTML = output;
  })
  .catch((err) => console.log(err));
