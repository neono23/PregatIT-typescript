export function score(rolls: number[]): number{
    let total: number = 0;
    let i: number = 0;
    for(let frame = 0; frame < 10; frame++){
        const first: number = rolls[i] ?? 0;
        const second: number = rolls[i + 1] ?? 0;
        if(first === 10){
            total += 10 + (rolls[i + 1] ?? 0) + (rolls[i + 2] ?? 0);
            i += 1;
        } else if(first + second === 10){
            total += 10 + (rolls[i + 2] ?? 0);
            i += 2;
        } else {
            total += first + second;
            i += 2;
        }
    }
    return total;
}