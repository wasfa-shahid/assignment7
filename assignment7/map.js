const arr1 = [1, 2, 3, 4, 5];

function squareMap(numbers) {
  const squareMap = numbers.map((elem) => {
    return elem * elem;
  });

  return squareMap;
}

console.log(squareMap(arr1));

function mapNamesToAges(arr) {
  const nameToAgeMap = new Map();
  arr.forEach((obj) => {
    const name = obj.name;
    const age = obj.age;
    nameToAgeMap.set(name, age);
  });
  return nameToAgeMap;
}

const people = [
  { name: 'Alina', age: 18 },
  { name: 'Ahmer', age: 20 },
  { name: 'Wasfa', age: 19 },
];

const result1 = mapNamesToAges(people);
console.log(result1);

function mapContainsKey(map, key) {
  return map.has(key);
}

const myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 25);

console.log(mapContainsKey(myMap, 'name'));
console.log(mapContainsKey(myMap, 'city'));

function filterMap(map, callback) {
  const filteredMap = new Map();
  map.forEach((value, key) => {
    if (callback(key, value)) {
      filteredMap.set(key, value);
    }
  });
  return filteredMap;
}

const myMap1 = new Map();
myMap1.set('name', 'Alina');
myMap1.set('age', 18);
myMap1.set('city', 'New York');

function isString(value) {
  return typeof value === 'string';
}

const filtered = filterMap(myMap1, isString);
console.log(filtered);

function mergeMaps(map1, map2) {
  const mergedMap = new Map([...map1, ...map2]);
  return mergedMap;
}

const map1 = new Map();
map1.set('name', 'Alina');
map1.set('age', 18);

const map2 = new Map();
map2.set('age', 30);
map2.set('city', 'New York');

const merged = mergeMaps(map1, map2);
console.log(merged);
