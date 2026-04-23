import { memo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiUrl } from "../Http";

const Create = () => {
     const [id, setId] = useState("");
     const [name, setName] = useState("");
     const [phone, setPhone] = useState("");
     const [email, setEmail] = useState("");
     const [place, setPlace] = useState("");
     const [validate, setValidate] = useState(false);
     const navigate = useNavigate;

     const handleSubmit = async (e) => {
          e.preventDefault();

          const studentData = {
               id: Number(id),
               name,
               email,
               phone,
               place
          };
          try{
               const response = fetch(apiUrl,{
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                    },
                    body: JSON.stringify(studentData)
               });
               
               if(!response.ok) throw new Error("Failed to save data");

               // const data = await response.json();
               alert("Student data saved successfully");

               // Reset form
               setId("");
               setName("");
               setEmail("");
               setPhone("");
               setPlace("");

               setTimeout(() => {
                    navigate("/");
               }, 200);

          

          }catch (error) {
               console.error(error.message);

          }
     } 
return (
          <div className="container mt-5">
               <div className="card shadow">
                    <div className="card-header d-flex p-3 justify-between">
                         <h4 className="card-title text-center">
                              Create Student
                         </h4>
                         <Link to="/" className="btn btn-primary">Back</Link>
                    </div>
                    <div className="card-body"> 

                         <form onSubmit={(e)=>handleSubmit(e)}>
                              <div className="row">
                                   <div className="col-md-6 col-sm-12 mb-3">
                                        <div className="form-group">
                                             <label htmlFor="">ID:</label>
                                             <input 
                                                  required
                                                  type="number" 
                                                  className="form-control" 
                                                  placeholder="ID" 
                                                  value={id}
                                                  onChange={(e)=>setId(e.target.value)}
                                             />
                                             {
                                                  id.length==0 && validate && <small className="text-danger">Please enter ID</small>
                                             }
                                        </div>
                                   </div>
                                   <div className="col-md-6 col-sm-12 mb-3">
                                        <div className="form-group">
                                             <label htmlFor="">Name:</label>
                                             <input 
                                                  required
                                                  type="text" 
                                                  className="form-control" 
                                                  placeholder="Full name" 
                                                  value={name}
                                                  onChange={(e)=>setName(e.target.value)}
                                                  onMouseDown={()=>setValidate(true)}
                                             />
                                             {
                                                  name.length===0 && validate && <small className="text-danger">Please enter full name</small>
                                             }
                                        </div>
                                   </div>
                                   <div className="col-md-6 col-sm-12 mb-3">
                                        <div className="form-group">
                                             <label htmlFor="">Email:</label>
                                             <input 
                                                  required
                                                  type="text" 
                                                  className="form-control" 
                                                  placeholder="Email address" 
                                                  value={email}
                                                  onChange={(e)=>setEmail(e.target.value)}
                                                  onMouseDown={()=>setValidate(true)}
                                             />
                                             {
                                                  email.length===0 && validate && <small className='text-danger'>Please enter email address</small>
                                             }
                                        </div>
                                   </div>
                                   <div className="col-md-6 col-sm-12 mb-3">
                                        <div className="form-group">
                                             <label htmlFor="">Phone:</label>
                                             <input 
                                                  required
                                                  type="text" 
                                                  className="form-control" 
                                                  placeholder="Phone number" 
                                                  value={phone}
                                                  onChange={(e)=>setPhone(e.target.value)}
                                                  onMouseDown={()=>setValidate(true)}
                                             />
                                             {
                                                  phone.length===0 && validate && <small className="text-danger">Please enter phone number</small>
                                             }
                                        </div>
                                   </div>
                                   <div className="col-md-12 col-sm-12 mb-3">
                                        <div className="form-group">
                                             <label htmlFor="">Place:</label>
                                             <input 
                                                  required
                                                  type="text" 
                                                  className="form-control" 
                                                  placeholder="Place / location" 
                                                  value={place}
                                                  onChange={(e)=>setPlace(e.target.value)}
                                                  onMouseDown={()=>setValidate(true)}
                                             />
                                             {
                                                  place.length===0 && validate && <small className="text-danger">Please enter place location</small>
                                             }
                                        </div>
                                   </div>
                                   <div className="col-md-12 col-sm-12 mb-3">
                                        <button className="btn btn-secondary w-100">Save</button>
                                   </div>
                              </div>
                         </form>
                         
                    </div>
               </div>
          </div>
     );
};

export default memo(Create);