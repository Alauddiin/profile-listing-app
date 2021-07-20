

let name = document.getElementById('name').value
let age = document.getElementById('age').value
let prof = document.getElementById('prof').value
let submit = document.getElementById('submit')
let form = document.querySelector('form')
let profileTable= document.querySelector('.profile-table')


function addToList(e){



    let name =  document.getElementById('name').value
    let age =   document.getElementById('age').value
    let prof =  document.getElementById('prof').value
    let para =  document.createElement('p')



    let ProfileData = {
            name:name,
            age:age,
            profession:prof,
        }
        console.log(ProfileData);


    if(name==='' || age===''|| prof===''){
        alert("Please fillup all these fields.")
    }else{
        saveDataToLocalStorage(ProfileData)
         para.innerHTML+=`
        <span>Name:${ProfileData.name}</span>
        <span>Age:${ProfileData.age}</span>
        <span>Profession:${ProfileData.profession}</span>
    `
        para.className="para-design"
        profileTable.appendChild(para)


         document.getElementById('name').value=''
        document.getElementById('age').value=''
        document.getElementById('prof').value=''
        }
       
    

    

    e.preventDefault();

}
form.addEventListener('submit',addToList)


function saveDataToLocalStorage(profileData){
    let profiles;
    if(localStorage.getItem('profiles')===null){
               profiles=[];
    }else{
        profiles = JSON.parse(localStorage.getItem('profiles'))

    }
    profiles.push(profileData)
    localStorage.setItem("profiles",JSON.stringify(profiles));
}