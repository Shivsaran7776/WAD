var name1;
var phoneno;
var  hobbies;
var  country;
var mail2=document.getElementById("mail").value;

var password=document.getElementById("password").value;
function name1()
{
    name1=document.getElementById("name1").value;
    let count=0;
    for(let i=0;i<name1.length;i++)
    {
        if((name1.charCodeAt(i)>=65 && name1.charCodeAt(i)<=90)||(name1.charCodeAt(i)>=97 && name1.charCodeAt(i)<=122)||(name1.charCodeAt(i)==32))
        {
            count+=1;
        }
    }
    if(count!=name1.length)
    {
        alert("Kindly enter alphabet");
        document.getElementById("name1").value='';
    }
}
function phoneno()
{
    phoneno=document.getElementById("phoneno").value;
    let count=0;
    for(let i=0;i<phoneno.length;i++)
    {
        if(phoneno.charCodeAt(i)>=48 && phoneno.charCodeAt(i)<=57 && phoneno.length==10)
        {
            count+=1;
        }
    }
    if(count!=phoneno.length)
    {
        alert("Kindly enter phone number in digit");
        document.getElementById("phoneno").value='';
    }
}
function hobbies()
{
    hobbies=document.getElementById("hobbies").value;
    let count=0;
    for(let i=0;i<hobbies.length;i++)
    {
        if((hobbies.charCodeAt(i)>=65 && hobbies.charCodeAt(i)<=90)||(hobbies.charCodeAt(i)>=97 && hobbies.charCodeAt(i)<=122)||(hobbies.charCodeAt(i)==32)||(hobbies.charCodeAt(i)==44))
        {
            count+=1;
        }
    }
    if(count!=hobbies.length)
    {
        alert("Kindly enter alphabet");
        document.getElementById("hobbies").value='';
    }
}
function country()
{
    country=document.getElementById("country").value;
    let count=0;
    for(let i=0;i<country.length;i++)
    {
        if((country.charCodeAt(i)>=65 && country.charCodeAt(i)<=90)||(country.charCodeAt(i)>=97 && country.charCodeAt(i)<=122)||(country.charCodeAt(i)==32)||(country.charCodeAt(i)==44))
        {
            count+=1;
        }
    }
    if(count!=country.length)
    {
        alert("Kindly enter alphabet");
        document.getElementById("country").value='';
    }
}
function submitbtn()
{
    localStorage.setItem("name",name1);
    localStorage.setItem("phoneno",phoneno);
    localStorage.setItem("hobbies",hobbies);
    localStorage.setItem("country",country);
    localStorage.setItem("Email", mail2);
    window.history.go(-1);
}