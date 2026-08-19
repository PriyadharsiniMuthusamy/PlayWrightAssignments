let genderType = "male"
 function printGender()
 {
    let color = "brown"
    if(genderType.startsWith("female"))
    {
        var age=30
        let color = "pink"
        console.log("block Scope colour:"+color);
        console.log("Global scope:"+genderType);
    }
    console.log(age);
    console.log("Function Scope colour:"+color)
    
 }

 printGender();
 console.log("Global Scope:"+genderType);

 