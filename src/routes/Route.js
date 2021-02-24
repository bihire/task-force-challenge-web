/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function RouteWrapper({ component: Component, user, isPrivate, roleRequired, ...rest }) {
    const signedIn = user.user.email === '' ? false : true;

    if (isPrivate && !signedIn) {
        return <Redirect to="/" />;
    }

    if (!isPrivate && signedIn) {
        return <Redirect to="/home" />;
    }
    return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    roleRequired: PropTypes.string,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
    roleRequired: '',
};

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(RouteWrapper);