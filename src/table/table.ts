// 03 - knock it off the table

export type Item = {
  readonly name: String;
  readonly fragile: boolean;
  readonly owner?: String;
};

export type Table = {
  readonly name: String;
  readonly items: Item[];
};

export function knockOff(table: Table, name: string): Table {
  let items = [... table.items]
  for(let i = 0 ; i < items.length ; i++){
    if(items[i]?.name == name){
      items.splice(i,1)
    }
  }
  return {name, items}
}

export function knockAllOff(table: Table): Table[] {
  let copyItems = [... table.items]
  while(!copyItems){
    
  }
  throw new Error("TODO knockAllOff");
}

export function rename(table: Table, from: string, to: string): Table {
  throw new Error("TODO rename");
}

export function broken(before: Table, after: Table): string[] {
  throw new Error("TODO broken");
}

export function whose(item: Item): string {
  throw new Error("TODO whose");
}
