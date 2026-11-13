// 02 - zoomies

export type Position = [number, number]; // [x, y]
export type Dir = "N" | "E" | "S" | "W";

export const ROOM = 10; // 10x10, coordinates 0..9

// TODO: type the parameters and the return values. tsc complains until you do.

export function move(pos: Position, dir: Dir, steps = 1) :Position {
  let [x,y] = pos
  switch(dir){
    case "N" :
      if(y+steps > ROOM - 1) return [x, ROOM-1]
      return [x,y+steps]
    case "E" : 
      if(x+steps > ROOM - 1) return [ROOM-1, y]
      return [x + steps, y]
    case "S" :
      if(y-steps < 0) return [x,0]
      return [x,y-steps]
    case "W" :
      if(x-steps < 0) return [0,y]
      return [x-steps,y]
  }
  throw new Error("TODO move");
}

export function run(start: Position, dirs : Dir[]) : Position[]{
 //let dirsCopy = dirs; 
  let positions = [start]
  let copy = start ;
  for(const dir of dirs){
    copy = move(copy, dir)
    positions.push(copy)
  }
  return positions
  throw new Error("TODO run");
}

export function distance(a: Position, b: Position) {
  let [x1,y1] = a
  let [x2,y2] = b
  return Math.abs(x1-x2) + Math.abs(y1-y2)
  throw new Error("TODO distance");
}

export function farthest(start: Position, dirs: Dir[]) {
  let positions = run(start, dirs)
  let best = start
  let bestDistance = 0
  for(const pos of positions){
    let d = distance(start, pos)
    if(d > bestDistance){
      best = pos
      bestDistance = d
    }
  }
  return best
  throw new Error("TODO farthest");
}

export function where(pos: Position, name: String | null) {
  let [x,y] = pos
  if(name) return `${name} is at (${x}, ${y})`
  return `the cat is at (${x}, ${y})`
  throw new Error("TODO where");
}
