const person = {
    name: 'John',
    greet: function() {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`);
        }, 1000);
    }
};
person.greet(); // Outputs: Hello, my name is John
