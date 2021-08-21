//book constructor
function Book(title, author, isbn){
    this.title = title;
    this.isbn = isbn;
    this.author = author;
}
//UI constructor
function UI(){}

UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="" style="color: red;" class = "delete">X</a></td>
    `;
    list.appendChild(row)
}
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    isbn = document.getElementById('isbn').value = '';
}
UI.prototype.showAlert = function(message, className){
    const div = document.createElement('div')
    div.className = `alert ${className}`
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.input');
    const form = document.querySelector('#book-form');

    container.insertBefore(div, form);
    

    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
}

UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove()
    }
}

 

// event listerner
document.getElementById('book-form').addEventListener('submit',function(e){
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

    const book = new Book(title, author, isbn);
    const ui = new UI();

    if(title === '' || author === '' || isbn === ''){
        ui.showAlert('Please input a value', 'error');
    }else{
        ui.showAlert('Book has been added succesfully', 'success')
        ui.addBookToList(book);
        ui.clearFields();
    }

    
    

    e.preventDefault()
});

//Event listener to delete icon

document.getElementById('book-list').addEventListener('click', function(e){

    const ui = new UI();
    ui.deleteBook(e.target)
    ui.showAlert('Book has been succesfully deleted', 'success')

    e.preventDefault()
})