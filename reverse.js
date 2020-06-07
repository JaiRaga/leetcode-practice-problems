var reverseString = function (s) {
  let ind = 0,
    len = s.length;
  for (let i = 0; i < len; i++) {
    ind = s.length - i;
    s.splice(ind, 0, s[0]);
    // console.log(s);
    s.shift();
    // console.log(s, s.length, ind);
  }
  console.log(s);
};

reverseString(["h", "e", "l", "l", "o"]);
