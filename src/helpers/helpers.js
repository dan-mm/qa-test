exports.getPropsFromJSON = function (json, prop) {
  return json.map(x => x[prop]);
};

exports.getMonthDateFromMonthString = function (mon) {
  return new Date(Date.parse(mon + ' 1, 2012')).getMonth() + 1;
};


const byElementKey = (value, key) => element => (element[key] === value);

exports.getObjectFromKeyValue = (arr, key, value) => arr.find(byElementKey(value, key));

exports.countInArray = function (array, element) {
  return array.filter(item => item === element).length;
};
