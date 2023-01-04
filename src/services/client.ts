import { PUBLIC_CLIENT_KEY, PUBLIC_CLIENT_URL } from '$env/static/public'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with the database
export const supabase = createClient(PUBLIC_CLIENT_URL, PUBLIC_CLIENT_KEY)
