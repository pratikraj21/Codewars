// Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}
// and also a list of the names of the dead people:

// ['Lucas', 'Bill']
// return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'

// My Solution
function killer(suspectInfo, dead) {
  for (let guy in suspectInfo) {
    const arr = suspectInfo[guy];
    if (dead.every((el) => arr.includes(el))) {
      return guy;
    }
  }
}

// Other Solutions
function killer(suspectInfo, dead) {
  return Object.keys(suspectInfo).find((x) =>
    dead.every((y) => suspectInfo[x].includes(y))
  );
}
