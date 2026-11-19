export function score(rolls:number[]):number{
    let total = 0
    let i = 0
    for(let frame = 0; frame < 10; frame++){
        let first = rolls[i] ?? 0
        let second = rolls[i + 1] ?? 0
        if(first + second === 10){
            total += 10 + (rolls[i + 2] ?? 0) 
        } else {
            total += first + second
        }
        i += 2
    }
    return total
}