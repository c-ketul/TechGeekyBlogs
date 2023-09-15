function var_load()
{
    firstName = document.getElementById('Name');
    phone = document.getElementById('phone');
}

function valName()
{
    if(Name.value == '')
    {
        document.getElementById('Name').style.borderColor="red";
        document.getElementById('err').innerHTML="Name field cannot be empty";
        document.getElementById('Name').value="";
    }
    else
    {
        document.getElementById('Name').style.borderColor="green";
    }
}
function onlyNum()
{
    var a;
    a=event.keyCode;
    if(a>=48 || a<=57)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function valPhone()
{
    if(phone.value.length < 10)
    {
        document.getElementById('phone').style.borderColor="red";
        document.getElementById('err3').innerHTML="Phone number should consist 10 digits";
        document.getElementById('phone').value="";
    }
    else
    {
        document.getElementById('phone').style.borderColor="green";
    }
}
function valEmail()
{
    var email=document.getElementById('email').value;
    var atpos = email.indexOf("@");
    var dotpos=email.lastIndexOf(".");
    if(atpos < 1 || dotpos<atpos+2 || dotpos+2>=email.length)
    {
        document.getElementById('email').style.borderColor="red";
        document.getElementById('err4').innerHTML = "Not a valid e-mail address";
        document.getElementById('email').value = "";
    }
    else
    {
        document.getElementById('email').style.borderColor = "green";
        document.getElementById('err4').innerHTML = "";
    }
}