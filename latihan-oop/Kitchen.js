const fs = require("fs");
const { Chocolate, Sweet, Strawberry } = require("./Cookies");

class Kitchen {
  constructor(cooking) {
    this.cooking = cooking;
  }

  bake(...foodName) {
    let cookies = this.getCookies();
    let id = +cookies[cookies.length - 1].id + 1;
    let [name, price, type, isSweet] = foodName;
    switch (type) {
      case "Chocolate":
        cookies.push(new Chocolate(+id, name, price, type, isSweet));
        break;
      case "Sweet":
        cookies.push(new Sweet(+id, name, price, type, isSweet));
        break;
      case "Strawberry":
        cookies.push(new Strawberry(+id, name, price, type, isSweet));
        break;
    }
    console.log(`${name} sedang dibuat...`);
    this.saveToCSV(cookies);
  }
  eat(foodName) {
    let cookies = this.getCookies();
    let newCookies = [];
    // let id = +cookies[cookies.length - 1].id - 1;

    cookies.forEach((cookie) => {
      let { id, name, price, type, isSweet } = cookie;
      if (cookie["name"] !== foodName) {
        switch (type) {
          case "Chocolate":
            newCookies.push(new Chocolate(+id, name, price, type, isSweet));
            break;
          case "Sweet":
            newCookies.push(new Sweet(+id, name, price, type, isSweet));
            break;
          case "Strawberry":
            newCookies.push(new Strawberry(+id, name, price, type, isSweet));
            break;
        }
      }
    });
    console.log(`${foodName} telah dimakan seseorang`);
    this.saveToCSV(newCookies);
  }

  addSugar(foodName) {
    let cookies = this.getCookies();
    cookies.forEach((cookie) => {
      if (cookie["name"] === foodName) {
        cookie["isSweet"] = true;
      }
    });

    console.log(`${foodName} ditambahkan sedikit gula...`);
    this.saveToCSV(cookies);
  }

  showCookies() {
    let cookies = this.getCookies();
    console.log("List cookie: ");
    cookies.forEach((cookie) => {
      let { id, name, price, type, isSweet } = cookie;
      console.log(
        `${id}. nama: ${name}, harga: ${price}, tipe makanan: ${type}, apakah manis?: ${isSweet}`
      );
    });
  }

  getCookies() {
    let data = fs.readFileSync("./Cookies.csv", "utf8");
    let splitData = data.split("\r\n").join().split("\n");
    let result = [];

    for (let i = 1; i < splitData.length; i++) {
      result.push(splitData[i].split(","));
      // console.log(result)
    }

    let cookies = result.map((cookie) => {
      let [id, name, price, type, isSweet] = cookie;
      switch (type) {
        case "Chocolate":
          return new Chocolate(id, name, +price, type, isSweet);
        case "Sweet":
          return new Sweet(id, name, +price, type, isSweet);
        case "Strawberry":
          return new Strawberry(id, name, +price, type, isSweet);
      }
    });
    return cookies;
  }

  saveToCSV(cookies) {
    // Mengubah ke dalam array 2D
    let tempArray = [];
    cookies.forEach((cookie) => {
      let { id, name, price, type, isSweet } = cookie;
      tempArray.push([id, name, price, type, isSweet]);
    });

    // Mengubah dan menggabungkan tiap index dalam tempArray
    let data = ["id, name, price, type, isSweet"];
    tempArray.forEach((temp) => {
      data.push(temp.join());
    });

    // Menggabungkan dengan .join('\r\n)
    let fixData = data.join("\n");

    // Write ke dalam csv
    fs.writeFileSync("./Cookies.csv", fixData);
    // console.log(fixData);
  }
}

module.exports = Kitchen;
