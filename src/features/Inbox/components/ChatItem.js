import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { Block, Text } from 'atoms';
import { formatMessageDate } from 'utils/formatters';
import { NavigationService } from 'services';

function ChatItem({ data }) {

  const { message, user } = data;
  const { name } = user;
  const { content, created_at, read_at } = message;

  const messages = useStoreState(state => state.chat.items);
  const setCurrentUser = useStoreActions(actions => actions.chat.setCurrentUser);

  const onPressConversation = () => {
    setCurrentUser(user);
    NavigationService.navigate('Chat');
  };

  return (
    <TouchableOpacity
      activeOpacity={0.10}
      onPress={onPressConversation}
    >
      <Block 
        row center padding={1}
        backgroundColor='white1'
        borderBottomWidth={1}
        borderBottomColor='gray1'
      >
        {/* <UserAvatar userName={name} size={48} textSize={18} /> */}
        <Block flex={1} paddingHorizontal>
          <Text
            semibold
            color='black1'
            size={14}
            numberOfLines={1}
          >
            {name}
          </Text> 
          <Text
            semibold
            color={ read_at ? 'gray5' : 'black1' }
            size={12}
            numberOfLines={1}
          >
            {messages ? messages[0].text : content}
          </Text>
        </Block>
        <Text
          normal
          color='gray5'
          size={12}
          numberOfLines={1}
        >
          {formatMessageDate(created_at)}
        </Text>
        {
          !read_at && 
          <Block flex={false} 
            width={15}
            height={15}
            borderRadius={8}
            backgroundColor='primary'
            marginLeft={0.5}
          />
        }
      </Block>
    </TouchableOpacity>
  );

}

export default memo(ChatItem);