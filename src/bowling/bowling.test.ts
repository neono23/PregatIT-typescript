import {test} from "node:test";
import assert from "node:assert/strict";
import {score} from "./bowling.ts";

test( "Gutter game: 20 rolls of 0 scores", ()=>{
    const rolls = new Array<number>(20).fill(0);
    //se poate face si o clasa in loc de array
    assert.equal(score(rolls),0);
});

test ("all ones 20 rolls of 1 scores 20", () =>{
    const rolls = new Array<number>(20).fill(1);
    assert.equal(score(rolls),20);
});

test ("one spare: 5, 5, 3 scores 16", () =>{
    const rolls = [5, 5, 3, ...new Array<number>(17).fill(0)];
    assert.equal(score(rolls),16);
});

test ("one strike: 10, 3, 4 scores 24", () =>{
    const rolls = [10, 3, 4, ...new Array<number>(16).fill(0)];
    assert.equal(score(rolls),24);
})

test ("perfect game: 12 strikes score 300", () =>{
    const rolls = new Array<number>(12).fill(10);
    assert.equal(score(rolls),300);
});

// gutter game: 20 rolls of 0 scores 0
// all ones: 20 rolls of 1 scores 20
// one spare: 5, 5, 3 scores 16
// one strike: 10, 3, 4 scores 24
// perfect game: 12 strikes score 300