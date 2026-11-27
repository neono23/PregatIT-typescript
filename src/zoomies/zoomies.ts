// 02 - zoomies

export type Position = [number, number];
export type Dir = "N" | "E" | "S" | "W";

export const ROOM = 10; 

export function move(pos: Position, dir: Dir, steps = 1) :Position {
  const [x,y] = pos
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
}

export function run(start: Position, dirs : Dir[]) : Position[]{
  const positions = [start]
  let copy = start ;
  for(const dir of dirs){
    copy = move(copy, dir)
    positions.push(copy)
  }
  return positions
}

export function distance(a: Position, b: Position) {
  const [x1,y1] = a
  const [x2,y2] = b
  return Math.abs(x1-x2) + Math.abs(y1-y2)
}

export function farthest(start: Position, dirs: Dir[]) {
  const positions = run(start, dirs)
  let best = start
  let bestDistance = 0
  for(const pos of positions){
    const d = distance(start, pos)
    if(d > bestDistance){
      best = pos
      bestDistance = d
    }
  }
  return best
}

export function where(pos: Position, name?: string | null) {
  const [x,y] = pos
  if(name) return `${name} is at (${x}, ${y})`
  return `the cat is at (${x}, ${y})`
}
