let toEle = document.getElementById("to");
let fromEle = document.getElementById("from");
let inputFromEle = document.getElementById("input-from");
let inputToEle = document.getElementById("input-to");
let convertEle = document.getElementById("convert");
let errorEle = document.getElementById("error");
let result=0;

convertEle.addEventListener("click",function(event)
{
    errorEle.textContent = "";
    if(inputFromEle.value !== "")
    {
        let conversion = fromEle.value + "-" + toEle.value;
        switch(conversion)
        {
            case "Indian Rupee INR-US Dollar USD":
                result = (parseFloat(inputFromEle.value)/83.746).toFixed(4);
                inputToEle.value = result+"";
                break;
            case "Indian Rupee INR-Europian Euro":
                result = (parseFloat(inputFromEle.value)*0.01094).toFixed(4);
                inputToEle.value = result+"";
                break;
            case "Indian Rupee INR-Japanese Yen":
                result = (parseFloat(inputFromEle.value)*1.749).toFixed(4);
                inputToEle.value = result+"";
                break;
            case "Indian Rupee INR-Australian Dollar":
                result = (parseFloat(inputFromEle.value)*0.01833).toFixed(4);
                inputToEle.value = result+"";
                break;
            case "US Dollar USD-Indian Rupee INR":
                result = (parseFloat(inputFromEle.value)*83.746).toFixed(4);
                inputToEle.value = result+"";
                break;
            case "US Dollar USD-Europian Euro":
                result = (parseFloat(inputFromEle.value)*0.9166).toFixed(4);
                inputToEle.value = result+"";
                break;
            case "US Dollar USD-Japanese Yen":
                result = (parseFloat(inputFromEle.value)*146.5).toFixed(4);
                inputToEle.value = result+"";
                break;
            case "US Dollar USD-Australian Dollar":
                result = (parseFloat(inputFromEle.value)*1.536).toFixed(4);
                inputToEle.value = result+"";
                break;
            case "Europian Euro-Indian Rupee INR":
                result = (parseFloat(inputFromEle.value)/0.01094).toFixed(4);
                inputToEle.value = result+"";
                break;
            case "Europian Euro-US Dollar USD":
                result = (parseFloat(inputFromEle.value)/0.9166).toFixed(4);
                inputToEle.value = result+"";
                break;
            case "Europian Euro-Japanese Yen":
                result = (parseFloat(inputFromEle.value)*159.9).toFixed(4);
                inputToEle.value = result+"";
                break;
            case "Europian Euro-Australian Dollar":
                result = (parseFloat(inputFromEle.value)*1.676).toFixed(4);
                inputToEle.value = result+"";
                break;
            case "Japanese Yen-Indian Rupee INR":
                result = (parseFloat(inputFromEle.value)/1.749).toFixed(4);
                inputToEle.value = result+"";
                break;
            case "Japanese Yen-US Dollar USD":
                result = (parseFloat(inputFromEle.value)/146.5).toFixed(4);
                inputToEle.value = result+"";
                break;
            case "Japanese Yen-Europian Euro":
                result = (parseFloat(inputFromEle.value)/159.9).toFixed(4);
                inputToEle.value = result+"";
                break;
            case "Japanese Yen-Australian Dollar":
                result = (parseFloat(inputFromEle.value)*0.01048).toFixed(4);
                inputToEle.value = result+"";
                break;
            case "Australian Dollar-Indian Rupee INR":
                result = (parseFloat(inputFromEle.value)/0.01833).toFixed(4);
                inputToEle.value = result+"";
                break;
            case "Australian Dollar-US Dollar USD":
                result = (parseFloat(inputFromEle.value)/1.536).toFixed(4);
                inputToEle.value = result+"";
                break;
            case "Australian Dollar-Europian Euro":
                result = (parseFloat(inputFromEle.value)/1.676).toFixed(4);
                inputToEle.value = result+"";
                break;
            case "Australian Dollar-Japanese Yen":
                result = (parseFloat(inputFromEle.value)/0.01048).toFixed(4);
                inputToEle.value = result+"";
                break;
            default:
                errorEle.textContent = "Invalid Conversion";
                errorEle.classList.add("error-msg","mt-2");
        }
    }
    else{
        errorEle.textContent = "Enter value to convert";
        errorEle.classList.add("error-msg","mt-2");
    }
});