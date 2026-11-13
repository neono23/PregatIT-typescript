# 03 - Knock it off the table

The cat walks along the kitchen table and pushes things off, one at a time, starting from the last one. We want a snapshot of the table after every push.

First write the two types in `src/table/table.ts`:

- `Item`: a `name`, a `fragile` flag, and sometimes an `owner`.
- `Table`: a `name` and a list of `items`.

Then the functions:

- `knockOff(table, name)` - a new table without the first item with that name. Unknown name: a new table with the same items.
- `knockAllOff(table)` - one snapshot per push, last item first. 4 items give 4 snapshots, the last one is empty.
- `rename(table, from, to)` - a new table where that item has the new name.
- `broken(before, after)` - names of the fragile items that are in `before` and no longer in `after`.
- `whose(item)` - `"Ana's mug"`, or `"nobody's mug"` when there is no owner.

The one rule: never change what you received. Not the table, not the items array, not the item objects.

```
node --test
npx tsc --noEmit
```

## Part 2

Make every field of `Item` and `Table` `readonly`, and `items` a `readonly Item[]`. Then uncomment the block at the bottom of the test file. If your functions still compile without changes, part 1 was done right.
