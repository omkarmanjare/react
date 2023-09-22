const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Deconstructor
const book = getBook(2);
const title1 = book.title;
const author2 = book.author;
console.log(title1, author2);

//here , have created a variable title oto read title property. If number of propoerites are more
//we have to write all propertires manually . eg. When we get api response , that time we have to make variable
//Instead of that, you can use Deconstructor as below, where you use the exactly same variable as property

const { title, author, genres, pages, publicationDate } = book; // make sure the variables declared are of same name of property from book
console.log(title, author, genres, pages);

//you can iterate over arrays also using deconstructor
//this anyOtherNameToHoldAllArrayElements is used as spread which will hold value of all other elements from array.Known as Spread operator
//and can be placed at the end only
const [firstElement, secondElement, ...anyOtherNameToHoldAllArrayElements] =
  genres;
console.log(firstElement, secondElement, anyOtherNameToHoldAllArrayElements);

//spread operator : Create a new array alomg with existing one value
const newArray = ["addNewElemt", ...genres];
console.log(newArray);

//spreadoperator on Object. you can create a new object  with existing property and values, add new property
//and update the exisitng property also
//exisitng object must be mentioned first
const newBookObject = {
  ...book,
  newPropertyForNewObject: "2023-08-28",
  pages: 12111,
};
console.log(newBookObject);

//Template literal syntax
const summary = `The book ${title} is written by ${author} and has pages ${
  pages > 1000 ? "over 1000" : "under 1000"
}. 
Sum of two plus two is ${2 + 2}. `;
console.log(summary);

//Arrow Functions
const getYear = (year) => publicationDate.split("-")[0];
console.log(getYear(publicationDate));

//Short circuiting
//Short circuiting : AND : Here the expression acts as if condition . If the first part is false then
//it does not check the second part after && and thus there it is short circuited
//falsy values : 0,null,'', undefined
console.log(false && "Test");
console.log(true && "Test");
console.log(pages > 1000 && "Will No be printed");
console.log(pages < 1000 && "Will be printed");
console.log(0 && "Test");

//Short Circuit : OR
//here , if the first expression before || operator is true it does not check the second part
console.log(true || "This wont print");
console.log(false || "this will print");

//Short Circuiting : ?? NULL Colalsing
//if the first part is null or undefined only then it will execute second part
console.log(null ?? "This will print");
console.log();

//Option Chanining
const book1 = getBook(3);
console.log(book1.reviews.goodreads?.rating);
