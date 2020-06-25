import React from 'react';

import {connect} from 'react-redux'

import {setAuthUserDataActionCreator, authMeThunkCreator} from "../../redux/authReducer";
import Header from "./header";
import {headerAPI} from "../../api/api";

class HeaderClassComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
//здесь authMe это санка, которую прокинула из authReducer
        this.props.authMe();
       /*headerAPI.authMe().then(data => {

            if(data.resultCode === 0) {
                let {id, login, email} = data.data;
                this.props.setAuthUserDataActionCreator(id, login, email);
            }
        })*/
    }

    render() {

        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth
});

const HeaderContainer = connect(mapStateToProps, {setAuthUserDataActionCreator, authMe: authMeThunkCreator})(HeaderClassComponent);
export default HeaderContainer;