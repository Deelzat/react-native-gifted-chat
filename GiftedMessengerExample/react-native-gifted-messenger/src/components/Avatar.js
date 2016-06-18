import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import GiftedAvatar from 'react-native-gifted-avatar';

class Avatar extends Component {
  render() {
    if (this.props.isSameUser(this.props, this.props.nextMessage) && this.props.isSameDay(this.props, this.props.nextMessage)) {
      // will display a placeholder
      return (
        <View style={this.props.customStyles.Avatar[this.props.position].container}>
          <GiftedAvatar/>
        </View>
      );
    }
    return (
      <View style={this.props.customStyles.Avatar[this.props.position].container}>
        <GiftedAvatar {...this.props.user}/>
      </View>
    );
  }
}

Avatar.defaultProps = {
  'customStyles': {},
  'isSameDay': () => {},
  'isSameUser': () => {},
  'position': null,
  'user': null,
  'nextMessage': {},
};

export default Avatar;