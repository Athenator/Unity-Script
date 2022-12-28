const temp = Number.parseFloat(prompt('Введите температуру в цельсиях: '))

function farengeit(n){
    alert(`Цельсий: ${n}, Фаренгейт: ${((9/5) * n).toFixed(1) } `)
}

farengeit(temp)