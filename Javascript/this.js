const exampleObj = {
    first: "Luis",
    last: "Hernandez",
    fullName() {
        return `${this.first} ${this.last}`;
    }
};
console.log(exampleObj.fullName());