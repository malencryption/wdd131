const articles = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description:
      "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Book cover for Septimus Heap 1",
    ages: "10-14",
    genre: "Fantasy",
    stars: "****",
  },
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description:
      "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
    imgSrc:
      "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐",
  },
  {
    id: 3,
    title: "Belgariad Book One: Pawn of Prophecy",
    date: "Feb 12, 2022",
    description:
      "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
    imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
    imgAlt: "Book cover for Pawn of Prophecy",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐⭐",
  },
]

const feed = document.querySelector(".feed")

function articleTemplate(article) {
  const { title, date, description, imgSrc, imgAlt, ages, genre, stars } =
    article
  return `
    <article class="book">
      <div class="display">
        <h2>${title}</h2>
        <div class="img-wrapper">
          <img src="${imgSrc}" alt="${imgAlt}">
        </div>
        <p>${description} <a href="#">Read More...</a></p>
      </div>
      <div class="info">
        <h3>${date}</h3>
        <p class="age">${ages}</p>
        <p class="genre">${genre}</p>
        <div class="stars">${stars}</div>
      </div>
    </article>
  `
}

function generateFeed(articles) {
  let postsFeed = ""
  const postsArray = articles.map((article) => articleTemplate(article))
  console.log("PostsArray: ", postsArray)
  postsArray.forEach((str) => {
    postsFeed += str
  })
  console.log("PostsFeed: ", postsFeed)
  return postsFeed
}
feed.innerHTML = generateFeed(articles)

articles.forEach((article) => displayToPage(article))

function wrapper(article) {
  return `
    <article class="book">
      <section class="book-info">
        <h3>${article.date}</h3>
        <p>${article.ages}</p>
        <p>${article.genre}</p>
        <p>${article.stars}</p>
      </section>
      <section class="book-and-review">
        <h2>${article.title}</h2>
        <img src="${article.imgSrc}" alt="${article.imgAlt}">
        <p>${article.description}</p>
      </section>
    </article>
  `
}

function displayToPage(article) {
  elements.apendChild(article)
}
