//BookClass Represents a Book,
class Book {
	constructor(title, author, isbn) {
		this.title = title
		this.author = author
		this.isbn = isbn
	}
}

//UI CLass //Hansdle UT Tasks
class UI {
	static displayBooks() {
		const StoredBooks = [
			{ title: 'Book One', author: 'Mbugua Caleb', 'isbn': "5765765765" },
			{ title: 'Book Two', author: 'Mercy Wanjiru', 'isbn': "67567575" }
		]

		//assumming that stored books is coming from local Storage
		const books = StoredBooks

		books.forEach(book => UI.addBookToList(book));
	}


	static addBookToList(book) {
		const list = document.querySelector('#book-list')

		const row = document.createElement('tr')

		row.innerHTML = `
		<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${book.isbn}</td>
		<td><a href="#" class="btn btn-danger btn-sm delete">*</a></td>
		`

		list.appendChild(row)

	}

	static deleteBook(el) {
		if (el.classList.contains('delete')) {
			el.parentElement.parentElement.remove()
		}
	}
	static clearFields() {
		document.querySelector('#title').value = ''
		document.querySelector('#author').value = ''
		document.querySelector('#isbn').value = ''

	}
}

//Store Class:Handles Storage


//Events: Displaty Books
document.addEventListener("DOMContentLoaded", UI.displayBooks)

//Even add a Book
document.querySelector("#book-form").addEventListener("submit", (e) => {
	e.preventDefault()
	//Get Form values
	const title = document.querySelector("#title").value
	const author = document.querySelector("#author").value
	const isbn = document.querySelector("#isbn").value

	//Instanticate Book
	const book = new Book(title, author, isbn)

	//Add Book to UI
	UI.addBookToList(book)

	//Clear fields
	UI.clearFields()

})

//Event Remove a Book
document.querySelector("#book-list").addEventListener("click", (e) => {
	UI.deleteBook(e.target)
})