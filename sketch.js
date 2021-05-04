

var car=[{
  "color": "purple",
  "type": "minivan",
  "registration": new Date('2012-02-03'),
  "capacity": 7
},

{
  "color": "red",
  "type": "wagon",
  "registration": new Date('2012-02-03'),
  "capacity": 5
}];
function setup() {
  createCanvas(400, 400);
  console.log(car[0].color);
  console.log(car[1].capacity);
}

function draw() {
  background(220);
}
