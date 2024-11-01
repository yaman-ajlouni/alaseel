// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://lewdhvtzlhkvkqrcleck.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxld2RodnR6bGhrdmtxcmNsZWNrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTg2MDI3NywiZXhwIjoyMDQ1NDM2Mjc3fQ.opySC63_OArb4JWl7z0SSusnUGao9GOu6KhsS_fLEeI';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
