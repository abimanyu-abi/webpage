const check = async (e)=>{
    e.preventDefault()
    const form = new FormData(e.target);
    const data = {
        firstname : form.get("firstname"),
        lastname : form.get("lastname"),
        email:form.get("email"),
        number:form.get("phonenum"),
        date : form.get("date"),
        gender: form.get("gender"),
        address1:form.get("address1"),
        address2:form.get("address2")
    }
    
    const res = await fetch("http://localhost:8080",{
        method:"POST",
        headers:{
            "Content-type" : "application/json"
        },
        body:JSON.stringify(data)
    })
    const da = await res.json();
    console.log(da)
    console.log(document.getElementById("name"))
    

    
    
    
    
}