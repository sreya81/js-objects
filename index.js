// Q-1
var book={
    "title":"geethanjali",
    "author":"rabindranath tagore",
    "year published":"1910"
}
console.log(book);
console.log(book["author"]);
book["year published"]="2022";
console.log(book);
book["generation"]="fiction";
console.log(book);
delete book["title"];
console.log(book);

console.log("........................................................................");

// Q-2
var employee={
    "name":"sreya",
    "age":"21",
    "position":"manager",
    "salary":"40000"
}
console.log(employee);
console.log(employee["position"]);
employee["salary"]="50000";
console.log(employee);
employee["department"]="HR";
console.log(employee);
delete employee["age"];
console.log(employee);

console.log("........................................................................");

// Q-3
var product={
    "id":"501",
    "name":"NIVEA",
    "price":"120",
    "category":"vaseline"
}
console.log(product);
console.log(product["price"]);
product["category"]="electronics";
console.log(product);
product["inStock"]=true;
console.log(product);
delete product["id"];
console.log(product);

console.log("........................................................................");

// Q-4
var car={
    "make":"metal",
    "model":"BMW",
    "year":"2023",
    "color":"gray"
}
console.log(car);
console.log(car["make"]);
car["color"]="black";
console.log(car);
car["engine type"]="v6";
console.log(car);
delete car["year"];
console.log(car);

console.log(".......................................................................");

// Q-5
var student={
    "name":"sreya",
    "age":"21",
    "grade":"90",
    "school":"zphs"
}
console.log(student);
console.log(student["school"]);
student["grade"]="95";
console.log(student);
student["hobbies"]="reading,sports";
console.log(student);
delete student["age"];
console.log(student);

console.log(".......................................................................");

// Q-6
const user = {
    username: "john_doe",
    profile: {
      firstName: "John",
      lastName: "Doe",
      age: 28,
      address: {
        street: "456 Elm St",
        city: "Gotham",
        zip: "54321"
      }
    },
    preferences: {
      theme: "dark",
      notifications: true
    }
  };
  console.log(user);
console.log(`city:${user.profile.address.city}`);
console.log(`theme:${user.preferences.theme}`);
user['preferences']["theme"]="light";
console.log(user);
user["profile"]["phone"]="555-1111";
console.log(user);
delete user["profile"]["address"]["zip"];
console.log(user);

console.log("..........................................................................");

// Q-7
const company = {
    name: "Tech Solutions",
    employees: [
      {
        name: "Alice",
        position: "Developer",
        contact: {
          email: "alice@tech.com",
          phone: "555-2345"
        }
      },
      {
        name: "Bob",
        position: "Manager",
        contact: {
          email: "bob@tech.com",
          phone: "555-6789"
        }
      }
    ],
    location: "New York"
  };
  console.log(company);
console.log([company.employees[1].contact.email]);
company["employees"][0]["contact"]["phone"]="555-1111";
console.log(company);
company["employees"][0]["department"]="Engineering";
console.log(company);
delete company["location"];
console.log(company);