import { createClient } from '@supabase/supabase-js'

const URL = 'https://dtswxkdqpavsiwnscvcs.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0c3d4a2RxcGF2c2l3bnNjdmNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNDc3NDEsImV4cCI6MTk5NjcyMzc0MX0.bGt4oNTMJhBGxBXPXT0A7o1fMMRBC0W0tS-hla98Je8';
export const supabase = createClient(URL, API_KEY);