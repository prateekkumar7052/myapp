

// import { Form } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";
import Search from "./Search";


const HomePage = () => {
  const [doctors, setDoctors] = useState([]);

  // Fetch user data
  const getUserData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/v1/user/getAllDoctors",
        // {}, // Empty body
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Layout>
      <Search/>
      <h1 className="text-center">HomePage</h1>
      {/* <Filters /> */}
      <Row>
        {doctors &&
          doctors.map((doctor) => (
            <DoctorList key={doctor._id} doctor={doctor} />
          ))}
      </Row>
    </Layout>
  );
};

export default HomePage;
