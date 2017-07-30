import React, { PropTypes } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';

const Details = ({ detailsReady, details }) => {
  if (!detailsReady) {
    return <Text>{"Loading.."}</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {details.map((detail) => (
          <View style={styles.item} key={detail._id}>
            <Text style={styles.itemText}>{detail.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

Details.propTypes = {
  detailsReady: PropTypes.bool,
  details: PropTypes.array,
};

Details.defaultProps = {
  details: [],
};

export default Details;
