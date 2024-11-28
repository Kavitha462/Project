let a=[
    {
        id:1,
        n:2
    },
    {
        id:2,
        n:3
    },
    {
        id:3,
        n:4
    }
];
let greatestId = a[0].id; 

for (let i = 1; i < a.length; i++) {
    if (a[i].id > greatestId) {
        greatestId = a[i].id; 
    }
}
console.log(greatestId);