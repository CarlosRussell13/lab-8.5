import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js@2.7.1'

const supabaseUrl = 'https://ifcadoorzgtfmwjrjeau.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmY2Fkb29yemd0Zm13anJqZWF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3OTQ3MzIsImV4cCI6MjAyNjM3MDczMn0.j_FQ85tpbJhJq5SLe9k6xkSSexJlht9ABhEbQulkHrg'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
    let { data: books, error } = await supabase
    .from('books')
    .select('*')

    for (let book of books) {
        let bookList = document.getElementById('books');
        bookList.innerHTML += `<tr><td>${book.title} <td>${book.author} <td> ${book.ISBN}`;
    }
}

getBooks();