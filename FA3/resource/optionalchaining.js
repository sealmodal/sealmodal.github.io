const user = {
    name: "Kaelix",
    details: {
        username:"Debonemaru",
        street: "123 Main St",
        city: "Coolsville",
        occupation: "Bouncer"
    }
};

const occupation = user.details?.occupation;
const username = user.details?.username;
const company = user.details?.company;
console.log("Username:", username);
console.log("Occupation:", occupation);
console.log("Company:", company);
const nonExistentFunction = user.nonExistentFunction?.();
console.log("Result of non-existent function call:",
    nonExistentFunction); // Output: undefined