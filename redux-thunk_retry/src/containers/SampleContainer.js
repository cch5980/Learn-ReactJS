import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';

const SampleContainer = ({ getPost, getUsers, post, users, loadingPost, loadingUsers }) => {
    // getPost(1);
    // getUsers();
    useEffect(() => {
        getPost(1);
        getUsers();
        console.log('test');
    }, [getPost, getUsers]);
    return (
        <Sample 
            post={post}
            users={users}
            loadingPost={loadingPost}
            loadingUsers={loadingUsers}
        />
    );
};

export default connect(
    ({ sample }) => ({
        post: sample.post,
        users: sample.users,
        loadingPost: sample.loading.GET_POST,
        loadingUsers: sample.loading.GET_USERS
    }),
    {
        getPost,
        getUsers
    }
)(SampleContainer);