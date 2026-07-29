alert("Hello STUDENT")
function submitData(){

    let name= document.getElementById("input-name").value;
    let roll= document.getElementById("input-roll").value;
    let subject= document.getElementById("input-subject").value;
    let group= document.getElementById("input-group").value;

    document.getElementById("display-name").innerHTML="NAME:" + name;

    document.getElementById("display-roll").innerHTML="ROLL:" + roll;

    document.getElementById("display-subject").innerHTML="SUBJECT:" + subject;

    document.getElementById("display-group").innerHTML="GROUP:" + group;

    alert("Submitted Successfully ")

}