import Navbar from "../Navbar/Navbar";
import emailimg from '../../../assets/mail.svg'
import names from '../../../assets/names.svg'
import genderimg from '../../../assets/gender.svg';
import { useState } from 'react';
import FormData from 'form-data';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";
import { useSelector } from "react-redux";
import { editprofiledata } from "../../../redux/actions/ProfileActions";
import { useEffect } from "react";
import { profilegetdata } from "../../../redux/actions/ProfileActions";


function EditProfile(){

    const [arr , setarr]= useState([]);
    const arr1= useSelector((state)=>state.profilereducer);
    const response= useSelector((state)=>state.profilereducer);
  const [check , setCheck] =useState(0);
  const [check2 , setCheck2] =useState(0);

    useEffect(()=>{
    if(check==1){
       setarr(arr1.response)
       setUsername(arr1.response.user_name)
       setName(arr1.response.name)
       setGender(arr1.response.gender)
       setMobile(arr1.response.mobile)
    }
    } , [check])
    useEffect(()=>{
        if(response.status1==200){
         navigate("/profilepage")
        }
        if(response.status1){
            setLoading(false);
        }
        } , [response.status1])
    useEffect(()=>{
        dispatch(profilegetdata(setCheck));
        },[])
    const [username , setUsername] = useState();
    const [name , setName] = useState();
    const [gender , setGender] = useState();
    const [mobile , setMobile] = useState();

    const[loading , setLoading] = useState(false);

   const dispatch = useDispatch();
   const navigate= useNavigate();
   const fd = new FormData();

   const [correctNo , setIsCorrectNo] = useState(false);

   const rightno =/(^[6-9][0-9]{9}$)/;
  useEffect(() => {
    if (rightno.test(mobile)) {
      document.getElementById("error5").style.display = "none";
      setIsCorrectNo(true);
    } else if (mobile) {
      document.getElementById("error5").style.display = "block";
      setIsCorrectNo(false);
    }
  }, [mobile]);

    function handleUsername(e){
    setUsername(e.target.value);
    }

    function handleName(e){
      setName(e.target.value);
      }

      function handleGender(e){
        setGender(e.target.value);
        }

        function handleMobile(e){
            setMobile(e.target.value);
            }

     function handleSubmit(e){
      e.preventDefault();
      if(correctNo){
      setCheck2(0);
      setLoading(true);
      fd.append("user_name" , username);
      fd.append("name" , name);
      fd.append("mobile" , mobile);
      fd.append("gender" , gender);
      dispatch(editprofiledata( fd , setCheck2))
      }
     }   
    return(<>
     {loading ? (
        <div id="loader">
          <ReactBootStrap.Spinner animation="border" id="spinner" />
        </div>
      ) : null}
    <Navbar />
    <div id='managing'>
        <h1 id='pagehead'>Edit Profile</h1>
        <form id='flexform2' onSubmit={handleSubmit}>
        <label htmlFor='title' id='formlabel'>Username</label>
        <input type='text' id='forminput2' required value={username} onChange={handleUsername}></input>
        <img src={emailimg} id="mailimg"></img>
        <label htmlFor='title' id='formlabel'>Full Name</label>
        <input type='text' id='forminput2' placeholder={arr.name} required value={name} onChange={handleName}></input>
        <img src={names} id="mailimg"></img>
        <label htmlFor='title' id='formlabel'>Mobile Number</label>
        <input type='text' id='forminput2' placeholder={arr.mobile} required value={mobile} onChange={handleMobile}></input>
        <img src={names} id="mailimg"></img>
        <p id='error5'>Invalid Phone No.</p>
        <label htmlFor='title' id='formlabel'>Gender</label>
        <select name="foodcategory" id='forminput2' onChange={handleGender}>
              <option value="Select">--select--</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
             </select>
        <img src={genderimg} id="mailimg"></img>
        <div id='buttondiv'>
        <p id='buttonpara'><button id='formbtn3' type='submit'>Save Changes</button> <Link to='/profilepage'><button id='plike'>Cancel</button></Link></p>
      </div>
        </form>
    </div>
    </>)
}
export default EditProfile;