import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';

import { fetchRecommendations } from '../actions/page-actions';

class Frontpage extends Component {
	constructor(props) {
		super(props);
	}

	speak(data) {
		console.log(data);
	}

	componentDidMount() {
		this.props.getStuff()
	}

	render() {
		return (
			<div>
				<div>
					<h1>Find your poison and drink it.</h1>
				</div>

				<div>
					<Geosuggest
						placeholder="Where are ya headed?"
						onSuggestSelect={data => this.speak(data)} />
				</div>
			</div>
		);
	}
}

export default Frontpage;
