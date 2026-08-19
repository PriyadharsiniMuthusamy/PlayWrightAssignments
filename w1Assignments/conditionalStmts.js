function launchBrowser(browser)
{
  if(browser=="Chrome"){
    console.log("Chrome Browser \n");
  }
  else{
    console.log("Not a Chrome Browser \n");
  }
}
function runTests(testType)
{
  switch(testType){
    case "smoke": console.log("Smoke test") 
    break
    case "regression": console.log("Regression test") 
    break
    case "unit": console.log("Unit test") 
    break
    default: console.log("Sanity test") 
    break 
}
}
launchBrowser("Chrome")
runTests("sanity")