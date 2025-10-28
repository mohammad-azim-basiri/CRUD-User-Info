import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./add.css";
import toast from 'react-hot-toast';

const Add = () => {

  const users = {
    fname:"",
    lname:"",
    email:"",
    password:""
  }

  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) =>{
      const {name, value} = e.target;
      setUser({...user, [name]:value});
  }

  const submitForm = async(e) =>{
    e.preventDefault();
    await axios.post("http://localhost:8000/api/create", user)
    .then((response)=>{
       toast.success("عملیات با موفقیت انجام شد", {position:"top-right"})
       navigate("/")
    })
    .catch(error => console.log(error))
  }


  return (
    <div className='addUser'>
        <Link to={"/"}>برگشت</Link>
        <h3>اضافه کردن کاربر جدید</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="fname">نام </label>
                <input type="text" onChange={inputHandler} id="fname" name="fname" autoComplete='off' placeholder='نام' />
            </div>
            <div className="inputGroup">
                <label htmlFor="lname">نام خانوادگی</label>
                <input type="text" onChange={inputHandler} id="lname" name="lname" autoComplete='off' placeholder='نام خانوادگی' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">ایمیل</label>
                <input type="email" onChange={inputHandler} id="email" name="email" autoComplete='off' placeholder='ایمیل' />
            </div>
            <div className="inputGroup">
                <label htmlFor="password">پسورد</label>
                <input type="password" onChange={inputHandler} id="password" name="password" autoComplete='off' placeholder='پسورد' />
            </div>
            <div className="inputGroup">
                <button type="submit">اضافه کردن</button>
            </div>
        </form>
    </div>
  )
}

export default Add