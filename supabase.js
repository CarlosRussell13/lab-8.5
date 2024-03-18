import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ifcadoorzgtfmwjrjeau.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

async function getbooks() {
let { data: lab 8, error } = await supabase
  .from('lab 8')
  .select('*')


for (let book of books) {
  let bookList = document.getElementById('lab 8');
  bookList.innerHTML += `<tr><td>${book.title} <td>${book.author} <td> ${book.ISBN}`;
}
}

getBooks();