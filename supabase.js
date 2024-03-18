import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ifcadoorzgtfmwjrjeau.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

async function getbooks() {
let { data: lab 8, error } = await supabase
  .from('lab 8')
  .select('*')
}