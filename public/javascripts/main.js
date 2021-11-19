const gender = document.getElementsByName('gender');
const status = document.getElementsByName('status');


for(i of gender){
    const genderData = i.getAttribute("data");
    if(i.value===genderData){
        i.setAttribute('checked',true);
    }
}

for(i of status){
    const statusData = i.getAttribute("data");
    if(i.value===statusData){
        i.setAttribute('checked',true);
    }
}

