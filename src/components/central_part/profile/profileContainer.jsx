import React from 'react';
import {connect} from 'react-redux';

import Profile from "./profile";

import {setProfileActionCreator, getProfileThunkCreator} from "../../../redux/profilePageReducer";
import * as axios from "axios";

import {withRouter} from 'react-router-dom';

import {profileAPI} from "../../../api/api";

//короче, можно делать так, как раньше, с постами делалал, для нужной компоненты контейнерную, а не общуюю на весь profile. Потом переделай!!!
class ProfileClassContainer extends React.Component {

    constructor(props) {
        super(props);
}

componentDidMount() {

       let userId = this.props.match.params.userId;

      userId = (!userId) ? 2 : userId;
      this.props.getProfile(userId);

     /* profileAPI.getProfile(userId).then(data => {

        this.props.setProfileActionCreator(data);
    });*/
}

    render() {
       //нахрена здесь profile щтдельно прокидывать??
        return <Profile {...this.props} /*profile={this.props.profile}*//>
    }
    
}

//mapStateToProps это функция, которая принимает state и возвращает объект(новый синтаксис es6 без return)
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    profileUserAvatar: state.profilePage.profileUserAvatar

});

//для получения урла в контейнерной компоненте
let ProfileClassContainerWithUrl = withRouter(ProfileClassContainer);

const ProfileContainer = connect(mapStateToProps, {setProfileActionCreator, getProfile: getProfileThunkCreator})(ProfileClassContainerWithUrl);
export default ProfileContainer;