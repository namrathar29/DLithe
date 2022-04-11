const man = {
    name: 'John',
    age: 30,
    hello: function() {
        let surname = 'Doe';
       document.write('The name is' + ' ' + this.name + ' ' + surname);
    }
};

man.hello();