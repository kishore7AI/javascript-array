function groupPeopleByAge(lib) {
    const result = {};
    for (let i = 0; i < lib.length; i++) {
    const person = lib[i];
    const age = person.age;
    const name = person.name;
    if (result[age]) {
        result[age].push(name);
    } else {
        result[age] = [name];
    }
    }
    return result;
}
const lib = [
    { name: "kishore", age: 18 },
    { name: "manoj", age: 20 },
    { name: "stephy", age: 18 },
    { name: "raji", age: 20 },
];
console.log(groupPeopleByAge(lib));
