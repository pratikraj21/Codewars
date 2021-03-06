// Given length & widht of a reactangle such that length != width, return the dimensions of the minimum number of squares it can be cut into

// My Solution
function sqInRect(lng, wdth) {
  if (lng === wdth) {
    return null;
  }

  let res = [];
  while (lng > 0 && wdth > 0) {
    if (lng > wdth) {
      res.push(wdth);
      lng -= wdth;
    } else {
      res.push(lng);
      wdth -= lng;
    }
  }

  return res;
}

// Other Solutions
function sqInRect(lng, wdth) {
  let arr = [];
  if (lng === wdth) return null;
  while (lng > 0 && wdth > 0) {
    arr.push(lng > wdth ? wdth : lng);
    lng > wdth ? (lng -= wdth) : (wdth -= lng);
  }
  return arr;
}
