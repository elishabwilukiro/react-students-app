import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { apiUrl } from "../Http";

const List = () => {

     const [students, setStudents] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState("");
     const fetchStudents = async () => {
          try {
               const response = await fetch(apiUrl);
               
               if(!response.ok){
                    throw new Error("Failed to fetch students");
               }

               const data =  await response.json();
               console.log(data);
               setStudents(data);
               
          } catch (err) {
               setError(err.message)
          } finally {
               setLoading(false);
          }
     }

     useEffect(()=>{
          fetchStudents();
     }, []);
     return (
          <div className="container mt-5">
               <div className="card shadow">
                    <div className="card-header d-flex p-3 justify-between">
                         <h4 className="card-title text-center">
                              Student List
                         </h4>
                         <Link to="/create" className="btn btn-primary">Add New</Link>
                    </div>
                    <div className="card-body table-responsive"> 
                         {loading && <p className="mb-0">Loading students...</p>}
                         {error && <p className="text-danger mb-0">{error}</p>}  

                         { !loading && !error && (            
                              <Table striped bordered hover>
                                   <thead>
                                        <tr>
                                             <th>#</th>
                                             <th>Name</th>
                                             <th>Email</th>
                                             <th>Phone</th>
                                             <th>Place</th>
                                             <th>Action</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {
                                             students.length > 0 ? (
                                                  students.map((student, index)=>{
                                                       return(
                                                            <tr key={index}>
                                                                 <td>{ index + 1 }</td>
                                                                 <td>{student.name}</td>
                                                                 <td>{student.email}</td>
                                                                 <td>{student.phone}</td>
                                                                 <td>{student.place}</td>
                                                                 <td>
                                                                      <div className="btn-group" role="group" aria-label="Action">
                                                                           <Link to={`/view/${student.id}`} className="btn btn-sm btn-info">View</Link>
                                                                           <Link to={`/Edit/${student.id}`} className="btn btn-sm btn-primary">Edit</Link>
                                                                           <Link onClick={()=>handleDelete(student.id)} className="btn btn-sm btn-danger">Delete</Link>
                                                                      </div>
                                                                 </td>
                                                            </tr>
                                                       )
                                                  })

                                             ) : (
                                                  <tr colspan="5" className="text-center">
                                                       <td>No student found.</td>
                                                  </tr>
                                             )
                                        }
                                   </tbody>
                              </Table>
                         )}
                    </div>
               </div>
          </div>
     );
};

export default List;