const palindromes = function (str) {
  let result = str.split("").reverse().join("").toLowerCase();
  if (
    result.replace(/[ ,!.?;"':]/g, "") ==
    str.toLowerCase().replace(/[ ,!.?;"':]/g, "")
  ) {
    return true;
  } else {
    return false;
  }
};

// уже почти пять утра
module.exports = palindromes;
