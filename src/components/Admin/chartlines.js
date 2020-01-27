import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

class Perfomance extends Component {
	state = {
		graph: {
			labels: Object.keys(JSON.parse(localStorage.getItem('Response')).dasbhoardPage.performance).map(
				(item) => item
			),
			datasets: [
				{
					label: '# of hits',
					data: Object.values(JSON.parse(localStorage.getItem('Response')).dasbhoardPage.performance).map(
						(item) => item
					),
					backgroundColor: [ 'aqua', 'skyblue', 'lightgreen', 'orange', 'purple', 'tomato', 'yellow' ],
					hoverBackgroundColor: [ 'aqua', 'blue', 'green', 'darkOrange', 'purple', 'red', 'yellow' ],
					barPercentage: 0.25
				}
			]
		}
	};
	render() {
		return (
			<div>
				<HorizontalBar
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

export default Perfomance;
