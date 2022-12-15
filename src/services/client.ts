import { createClient } from '@supabase/supabase-js'
import { PUBLIC_CLIENT_URL, PUBLIC_CLIENT_KEY } from '$env/static/public'

export const supabase = createClient(PUBLIC_CLIENT_URL, PUBLIC_CLIENT_KEY)