// Create User interface. The types are:
//  school: string
//  firstName: string
//  lastName: string
//  age: number
//  isAdmin: OPTIONAL boolean

// Convert the function to TypeScript, making sure to use the
//  User interface as the return type

interface User {
  school: string;
  firstName: string;
  lastName: string;
  age: number;
  isAdmin?: boolean;
}

function createUser(firstName: string, lastName: string, age: number, isAdmin = false) {
  return {
    school: "Noroff",
    firstName,
    lastName,
    age,
    isAdmin,
  };
}

const newUser = createUser("Ola", "Nordmann", 18);
const newAdmin = createUser("Kari", "Nordmann", 36, true);
