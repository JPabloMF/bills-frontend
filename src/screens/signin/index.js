import React, { useState } from "react";
import Input from "../../components/input/index";
import Button from "../../components/button/index";

import { connect } from "react-redux";
import {saveLogin, cleanLogin} from "../../store/actions/index";

const SignIn = props => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { email, password } = inputs;

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  };

  const handleSubmite = e => {
    e.preventDefault();
    props.saveLogin({...inputs})
  };

  const handleClean =()=>{
    console.log('ddjd')
    props.cleanLogin();
  }

  return (
    <form onSubmit={handleSubmite}>
      <Input
        placeholder="Email"
        onChange={handleChange}
        value={email}
        name="email"
        type="email"
      />
      <Input
        placeholder="Password"
        onChange={handleChange}
        value={password}
        name="password"
        type="password"
      />
      <Button title="Sign In" type="Submit" />
      <Button title="Clean" type="Button" onClick={handleClean} />
    </form>
  );
};

const mapStateToProps = (state)=>{
  const {login : {inputs}} = state
  return {inputs};
};

export default connect(mapStateToProps,{saveLogin, cleanLogin})(SignIn);
