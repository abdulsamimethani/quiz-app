import React, { Component } from 'react';
import Dataset from './../api/Dataset';
import Quizarea from './Quizarea';
import Scorearea from './Scorearea';

class Questionaire extends Component {
    constructor() {
        super();
        this.state = {
            current: 0,
            dataSet: Dataset,
            isFinished: false,
            correct: 0,
            inCorrect: 0,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(choice) {
        if (choice === this.state.dataSet[this.state.current].correct) {
            this.setState({ correct: this.state.correct + 1 })
        } else {
            this.setState({ inCorrect: this.state.inCorrect + 1 })
        }

        if (this.state.current === this.state.dataSet.length - 1) {
            this.setState({ isFinished: true })
        } else {
            this.setState({ current: this.state.current + 1 })
        }
    }


    render() {
        return (
            <div>
                <Quizarea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} isFinished={this.state.isFinished} />
                <Scorearea correct={this.state.correct} inCorrect={this.state.inCorrect} />
            </div>
        )
    }
}

export default Questionaire;

