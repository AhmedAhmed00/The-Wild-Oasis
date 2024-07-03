import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://fcvebldtqtikhfqkfqjh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjdmVibGR0cXRpa2hmcWtmcWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MTA2NTMsImV4cCI6MjAyNDE4NjY1M30.8GZ2_MYskeVbFeje-UV8TEsgvuBrrBMlUvBWap3ECfs'
const supabase = createClient(supabaseUrl, supabaseKey)



export default supabase;

