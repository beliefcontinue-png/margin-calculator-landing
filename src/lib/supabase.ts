import { createClient } from '@supabase/supabase-js'

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string)?.trim()
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string)?.trim()

console.log('supabaseUrl:', JSON.stringify(supabaseUrl))
console.log('supabaseAnonKey length:', supabaseAnonKey?.length)
console.log('supabaseAnonKey first 20:', JSON.stringify(supabaseAnonKey?.slice(0, 20)))

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
