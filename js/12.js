//1. Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.
//2. Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.
//3. Реализуйте счетчик вызова функции, работающий на замыканиях. 
//4. Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил на экран уменьшенное число.
//5. Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил на экран сообщение о том, что отсчет окончен.
//6. Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.
//*** 7. Создайте функцию высшего порядка cartCounter(), в которой будет реализован функционал увеличения или уменьшения количества выбраного товара в корзине в зависимости от передаваемого id товара. Используйте механизм замыкания для решения задачи.
const cart = {
    products: [
        {
            id: 1,
            name: "Milk",
            price: 20,
            quantity: 1
        },
        {
            id: 2,
            name: "Juice",
            price: 30,
            quantity: 2
        },
        {
            id: 1,
            name: "Fresh juice",
            price: 40,
            quantity: 3
        }
    ]
}

//function func (a){
    //return function (b) {
       // return function (c){
          //  return a + b + c
        //}
    //}
//}
//console.log(func(2)(3)(4));
//8. В примере выше создайте методы, которые будут логировать данные всех продуктов массива.
//function pusher(array, ...a) {
//function pusher( ...a) {
//return a;
//}
//function func (a){
   // const arr =[];
    
   // return function (b){
        
       // return function (c){
          
          //  return function (d){
              //  return function(){
                    //return [a, b,c,d]
               //     return pusher(a,b,c,d);
              //  }
           // }
       // }
   // }
//}

//3. Реализуйте счетчик вызова функции, работающий на замыканиях.
//const addOne = function (num) {
    ////let num=0;
   //// return function () {
      ////  return (num += 1):
  ////  }
////}

//const counter = addOne();
//console.log(counter);


//5. Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил на экран сообщение о том, что отсчет окончен.

//function createCounter(num = 10) {
    //return function (step = -1) {
      //  return !num ?  'Stop' : num+=step;
  //  }
//}

//const counter = createCounter ();
//console.log(counter);

//6. Сделайте объект с тремя функциями, каждая из которых будет принимать 
//параметром массив с числами. Сделайте так, чтобы первая функция 
//возвращала сумму элементов массива, вторая функция - сумму квадратов, 
//а третья - сумму кубов.

//const object = {
    //pow (array, expanent){
      //  let total=0;
      //  for (const arr of array){
       // {total += Math.pow(arr, expanent);}
       // return total;
   // }},
    
   // sumArray (array){
      //  this.pow(array, 1);
        //let total=0;
        //for (const arr of array)
        //{total += arr;}
        //return total;
  //  },
    //sumSquere (array){
     //   this.pow(array, 2);
        //let total=0;
        //for (const arr of array)
        //{total += Math.pow(arr, 2);}
        
       // return total;
   // },
   // sumCube (array){
       // this.pow(array, 3);
       // let total=0;
       // for (const arr of array)
    //{total += Math.pow(arr, 3);}
        
    //return total;}
//}}

//object.sumArray([1,2,3,5,6,]);

//7. Создайте функцию высшего порядка cartCounter(), 
//в которой будет реализован функционал увеличения или уменьшения
 //количества выбраного товара в корзине в зависимости от передаваемого id товара.
  //Используйте механизм замыкания для решения задачи.

  function cartCounter(quantity) {
    return function (step=1) {
        return quatity += step;
    }
  }
  function findById (array, id) {
    for (const item of array)
    if (id === item.id) return item;
  }

  function getValue (array, id) {
    const product = findById (array, id)
    const counter = cartCounter(product.quantity);
    console.log(counter());
    console.log(counter());
    console.log(counter());
}


  //console.log(findById(1));
 // const counter = cartCounter(cart.products[0].quantity);
  //console.log(counter());

  getValue (cart.products, 2);