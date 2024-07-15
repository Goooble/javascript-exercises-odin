const getTheTitles = function (books) {
  let titles = books.reduce((array, book, index) => {
    array[index] = book.title;
    return array;
  }, []);

  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
