function login()
{
    let personInfo={
         email:document.getElementById("inputEmail4").value,
    pass:document.getElementById("inputPassword4").value,
    key:(Math.random()*10000).toFixed(0)
    
}
 
   localStorage.setItem(personInfo.key,JSON.stringify(personInfo))
console.log(window.localStorage.key(personInfo.key));
}


function signUp()
{

    const fullName=document.getElementById("inputName4").value
    const email=document.getElementById("inputEmail4").value;
    const pass=document.getElementById("inputPassword4").value;
   localStorage.setItem("Name",fullName)
    localStorage.setItem("Email",email)
   localStorage.setItem("Pass",pass)

}
function newTeam()
{
    
    const teamName=document.getElementById("team-name").value;
    const teamCatagory=document.getElementById("exampleFormControlSelect1").value;
    const email=document.getElementById("email12").value;
    localStorage.setItem("teamName",teamName)
    localStorage.setItem("catagory",teamCatagory)
    localStorage.setItem("membersEmail",email)
    ownerLook();


}
function ownerLook()
{
    let team=document.getElementById("teams");
    let teamdiv=document.createElement("div");
    teamdiv.setAttribute("class","teamBox");
    teamdiv.innerHTML="hellow world";
    team.appendChild(teamdiv);
    console.log(teamdiv);
}