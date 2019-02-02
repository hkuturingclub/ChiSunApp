import { Alert } from 'antd';
import { connect } from 'react-redux';
import { createUser } from '../actions/signUp';
import React from 'react';
import SignUpForm from './SignUpForm';

class SignUp extends React.Component{

  render(){
    const { signUp, createUser } = this.props;
    const { error, uid, loggedIn } = signUp;
    return(
    <div>
      <h1> Sign Up </h1>
      {loggedIn && (
        <div><Alert message={"Your account has been successfully created with id " + uid + "."} type="success"  /></div>
      )}
      {error && <div><Alert message={error} type="error" /></div>}
      {!loggedIn && <SignUpForm onSubmit={createUser} />}
    </div>
    );
  }

}

const mapStateToProps = state => ({
  signUp: state.signUp,
});
const mapDispatchToProps = {
  createUser
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
