
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { data } from 'jquery';
function Page(){
    const [page,setPage] = useState(1);
    const [student,setStudent] = useState([]);
const fetchData = () => {
     const datalist = fetch(`https://reqres.in/api/users?page=${page}`)
          .then((response) => response.json())
          .then((data) => {
              return data.data
          });
          datalist.then((ls) =>{
              setStudent(ls);
          });
        }
        
    const next = async() =>{
         await setPage(page === 1?page+1:page);
          fetchData();
    }
return <div>
    <Button onClick={fetchData}>CL</Button>
    <button onClick={next}>next</button>
    <div>{console.log(`student is ${student}`)}</div>
    <table border="1">
        <tr>
        <th>id</th>
        <th>Email</th>
        <th>First_Name</th>
        <th>last_Name</th>
        <th>avatar</th>
        </tr>
        {student.map((item) =>{
            return <tr>
            <td>{item.id}</td>
            <td>{item.email}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td><img src={item.avatar}></img></td>
            </tr>
        })}
        </table>

        
</div>
}
export default Page;