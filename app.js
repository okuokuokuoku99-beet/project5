//Object: 

const student = {
    name: "John",
    age: 22,
    hobbies: ["Reading", "Baseball"],
    parents: {
        mother: {
            name: "Anna",
            age: 55
        },
        father: {
            name: "Steve",
            age: 56
        }
    },

    getInfo: function () {
        console.log(`This is ${this.name} and his is ${this.parents.father.name} 's son`);
    }
}

console.log(student.parents.mother.name);

student.getInfo()
