function XO(str) {
  str = str.toLowerCase();
  let x =0, o = 0;
  for (let i = 0; i <str.length; i++) {
    if (str[i] == "x") {
      x++;
    } else if (str[i] == "o") {
      o++;
    }
  }
  if (x == o) {
    return true;
  } else {
    return false;
  }
}
