let number
function checkPositiveOrNegative(num)
{
    number = num
    if(number>=1)
    {
        console.log(number+" is a positive number")
        
    }
    else if(number<1)
    {
        console.log(number+" is a negative number");  
    }
    else
    {
         console.log(number+" is a neutral");
    }
}
checkPositiveOrNegative(-10)