const details = [{
        name: 'sai',
        mark: 10,
        mobile: 7899053958,
        address: {
            dno: 1201,
            city: 'Bangalore',
            country: 'India'
        }
    },
    {
        name: 'raj',
        mark: 9,
        mobile: 8978107124,
        address: 'Mangalore'
    }
]

for (let i = 0; i < details.length; i++) {
    console.log(details[i])
        // console.log(details[i].name)
}

for (let x in details) {
    console.log(details[x])
}

for (let x of details) {
    console.log(x)
}

details.forEach((element) => {
    console.log(element);
})

var obj1 = { name: "Person 1", age: 5 };

var obj2 = { age: 5, name: "Person 1" };