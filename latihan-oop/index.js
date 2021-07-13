const Kitchen = require("./Kitchen")

let kitchen = new Kitchen()

kitchen.bake("Martabak Strawberry", 30000, "Strawberry", false)
kitchen.bake("Cheese Cake", 40000, "Sweet", false)
kitchen.addSugar("Choco Lava")
kitchen.addSugar("Martabak Strawberry")

kitchen.eat("Choco Lava");
kitchen.showCookies()