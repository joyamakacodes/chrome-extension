let myLead = []
let input = document.getElementById("inputEl")
let ulEl = document.getElementById("ulEl")

const leadsFromStorage = JSON.parse(localStorage.getItem("Leads"));

if(leadsFromStorage){
    myLead = leadsFromStorage
    renderList(myLead)
}

function renderList(leads){
    let listItem = " "
    for(let i=0; i < leads.length; i++){
        listItem += `<li>
        <a href =' ${leads[i]} ' target= '_blank'> ${leads[i]}</a>
        </li>`
    }
    ulEl.innerHTML = listItem

}


let tabBtn = document.getElementById("tabBtn");
tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
        myLead.push(tabs[0].url)
        localStorage.setItem("Leads", JSON.stringify(myLead))
        renderList(myLead)
        
    })
})


 
let saveBtn = document.getElementById("inputBtn")
saveBtn.addEventListener("click", function(){
   
    myLead.push(input.value)
    input.value = ""
    localStorage.setItem("Leads", JSON.stringify(myLead))
    renderList(myLead)
})
let deleteBtn = document.getElementById('deleteBtn')
deleteBtn.addEventListener("dblclick", function(){
    console.log("deleted")
    myLead = []
    localStorage.clear()
    renderList(myLead)
})


