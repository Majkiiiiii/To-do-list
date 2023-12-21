var count=0;
function addDivs()
{
    var name = document.getElementById("name").value;
    var hour = document.getElementById("hour").value;
    var minute = document.getElementById("minute").value;

    var newDiv = document.createElement("div");
    newDiv.className="smollest";
    newDiv.id = "smoll"+count;
    count++;

    document.getElementById("box").appendChild(newDiv);
    newDiv.style.width = "100";
    newDiv.style.height = "5%";
    newDiv.style.color = "#3A3042";
    newDiv.style.fontWeight = "bold";
    newDiv.style.border="1px solid #FF784F";
    newDiv.style.borderRadius = "4px"
    newDiv.style.marginBottom = "5px"
    
    newDiv.innerHTML =name+" - "+hour+":"+minute;
}

function deleteDivs()
{
    var deletor = document.getElementById("deletor").value;

    document.getElementById("smoll"+deletor).remove();
}