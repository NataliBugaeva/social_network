import React from 'react';
import {connect} from 'react-redux';

import Profile from "./profile";

import {setProfileActionCreator} from "../../../redux/profilePageReducer";
import * as axios from "axios";

import {withRouter} from 'react-router-dom';

//короче, можно делать так, как раньше, с постами делалал, для нужной компоненты контейнерную, а не общуюю на весь profile. Потом переделай!!!
class ProfileClassContainer extends React.Component {

    constructor(props) {
        super(props);
}

componentDidMount() {

       let userId = this.props.match.params.userId;

      /* if (!userId) {
           userId = 2;
       }*/

      userId = (!userId) ? 2 : userId;

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {

        this.props.setProfileActionCreator(response.data);
    });
}

    render() {
       //нахрена здесь profile щтдельно прокидывать??
        return <Profile {...this.props} profile={this.props.profile}/>
    }
    
}

//mapStateToProps это функция, которая принимает state и возвращает объект(новый синтаксис es6 без return)
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    profileUserAvatar: state.profilePage.profileUserAvatar

});

let ProfileClassContainerWithUrl = withRouter(ProfileClassContainer);

const ProfileContainer = connect(mapStateToProps, {setProfileActionCreator})(ProfileClassContainerWithUrl);
export default ProfileContainer;