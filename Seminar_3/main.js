// const a = Number.parseFloat(prompt('Введите первое число: '))
// const b = Number.parseFloat(prompt('Введите второе число: '))
// let z = a + b
// alert(`Результат сложения чисел ${a} и ${b} равен ${z}`)

// function sum(num1, num2) {
//     alert(`Результат сложения чисел ${num1} и ${num2} равен ${(num1 + num2).toFixed(1)}`)
// }

// sum(a,b)
// alert(`Результат сложения чисел ${a} и ${b} равен ${sum(a,b)}`)

// const user = prompt('Введите своё имя: ')

// function sayHello(name) {
//      alert(`Приветсвую, ${name}`)

// }

// sayHello(user)

// const message = confirm ('Вам хорошо живётся?')
// if (message) {
//     alert('Тогда мы идём к вам!')

// } else{
//     alert('Ну вы держитесь там!')
// }

// message ? alert('Тогда мы идём к вам!') : alert("ну вы держитесь там!");

// const age = Number.parseInt(prompt('Введите возраст: '))

// switch (age) {
//   case 18:
//     alert('Вы совершеннолетний, всё можно!')
//     break
//   case 10:
//     alert('Вам надо учить уроки!')
//     break
//   case 30:
//     alert('Ложитесь спать, завтра на работу.')
//     break
//   default:
//     alert('Нет таких значений!')
// }

function getMaxEvenElement(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31
alert(getMaxEvenElement([5, 7, -1, 12, 3, 0]));
alert(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50]));