import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Latesthits extends Component {
	state = {
		graph: {
			labels: JSON.parse(localStorage.getItem('Response')).dasbhoardPage.latestHits.months,
			datasets: [
				{
					label: 'Latest Hits',
					data: JSON.parse(localStorage.getItem('Response')).dasbhoardPage.latestHits.latest,
					borderColor: 'aqua',
					backgroundColor: 'transparent'
				},
				{
					label: 'Featured',
					data: JSON.parse(localStorage.getItem('Response')).dasbhoardPage.latestHits.featured,
					borderColor: 'tomato',
					backgroundColor: 'transparent'
				},
				{
					label: 'Popular Hits',
					data: JSON.parse(localStorage.getItem('Response')).dasbhoardPage.latestHits.popular,
					borderColor: 'purple',
					backgroundColor: 'transparent'
				}
			]
		}
	};
	render() {
		return (
			<div className="latestHits">
				<Line
					options={{
						responsive: true,
						elements: {
							point: {
								radius: 0
							}
						},
						legend: {
							labels: { fontColor: '#fff' }
						},
						scales: {
							xAxes: [
								{
									ticks: {
										fontColor: '#fff'
									}
								}
							],
							yAxes: [
								{
									ticks: {
										fontColor: '#fff'
									},
									scaleLabel: {
										display: true,
										labelString: 'Hits',
										fontColor: '#fff'
									}
								}
							]
						}
					}}
					data={this.state.graph}
				/>
			</div>
		);
	}
}

export default Latesthits;
