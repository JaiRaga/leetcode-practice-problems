function flatten(data) {
  if (!Array.isArray(data)) return [data];
  let elements = [];

  data.forEach((element) => {
    let flattened = flatten(element);
    console.log(flattened);
  });
  return elements;
}

console.log(
  flatten([
    1,
    2,
    [
      [3, 4],
      [5, [6]]
    ],
    [7, 8]
  ])
);

console.log(flatten([[[[[10]]]]]));
