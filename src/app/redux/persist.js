import MMKVStorage from 'react-native-mmkv-storage';

const storage = new MMKVStorage.Loader().initialize();

const persistConfig = {
  key: '1N1R4H4514L50',
  storage,
};

export default persistConfig;
