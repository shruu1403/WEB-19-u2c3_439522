// fill in javascript code here
const myForm=document.querySelector("form")
const namee=document.getElementById("name")
const empid=document.getElementById("employeeID")
const dept=document.getElementById("department")
const exp=document.getElementById("exp")
const mail=document.getElementById("email")
const mbl=document.getElementById("mbl")

let tbody=document.querySelector("tbody")

let allTask=[];
myForm.addEventListener("submit",function(e)
{
    e.preventDefault();
    let del;
    Data=
    {
        name:namee.value,
        employeeID:empid.value,
        department:dept.value,
        experience:exp.value,
        email:mail.value,
        mobile:mbl.value
    }
    if(exp.value>5)
    {
        Data["Role"]="Senior"
    }
    else if(exp.value>1 && exp.value<=5)
    {
        Data["Role"]="Junior"
    }
    else if(exp.value<=1)
    {
        Data["Role"]="Fresher"
    }

    allTask.push(Data)

    tbody.innerHTML=""
    allTask.map((ele)=>
    {
        const tr=document.createElement("tr")
        const td1=document.createElement("td")
        const td2=document.createElement("td")
        const td3=document.createElement("td")
        const td4=document.createElement("td")
        const td5=document.createElement("td")
        const td6=document.createElement("td")
        const td7=document.createElement("td")
        const td8=document.createElement("td")
        let btn=document.createElement("button")
        btn.innerText="DELETE"
        btn.addEventListener("click",function()
    {
        del=allTask.indexOf(ele)
        tr.innerHTML=""
        if(del!==-1)
        {
            allTask.splice(del,1)
        }
    })


        td1.innerText=ele.name
        td2.innerText=ele.employeeID
        td3.innerText=ele.department
        td4.innerText=ele.experience
        td5.innerText=ele.email
        td6.innerText=ele.mobile
        td7.innerText=ele.Role
        td8.append(btn)


        tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
        tbody.append(tr)

    })
})