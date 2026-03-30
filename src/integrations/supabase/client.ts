import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// ВРЕМЕННО: жёстко прописываем значения из Supabase
const SUPABASE_URL = 'https://blayllkckpwjxfaiqioi.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_NweP92yxK7SVrnO-9q_s-g_WNFfTeEe'; // твой ключ

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: typeof window !== 'undefined' ? localStorage : undefined,
    persistSession: true,
    autoRefreshToken: true,
  }
});
