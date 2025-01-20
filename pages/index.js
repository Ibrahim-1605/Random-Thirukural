//Getting the thirukural element
let thirukural = document.getElementById("thirukural");
//Merging the thirukural JSON

fetch("/thirukural.json")
.then(res=>res.json())
.then((data)=>{
    let generateButton = document.getElementById("button");
    generateButton.addEventListener("click",function(){
        let heading = document.getElementById("heading");
        if(heading){
            heading.style.display="none";
        }
        let thirukuralDiv = document.createElement("div");
        let randomKural = Math.floor(Math.random()*1330);
        thirukuralDiv.classList.add("randomKural");
        thirukuralDiv.innerHTML = `<h3>திருக்குறள்</h3>
        <h1 class="h1">"${data[randomKural].firstLine}</h1>
        <h1 class="h1">${data[randomKural].secondLine}"</h1>
        <ul>
            <li>${data[randomKural].mv}</li>
            <li>${data[randomKural].sp}</li>
            <li>${data[randomKural].mk}</li>
        </ul>
        <h1 class="engH1">"${data[randomKural].translation}"</h1>
        <p><span>Explanation:</span> ${data[randomKural].explanation}</p>
        `
        if(!thirukuralDiv.innerHTML){
            thirukural.appendChild(thirukuralDiv);
        }
        else{
            thirukural.innerHTML = ""
            thirukural.appendChild(thirukuralDiv);
        }
    });
});
