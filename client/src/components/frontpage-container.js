import { connect } from 'react-redux';

import Frontpage from './frontpage';
import { fetchRecommendations } from '../actions/page-actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  getStuff: location => dispatch(fetchRecommendations(location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Frontpage);