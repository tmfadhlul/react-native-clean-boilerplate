import React, {useEffect} from 'react';
import {FlatList, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {getUsers} from '@app/redux/actions/users';
import {Header, Filter} from './components';

const Base = () => {
  const dispatch = useDispatch();
  const {users, loading, error} = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <View
      style={{
        paddingTop: 50,
        paddingHorizontal: 30,
      }}>
      <Header />
      <Filter users={users} loading={loading} />
    </View>
  );
};

export default Base;
