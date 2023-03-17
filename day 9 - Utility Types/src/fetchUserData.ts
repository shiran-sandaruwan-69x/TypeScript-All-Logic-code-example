
interface User{
    id:number,
    name:string,
    username:string,
    email:string
}

const fetchData = async (): Promise<User[]> =>{

    const data= await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
           return response.json()
        })
        .catch(err =>{
            if(err instanceof Error)
                console.log(err.message)
        })
    return data;
}

fetchData().then(users =>{
    console.log(users)
})
