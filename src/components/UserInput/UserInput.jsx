import React, { useState } from 'react';
import styles from './UserInput.module.css'

function UserInput(props) {
	const initialUserInput = {
		'current-savings': 10000,
		'yearly-contribution': 1200,
		'expected-return': 7,
		duration: 10,
	};
	const [userInput, setUserInput] = useState(initialUserInput);

	function submitHandler(evt) {
		evt.preventDefault();
		props.onCalculate(userInput)
	}
	function resetHandler() {
		setUserInput(initialUserInput);
	}
	function inputChangeHandler(input, value) {
		setUserInput((prevInput) => {
			return { ...prevInput, [input]: +value };
		});
	}
	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<div className={styles['input-group']}>
				<p>
					<label htmlFor="current-savings">Current Savings ($)</label>
					<input
						value={userInput['current-savings']}
						type="number"
						id="current-savings"
						onChange={(evt) =>
							inputChangeHandler('current-savings', evt.target.value)
						}
					/>
				</p>
				<p>
					<label htmlFor="yearly-contribution">Yearly Savings ($)</label>
					<input
						value={userInput['yearly-contribution']}
						type="number"
						id="yearly-contribution"
						onChange={(evt) =>
							inputChangeHandler('yearly-contribution', evt.target.value)
						}
					/>
				</p>
			</div>
			<div className={styles['input-group']}>
				<p>
					<label htmlFor="expected-return">
						Expected Interest (%, per year)
					</label>
					<input
						value={userInput['expected-return']}
						type="number"
						id="expected-return"
						onChange={(evt) =>
							inputChangeHandler('expected-return', evt.target.value)
						}
					/>
				</p>
				<p>
					<label htmlFor="duration">Investment Duration (years)</label>
					<input
						value={userInput['duration']}
						type="number"
						id="duration"
						onChange={(evt) => inputChangeHandler('duration', evt.target.value)}
					/>
				</p>
			</div>
			<p className={styles.actions}>
				<button type="reset" className={styles.buttonAlt} onClick={resetHandler}>
					Reset
				</button>
				<button type="submit" className={styles.button}>
					Calculate
				</button>
			</p>
		</form>
	);
}

export default UserInput;
