import moment from 'moment';
import {
  SingleMessageBox,
  SingleMessage,
  Spacer,
  Avatar,
  Time,
} from './styles';

export const Message = ({
  isCurrentUser,
  avatar,
  createdAt,
  className,
  children,
}) => {
  return (
    <SingleMessageBox isCurrentUser={isCurrentUser} className={className}>
      <Time>{moment(createdAt).format('HH:mm')}</Time>
      <Avatar src={avatar} />
      <SingleMessage isCurrentUser={isCurrentUser} className={className}>
        {children}
      </SingleMessage>
      <Spacer />
    </SingleMessageBox>
  );
};
