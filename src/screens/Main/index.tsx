import * as React from 'react';
import {Component} from 'react';
import {Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Redux
import {connect} from 'react-redux';

//  Components
import {colors} from '../../global';
import {translate} from '../../locales';
import {Splash, Welcome, Title, Info} from './styles';

const spinner = require('../../assets/img/react.png');

class Main extends Component {
  render() {
    return (
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={{flex: 1}}>
        <Splash>
          <Image
            source={spinner}
            style={{maxWidth: '50%', resizeMode: 'contain'}}
          />
          <Welcome>{translate(['initial', 'welcome'])}</Welcome>
          <Title>{translate(['initial', 'title'])}</Title>
          <Info>{translate(['initial', 'info'])}</Info>
        </Splash>
      </LinearGradient>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapStateToDispatch = {};

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(Main);
