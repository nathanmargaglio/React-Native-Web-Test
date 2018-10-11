import React, { Component  } from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'
export default class App extends Component {

	constructor(props) {
		super(props)
		this.pos = true;
		this.moveAnimation = new Animated.ValueXY({ x: 0, y: 0 })
	}

	_moveBall = () => {
		if (this.pos) {
			Animated.spring(this.moveAnimation, {
				toValue: { x: 0, y: -100 },
			}).start();
			this.pos = false;
		}
		else {
			Animated.spring(this.moveAnimation, {
				toValue: { x: 0, y: 0 },
			}).start();
			this.pos = true;
		}
	}

	render() {
		return (
			<View style={styles.app}>
				<Animated.View style={[styles.tennisBall, this.moveAnimation.getLayout()]}>
					<TouchableWithoutFeedback style={styles.button} onPress={this._moveBall}>
						<View>
							<Text style={styles.buttonText}>Press</Text>
						</View>
					</TouchableWithoutFeedback>
				</Animated.View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	app: {
			flex: 1,
			backgroundColor: '#222',
			padding: 20,
			justifyContent: 'center',
			alignItems: 'center'
	},
	tennisBall: {
		    display: 'flex',
		    justifyContent: 'center',
		    alignItems: 'center',
		    backgroundColor: 'greenyellow',
		    borderRadius: 100,
		    width: 100,
		    height: 100,

	},
	button: {
		    paddingTop: 24,
		    paddingBottom: 24,

	},
	buttonText: {
		    fontSize: 24,
		    color: '#333',

	}
})
