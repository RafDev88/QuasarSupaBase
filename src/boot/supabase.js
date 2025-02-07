
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oazunpzeoghadbdlmcvs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9henVucHplb2doYWRiZGxtY3ZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4NjM1NTYsImV4cCI6MjA1NDQzOTU1Nn0.k_wz3IQRgftzEiZCrc80rv1TpJsWNOdwWGaOCRSoEx8'
const supabase = createClient(supabaseUrl, supabaseKey)


console.log('init supabase:', supabase)

export default function useSupabase() {
    return { supabase }
}