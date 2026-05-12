import { createClient } from "@supabase/supabase-js";

const supabaseUrl='https://mzegbltpmhkowoarvxmq.supabase.co'
const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16ZWdibHRwbWhrb3dvYXJ2eG1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1OTQzMzUsImV4cCI6MjA5NDE3MDMzNX0.Bn8XeyoyEitcsjMIy2C-lfjkabqB-x6spg6q83IYx1g'

export const supabase=createClient(supabaseUrl,supabaseKey)