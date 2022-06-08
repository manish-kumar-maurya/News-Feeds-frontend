import React, { useState,useEffect } from "react";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";

import InputField from "./InputField";
import Button from "@material-ui/core/Button";
//Username, Email, Password, Phone Number, Date of Birth, Time of Birth , Gender, Marital Status, Language and Profile picture
const UserForm = () => {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [dob, setDob] = useState("");
    const [tob, setTob] = useState("");
    const [gender, setGender] = useState("MALE");
    const [mariageStatus, setMariageStatus] = useState(true);
    const [language, setLanguage] = useState("HINDI");
    const [profilePicture, setProfilePicture] = useState("https://images.unsplash.com/photo-1652196819350-c93eaff773c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");

    const onChangePasswordHandler = (password) => {
        setPassword(password);
    };
    const onChangeUsername = (username) => {
        setUsername(username);
    };
    const onChangeEmail = (email) => {
        setEmail(email);
    };
    const onChangePhone = (phoneNumber) => {
        setPhoneNumber(phoneNumber);
    };
    const onChangeDob = (dob) => {
        setDob(dob);
    };
    const onChangeTob = (tob) => {
        setTob(tob);
    };
    // useEffect(()=>{
    //     submitHandler();
    // })
    const submitHandler = () => {
        let userInfo = { password, username,phoneNumber,email,dob,tob,language,gender,mariageStatus,profilePicture };
        fetch('http://localhost:7000/users/profile', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });


    };
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginTop="2rem"
        >
            <Typography variant="h2" color="primary">
               New Profile
            </Typography>
            {/* <Typography variant="h5" color="primary">
                Edit Password
            </Typography> */}
            <Box component="div" mt={1} display="flex" justifyContent="center">
                <Box component="div" display="flex" flexDirection="column">
                   
                    <InputField
                        value={username}
                        placeholder="Username"
                        onChange={onChangeUsername}
                    />
                    <InputField
                        value={email}
                        placeholder="Email"
                        onChange={onChangeEmail}
                    />
                    <InputField
                        value={password}
                        placeholder="Password"
                        onChange={onChangePasswordHandler}
                    />
                    <InputField
                        value={phoneNumber}
                        placeholder="phone"
                        onChange={onChangePhone}
                    />
                    <InputField
                        value={dob}
                        placeholder="Date of Birth"
                        onChange={onChangeDob}
                    />
                    <InputField
                        value={tob}
                        placeholder="Time of Birth"
                        onChange={onChangeTob}
                    />
                   
                    <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        onClick={() => submitHandler()}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default UserForm;