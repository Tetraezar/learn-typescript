/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's , total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type library = {
    isbn: String
    title: String
    bookData: {
        authorName: String
        pages: String
        category: String
    }
    isBorrowed: boolean
}

const book1: library = {
    isbn: `9673`,
    title: `cara coding yang baik dan benar`,
    bookData: {
        authorName: `fatih panedya`,
        pages: `69`,
        category: `Technology`
    },
    isBorrowed: true
}
const book2: library = {
    isbn: `731947`,
    title: `cara jualan lemon yang baik dan benar`,
    bookData: {
        authorName: `okka lintang agelar`,
        pages: `342`,
        category: `Sales`
    },
    isBorrowed: true
}
const book3: library = {
    isbn: `1239137`,
    title: `cara mencapai rank immortal`,
    bookData: {
        authorName: `gerardus adelard`,
        pages: `728`,
        category: `Technology`
    },
    isBorrowed: false
}

console.log(`book 1`)
console.log(`ISBN: ${book1.isbn}`)
console.log(`Title: ${book1.title}`)
console.log(`Author name: ${book1.bookData.authorName}`)
console.log(`Pages : ${book1.bookData.pages}`)
console.log(`Category : ${book1.bookData.category}`)
console.log(`Is borrowed : ${book1.isBorrowed}`)

console.log(`book 2`)
console.log(`ISBN: ${book2.isbn}`)
console.log(`Title: ${book2.title}`)
console.log(`Author name: ${book2.bookData.authorName}`)
console.log(`Pages : ${book2.bookData.pages}`)
console.log(`Category : ${book2.bookData.category}`)
console.log(`Is borrowed : ${book2.isBorrowed}`)

console.log(`book 3`)
console.log(`ISBN: ${book3.isbn}`)
console.log(`Title: ${book3.title}`)
console.log(`Author name: ${book3.bookData.authorName}`)
console.log(`Pages : ${book3.bookData.pages}`)
console.log(`Category : ${book3.bookData.category}`)
console.log(`Is borrowed : ${book3.isBorrowed}`)
