import Layout from "../../components/Layout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Col, Form, Input, Row,  message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../redux/Features/alertSlice";
// import moment from "moment";
const Profile = () => {
   const { user } = useSelector((state) => state.user);
   const [doctor, setDoctor] = useState(null);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const params = useParams();
   // update doc ==========
   //handle form
   const handleFinish = async (values) => {
     try {
       dispatch(showLoading());
       const res = await axios.post(
         "http://localhost:3000/api/v1/doctor/updateProfile",
         {
           ...values,
           userId: user._id,
         },
         {
           headers: {
             Authorization: `Bearer ${localStorage.getItem("token")}`,
           },
         }
       );
       dispatch(hideLoading());
       if (res.data.success) {
         message.success(res.data.message);
         navigate("/");
       } else {
         message.error(res.data.success);
       }
     } catch (error) {
       dispatch(hideLoading());
       console.log(error);
       message.error("Somthing Went Wrrong ");
     }
   };
  return (
    <Layout>
      <h1>User Profile</h1>
    </Layout>
  );
};

export default Profile;
