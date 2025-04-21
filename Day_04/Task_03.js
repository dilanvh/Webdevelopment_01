let isLoggedIn = true;
let isAdmin = false;
if(isLoggedIn && isAdmin)
{
    console.log("Welcome, Admin!");
}
else if(isLoggedIn && !isAdmin)
{
    console.log("Welcome, User!");
} 
else if(!isLoggedIn) 
{
    console.log("Please log in!");
}
if (isLoggedIn || isAdmin)
{
    console.log("You can access!");
}
else
{
    console.log("Access denied!");
}