import { PUBLIC_CLIENT_KEY, PUBLIC_CLIENT_URL } from '$env/static/public';
import { createClient } from '@supabase/supabase-js';
import { isEmptyString } from '$lib/utils/is-emptyString';

export let supabase: any = null;
if (!isEmptyString(PUBLIC_CLIENT_URL) && !isEmptyString(PUBLIC_CLIENT_KEY)) {
	supabase = createClient(PUBLIC_CLIENT_URL, PUBLIC_CLIENT_KEY);
}
