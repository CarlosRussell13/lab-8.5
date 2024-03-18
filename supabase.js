import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ifcadoorzgtfmwjrjeau.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
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