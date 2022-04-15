function submitValues()
{
    var height= document.getElementById('height').value ;
    var weight= document.getElementById('weight').value;
    cal(height,weight);
}
function cal(height,weight)
{
    var val=weight/(height*height);
    if(val<18.5)
    {
        document.getElementById("result").innerHTML="Your BMI is "+val+". You are underweight.";
    }
    else
    if(val>=18.5 && val<=24.9)
    {
        document.getElementById("result").innerHTML="Your BMI is "+val+". You are normal.";
    }
    else
    if(val>=25 && val<=29.9)
    {
        document.getElementById("result").innerHTML="Your BMI is "+val+". You are overweight.";
    }
    else
    if(val>30)
    {
        document.getElementById("result").innerHTML="Your BMI is "+val+". You are obese.";
    }
    }