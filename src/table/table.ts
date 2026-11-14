// 03 - knock it off the table

export type Item = {
  readonly name: string;
  readonly fragile: boolean;
  readonly owner?: string;
};

export type Table = {
  readonly name: string;
  readonly items: Item[];
};

export function knockOff(table: Table, name: string): Table {
  let items = [... table.items]
  for(let i = 0 ; i < items.length ; i++){
    if(items[i]?.name === name){
      items.splice(i,1)
    }
  }
  return {name, items}
}

export function knockAllOff(table: Table): Table[] {
  let snapshots: Table[] = []
  let current = table
  while(current.items.length > 0){
    current = { name: current.name, items: current.items.slice(0, -1) }
    snapshots.push(current)
  }
  return snapshots
}
  

export function rename(table: Table, from: string, to: string): Table {
  let items = [... table.items]
  for(let i = 0; i < items.length; i++){
    let item = items[i]
    if(item?.name === from){
      items[i] = {... item, name:to}
    }
  }
  return {name: table.name, items}
}

export function broken(before: Table, after: Table): string[] {
  let names: string[] = []
  for(const item of before.items){
    let stillThere = after.items.some(other => other.name === item.name)
    if(item.fragile && !stillThere){
      names.push(item.name)
    }
  }
  return names
}

export function whose(item: Item): string {
  if(item.owner){
    return `${item.owner}'s ${item.name}`
  }
  return `nobody's ${item.name}`
}
