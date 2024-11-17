import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.URL 
const supabaseKey = process.env.PUBLIC_KEY
const supabase = createClient(supabaseUrl, supabaseKey)