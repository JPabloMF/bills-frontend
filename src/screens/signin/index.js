import React, { useState } from "react";

import { connect } from "react-redux";
import {saveLogin, cleanLogin} from "../../store/actions/index";

import Input from "../../components/input/index";
import Button from "../../components/button/index";


const SignIn = props => {
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const handleChange = ({target}) => {
    const { name, value } = target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.saveLogin(inputs)
  };

  const handleClean =()=>{
    props.cleanLogin();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Email"
        onChange={handleChange}
        value={inputs.email}
        name="email"
        type="email"
      />
      <Input
        placeholder="Password"
        onChange={handleChange}
        value={inputs.password}
        name="password"
        type="password"
      />
      <Button title="Sign In" type="Submit" />
      <Button title="Clean" type="Button" onClick={handleClean} />
    </form>
  );
};

const mapStateToProps = (state)=>{
  const {login : {inputs}} = state;
  return {inputs};
};

export default connect(mapStateToProps,{saveLogin, cleanLogin})(SignIn);
