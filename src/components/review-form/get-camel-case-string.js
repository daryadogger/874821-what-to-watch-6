const getCamelCaseString = (str) => {
  const newStr = str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
  return newStr;
};

export default getCamelCaseString;
