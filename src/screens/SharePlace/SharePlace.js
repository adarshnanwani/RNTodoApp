import React, { Component } from 'react';
import { View } from 'react-native';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';

class SharePlaceScreen extends Component {
    render() {
        return (
            <View>
                <PlaceInput onPlaceSubmit={this.props.onAddPlace} />
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);