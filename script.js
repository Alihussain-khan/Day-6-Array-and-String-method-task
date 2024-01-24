console.log("running");

//Task a
const set1 = new Set(["a", "b", "c"]);
const set2 = new Set(["d", "e", "f"]);

//Task b
const set3 = new Set([...set1, ...set2]);
console.log(set3);

//Task c
const subset = Array.from(set1);
const set = Array.from(set3);

let checkSubset = (set, subset) => {
  return subset.every((e) => {
    return set.includes(e);
  });
};
console.log(checkSubset(set, subset));

//Task d
const reduced = set2.delete("d");
console.log(set2);

//Task e
const subset1 = Array.from(set1);
console.log(subset1);
