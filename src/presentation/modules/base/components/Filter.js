import React, {useState} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';

const RenderItem = ({item, index, activeTab, handleChangeTab}) => {
  return (
    <TouchableOpacity
      onPress={() => handleChangeTab(index)}
      style={{
        backgroundColor: activeTab === index ? '#81C8D7' : 'white',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 25,
      }}>
      <Text
        style={{
          color: activeTab === index ? 'white' : 'gray',
          fontWeight: '500',
        }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

const Filter = ({users, loading}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeTab = idx => {
    setActiveTab(idx);
  };

  return (
    <View
      style={{
        paddingTop: 30,
      }}>
      <FlatList
        numColumns={2}
        contentContainerStyle={{
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        data={users}
        renderItem={props => (
          <RenderItem
            {...props}
            activeTab={activeTab}
            handleChangeTab={handleChangeTab}
          />
        )}
      />
    </View>
  );
};

export default Filter;
