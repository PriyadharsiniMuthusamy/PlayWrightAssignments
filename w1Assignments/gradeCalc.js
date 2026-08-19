function printGrade(mark)
{
    switch(mark)
    {
        case mark>90: console.log("Grade: O")
        break
        case mark>80: console.log("Grade: A+")
        break
        case mark>70: console.log("Grade: A")
        break
        case mark>60: console.log("Grade: B+")
        break
        case mark>50: console.log("Grade: B")
        break
        default: console.log("Grade: C")
        break        
    }
}
printGrade(80)