const Fruit_Inventory = {
  apple:200,
  mango:300,
  orange:555,
  banana:645,
  grapes:799
  
}

const Fruit_Price = {
    apple:100,
    mango:200,
    orange:50,
    banana:25,
    grapes:100
    
}


const Apple_price = Fruit_Price.apple;
console.log(Apple_price);

const Mango_price = Fruit_Price.mango;
console.log(Mango_price);

const Orange_price = Fruit_Price.orange
console.log(Orange_price);

const Banana_price = Fruit_Price.banana;
console.log(Banana_price);

const Grapes_price = Fruit_Price.grapes;
console.log(Grapes_price);


const Total_Cost = Apple_price + Mango_price + Orange_price + Banana_price + Grapes_price;

console.log(Total_Cost);

