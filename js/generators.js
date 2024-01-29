function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

//1
console.log(g.next().value);
//2
console.log(g.next().value);
//3
console.log(g.next().value);

function* iterate(array){
    for (let value of array){
        yield value;
    }
}

const it = iterate(['oscar', 'omar', 'ana', 'lucia']);
console.log(it.next());
console.log(it.next());