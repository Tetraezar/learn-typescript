/**
 * A school library wants to create a digital system for managing books.
 * 
 * Each book has:
 * - ISBN
 * - Title
 * - Author
 * - Total pages
 * - Borrowing status
 * 
 * The library wants to prevent users from directly changing the borrowing status.
 * Instead, the status can only change through:
 * - borrow()
 * - returnBook()
 * 
 * Business Rules
 * - A book can only be borrowed when: status = available
 * - When a book is borrowed: available → borrowed
 * - A borrowed book cannot be borrowed again.
 * - When the book is returned: borrowed → available
 * - An available book cannot be returned.
 * 
 * Tasks:
 * - create class Book that minimum has property and method below:
 *   - private status: string;
 *   - borrow()
 *   - returnBook()
 *   - showInfo()
 *   - isAvailable()
 * - implement class with at least 2 objects
 */

class book {
    constructor(
        public ISBN: string,
        public Title: string,
        public author: string,
        public totalPages: number,
        private borrowingstatus: string,
    ) {
    }
    public borrow() {
        if (this.borrowingstatus == `available`) {
            console.log(`Book ${this.Title} borrowed`)
        } else {
            console.log(`Book ${this.Title} is not available`)
        }
    }
    public returnBook() {
        if (this.borrowingstatus == `available`) {
            console.log(`available book cannot be returned`)
        } else {
            console.log(`book returned`)
            this.borrowingstatus == `available`
        }
    }
    public showInfo(): void {
        console.log(`ISBN : ${this.ISBN}`)
        console.log(`Title : ${this.Title}`)
        console.log(`Author : ${this.author}`)
        console.log(`Total pages : ${this.totalPages}`)
        console.log(`Borrowing Status : ${this.borrowingstatus}`)
        console.log(``)
    }
    public isAvailable() {
        if (this.borrowingstatus == `available`) {
            console.log(`Book ${this.Title} is available`)
        } else {
            console.log(`Book ${this.Title} is not available`)
        }
    }      
} 

const book1 = new book(
    `01`,
    `Cara Bernapas Manual`,
    `Tetra`,
    10,
    `available`
)
const book2 = new book(
    `02`,
    `Cara Makan`,
    `Tetra`,
    50,
    `not available`
)

book1.showInfo()
book2.showInfo()

book1.returnBook()
book2.borrow()
book1.isAvailable()