function saveToLocalStorage(event){

    event.preventDefault();

    const name = event.target.name.value;

    const email = event.target.email.value;

    const date = event.target.date.value;

    const phonenumber = event.target.phonenumber.value;

    const obj = {

        name,

        email,

        date,

        phonenumber

    }
    window.addEventListener("DOMContentLoaded", () => {
        axios.get("https://crudcrud.com/api/f612f9980bf940ca956b20e06710a104/appointmentData", obj)
    .then((respone)=>{
        // console.log(respone)
        for(var i=0;i<Response.data.length;i++){
            showNewUserScreen(response.data[i])
        }
    })
    .catch((err)=>{
        console.log(err)
        
    })
    
    

    //localStorage.setItem(obj.name,JSON.stringify(obj));

    showNewUserScreen(obj)

})
}

function showNewUserScreen(obj){

    const parentElem = document.getElementById('ListOfitems');

    const childElem = document.createElement('li');

    childElem.textContent = obj.name + ' - ' + obj.email + ' - ' + obj.date + '-' + obj.phonenumber + '-';

    const deleteButton = document.createElement('input');

    deleteButton.type = "button";

    deleteButton.value = 'Delete';

    deleteButton.onclick = () => {
        localStorage.removeItem(obj.email);

        parentElem.removeChild(childElem);
    }

    childElem.appendChild(deleteButton);

    parentElem.appendChild(childElem);

    const editButton = document.createElement('input');

    editButton.type = 'button';
    editButton.value = 'Edit'
    editButton.onclick = () => {
        localStorage.removeItem(obj.email);
        parentElem.removeChild(childElem);
        document.getElementById('nameInputTag').value = obj.name
        document.getElementById('emailInputTag').value = obj.email
        document.getElementById('dateInputTag').value = obj.date
        document.getElementById('phoneNumberInputTag').value = obj.phonenumber
        

    }
    childElem.appendChild(deleteButton);
    childElem.appendChild(editButton);

    parentElem.appendChild(childElem);

}