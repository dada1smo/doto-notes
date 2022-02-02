import { createClient } from '@supabase/supabase-js';

const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzc1NjUzOSwiZXhwIjoxOTU5MzMyNTM5fQ.0P2xgwNvvDGD3Y2TfgxflynenJ75df7eeid3ZxltQ14';
const SUPABASE_URL = 'https://nrkkqwhokaseknpnvhpu.supabase.co';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function getNotebooks() {
  return supabaseClient
    .from('notebooks')
    .select('*')
    .order('id', { ascending: false })
    .then(({ data }) => data)
    .catch(() => []);
}

export function subscribeNotebooks(addNotebook) {
  return supabaseClient
    .from('notebooks')
    .on('INSERT', (response) => addNotebook(response.new))
    .subscribe();
}

export async function getNotesByNotebook(notebookId) {
  return supabaseClient
    .from('notes')
    .select('*')
    .filter('notebook_id', 'in', `(${notebookId})`)
    .order('id', { ascending: false })
    .then(({ data }) => data)
    .catch(() => []);
}
