import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://cedggpxdtvenohkmsgkh.supabase.co";
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlZGdncHhkdHZlbm9oa21zZ2toIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxNTk5MzMsImV4cCI6MjA3MjczNTkzM30.sWipxVkZqD1Ebl7_raBOXLbLHGjW36t5T_uuIupE-dI"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
