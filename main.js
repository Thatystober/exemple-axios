const url = "http://localhost:5500/api"

const newUser = {
    name: 'thaty',
    avatar: "https://picsum.photos/200/300",
    city: 'Porto Alegre'
}

const updateUsers = {
    name: 'Fulano',
    city: 'RIO',
    avatar: "https://picsum.photos/200/300"
}

// async function getUsers(){
//     try {
//         const response = await axios.get(url)
//         const data = response.data
//         return apiResult.textContent = JSON.stringify(data)
//     } catch (error) {
//         console.error(error)
//     }
// }

function getUsers(){
    axios.get(url)
        .then(response => apiResult.textContent = JSON.stringify(response.data))
        .catch(error => console.error(error))
}

// async function addNewUser(newUser){
//     try {
//         const response = await axios.post(url, newUser)
//         const data = response.data
//         console.log(data)
//     } catch (error) {
//         console.error(error)
//     }
// }


function addNewUser(newUser){
    axios.post(url, newUser)
        .then(response => console.log(response.data))
        .catch(error => console.error(error))
}

// async function getUser(id){
//     try {
//         const response = await axios.get(`${url}/${id}`) 
//         const data = response.data

//         return userName.textContent = data.name, 
//         userCity.textContent = data.city,
//         userAvatar.src = data.avatar
        
//     } catch (error) {
//         console.error(error)
//     }
// }

function getUser(id){
    axios.get(`${url}/${id}`)
        .then(response => {
            userName.textContent = response.data.name
            userCity.textContent = response.data.city
            userAvatar.src = response.data.avatar
        })
        .catch(error => console.error(error))
}

// async function updateUser(id, userUpdated){
//     try {
//         await axios.put(`${url}/${id}`, userUpdated)
//         return console.log(response)
//     } catch (error) {
//         console.error(error)
//     }
// }

function updateUser(id, userUpdated){
    axios.put(`${url}/${id}`, userUpdated)
        .then(response => console.log(response))
        .catch(error => console.error(error))
}

// async function deleteUser(id){
//     try {
//         await axios.delete(`${url}/${id}`)
//         return console.log(response)
//     } catch (error) {
//         console.error(error)
//     }
// }


function deleteUser(id){
    axios.delete(`${url}/${id}`)
        .then(response => console.log(response))
        .catch(error => console.error(error))
}


getUsers()
// addNewUser(newUser)
getUser(2)
// updateUser(3, updateUsers)
// deleteUser(6)
