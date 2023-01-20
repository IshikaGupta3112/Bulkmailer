import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FrgPass from './components/auth/Frgpassword';
import Login from './components/auth/Login';
import Loginotp from './components/auth/LoginOtp';
import ResetPass from './components/auth/ResetPass';
import Signup from './components/auth/signup';
import SignupDetails from './components/auth/SignupDetails';
import Signupotp from './components/auth/SignupOtp';
import FrontPage from './components/layout/Dashboard/Frontpage';
import Contacts from './components/layout/Dashboard/Group/Contacts';
import Import from './components/layout/Dashboard/Group/Import';
import Copy from './components/layout/Dashboard/Group/Copy';
import CreateGroup from './components/layout/Dashboard/Group/Creategroup';
import Uploads from './components/layout/Dashboard/Group/UploadFile';
import AddContacts from './components/layout/Dashboard/Group/AddContact';
import Mailhistory from './components/layout/Dashboard/Mailhistory';
import MyGroup from './components/layout/MyGroup/MyGroup';
import Groupinfo from './components/layout/MyGroup/Groupinfo';
import ProfilePage from './components/layout/ProfilePage/ProfilePage';
import Templates from './components/layout/Mailing/Templates/Template';
import Templates1 from './components/layout/Mailing/Templates/Template1';
import EditProfile from './components/layout/ProfilePage/ProfileEdit';
import AddPassword from './components/layout/ProfilePage/AddPassword';
import UpdatePassword from './components/layout/ProfilePage/UpdateAppPassword';
import AddEmails from './components/layout/ProfilePage/AddEmails';
import Mails from './components/layout/Mailing/Mailingpage/Mails';
import Home from './components/auth/home';

function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route path='/login' exact element={<Login />}></Route>
      <Route path="/forgot" exact element={<FrgPass />}></Route>
      <Route path="/loginotp" exact element={<Loginotp />}></Route>
      <Route path="/resetpass" exact element={<ResetPass />}></Route>
      <Route path="/signup" exact element={<Signup />}></Route>
      <Route path="/signupotp" exact element={<Signupotp />}></Route>
      <Route path="/signupdetails" exact element={<SignupDetails />}></Route>
      <Route path="/home" exact element={<FrontPage />}></Route>
      <Route path="/contacts" exact element={<Contacts />}></Route>
      <Route path="/import" exact element={<Import />}></Route>
      <Route path="/copy" exact element={<Copy />}></Route>
      <Route path="/creategroup" exact element={<CreateGroup />}></Route>
      <Route path="/uploads" exact element={<Uploads />}></Route>
      <Route path="/addcontacts" exact element={<AddContacts />}></Route>
      <Route path="/mailhistory" exact element={<Mailhistory />}></Route>
      <Route path="/mygrp" exact element={<MyGroup />}></Route>
      <Route path="/groupinfo" exact element={<Groupinfo />}></Route>
      <Route path="/profilepage" exact element={<ProfilePage />}></Route>
      <Route path="/templates" exact element={<Templates />}></Route>
      <Route path="/template-1" exact element={<Templates1 />}></Route>
      <Route path="/editprofile" exact element={<EditProfile />}></Route>
      <Route path="/addpassword" exact element={<AddPassword />}></Route>
      <Route path="/updatepassword" exact element={<UpdatePassword />}></Route>
      <Route path="/addmails" exact element={<AddEmails />}></Route>
      <Route path="/mails" exact element={<Mails />}></Route>
      <Route path="/" exact element={<Home />}></Route>
     
    </Routes>
  </Router>
  </>
  );
}

export default App;
