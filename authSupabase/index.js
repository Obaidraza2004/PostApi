
//  // Toggle between login and sign-up form
// function toggleForm() {
//   var loginForm = document.getElementById('login-form');
//   var signupForm = document.getElementById('signup-form');
// if (loginForm.style.display === 'none') {
//     loginForm.style.display = 'block';
//     signupForm.style.display = 'none';
// } else {
//     loginForm.style.display = 'none';
//     signupForm.style.display = 'block';
// }}


const SUPABASE_URL = 'https://itfyzkwoikpsymogtclj.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Znl6a3dvaWtwc3ltb2d0Y2xqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3OTg2NzQsImV4cCI6MjA1MzM3NDY3NH0.7E56VgV8crVuwMTdcRlxhdLcEH7a3NzbogAnqgEPVDc'
const supa_base = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function handleLoginSubmit(event){
  event.preventDefault()
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log("Username",email);
  console.log("password",password);

  const { data, error } = await supa_base.auth.signInWithPassword({
    email,
    password,
  });
  console.log('data',data);
  console.log('error',error);

}


