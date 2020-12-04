import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { formatMessageDate } from 'utils/formatters';
import { NavigationService } from 'services';

import { UserAvatar } from 'molecules';
import { Block, Text } from 'atoms';

function ChatItem({ data }) {

  const { message, user } = data;
  const { name } = user;
  const { content, createdAt, readAt } = message;

  const onPressConversation = () => {
    NavigationService.navigate('Conversation', { otherUser: user });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.90}
      onPress={onPressConversation}
    >
      <Block
        row center padding={1}
        backgroundColor='white1'
        borderBottomWidth={1}
        borderBottomColor='gray1'
      >
        <UserAvatar userName={name} size={48} textSize={18} />
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
            color={ readAt ? 'gray5' : 'black1' }
            size={12}
            numberOfLines={1}
          >
            {content}
          </Text>
        </Block>
        <Text
          normal
          color='gray5'
          size={12}
          numberOfLines={1}
        >
          {formatMessageDate(createdAt)}
        </Text>
        {
          !readAt
            ?
              (
                <Block flex={false}
                  width={15}
                  height={15}
                  borderRadius={8}
                  backgroundColor='primary'
                  marginLeft={0.5}
                />
              )
            : []
        }
      </Block>
    </TouchableOpacity>
  );

}

export default memo(ChatItem);