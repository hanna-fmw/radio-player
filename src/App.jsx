import './App.css'
import React, { useState, useEffect } from 'react'

function App() {
	const [data, setData] = useState([])

	function getRadioPlayerData() {
		fetch('https://api.sr.se/api/v2/channels?format=json&size=100')
			.then((response) => response.json())
			.then((json) => {
				setData(json.channels)
			})
	}

	useEffect(() => {
		getRadioPlayerData()
	}, [])

	return (
		<>
			<div className='wrapper'>
				{data.map((item, index) => (
					<div
						key={index}
						className='container'
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: `#${item.color}`,
							marginBottom: '50px',
							padding: '30px',
							boxShadow: `1px 2px 2px #${333}`,
							borderRadius: '10px',
						}}>
						<img src={item.image} style={{ width: '200px' }} />
						<audio
							controls
							style={{
								width: '250px',
								height: '30px',
								backgroundColor: `#${item.color}`,
								marginTop: '20px',
								marginBottom: '25px',
							}}>
							<source src={item.liveaudio.url} type='audio/mpeg' />
						</audio>
						<div
							style={{
								color: 'white',
								fontSize: '12px',
								maxWidth: '200px',
								textAlign: 'center',
							}}>
							{item.tagline}
						</div>
					</div>
				))}
			</div>
		</>
	)
}
export default App
