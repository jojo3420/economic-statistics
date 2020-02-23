import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sample, sampleSaga } from '../modules/sample';

function Home({ sample, sampleSaga, list }) {
	useEffect(() => {
		const fetch = async () => {
			// await sample();
			await sampleSaga();
		};
		fetch();
	}, []);

	return (
		<>
			<div>Economic-statistics</div>
			<ul>
				{list.map((data, idx) => (
					<li key={idx}>{data.CLASS_NAME}</li>
				))}
			</ul>
		</>
	);
}

const mapStateToProps = ({ sample }) => {
	return {
		list: sample.list,
	};
};
const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			sample,
			sampleSaga,
		},
		dispatch,
	);
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
