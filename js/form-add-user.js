function addFormUser(name, second, last, nationality, city, genre, date,cell, course) {
    let currentDate = new Date()
    let dataFormUser = {}
    dataFormUser["name"] = name.value;
    dataFormUser["second-name"] = second.value;
    dataFormUser["last-name"] = last.value;
    dataFormUser["nationality"] = nationality.value;
    dataFormUser["city"] = city.value;
    dataFormUser["genre"] = genre.value;
    dataFormUser["date-birth"] = date.value;
    dataFormUser["cell"] = cell.value;
    dataFormUser["course"] = course.value;
    dataFormUser["date-inscription"] = currentDate.getFullYear()+"-"+String((currentDate.getMonth()+1)).padStart(2,"0")+"-"+String(currentDate.getDate()).padStart(2,"0");
    console.log(dataFormUser)
    cleanControl(name,second,last,nationality,city,genre,date,cell,course)
    return dataFormUser
}
function cleanControl(name, second, last, nationality, city, genre, date,cell,course) {
    name.value = ""
    second.value = ""
    last.value = ""
    nationality.value = "choose"
    city.value = "choose"
    genre.value = "choose"
    cell.value = ""
    course.value = "choose"
    
}


export { addFormUser}