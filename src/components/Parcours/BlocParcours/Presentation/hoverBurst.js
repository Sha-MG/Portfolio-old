import React from 'react'
import mojs from 'mo-js'

class HoverBurst extends React.Component {
  state = {
    numBurstsToGenerate: 10,
    bursts: [],
    colors : ['#FEBD59',
              '#D48115',
              '##FFB3BA',
              '#e09bed',
              '#FFFFBA',
              '#BAFFC9',
              '#BAE1FF']
  }

  chosenColor = Math.floor(Math.random() * this.state.colors.length)

  rand = ({ min = 0, max = 1, int = true }) => {
    if (int) {
      return Math.floor(Math.random() * (max - min) + min)
    } else {
      return Math.random() * (max - min) + min
    }
  }

  generateBursts = (numBursts = this.state.numBurstsToGenerate) => {
    this.setState({
      bursts: [],
    })

    while (this.state.bursts.length < this.state.numBurstsToGenerate) {
      this.state.bursts.push(
        new mojs.Burst({
          left: 0,
          top: 0,
          radius: { 4: 19 },
          angle: this.rand({ min: 0, max: 359 }),
          children: {
            shape: 'line',
            radius: this.rand({ min: 4, max: 20 }),
            scale: this.rand({ min: 1, max: 1.5, int: false }),
            stroke: this.state.colors[this.chosenColor],
            strokeDasharray: `100%`,
            strokeDashoffset: { '-100%': `100%` },
            duration: this.rand({ min: 300, max: 700 }),
            easing: `quad.out`,
          },
          onStart() {
            this.el.style.zIndex = `9999`
          },
          onComplete() {
            this.el.style.zIndex = `-666`
          },
        }),
      )
    }
  }

  componentDidMount() {
    if (this.state.bursts.length !== this.state.numBurstsToGenerate) {
      this.generateBursts()
    }
  }

  kaboom = (e, child) => {
    e.stopPropagation()

    if (this.state.bursts.length !== this.state.numBurstsToGenerate) {
      this.generateBursts()
    }

    this.state.bursts[this.rand({ max: this.state.bursts.length })]
      .tune({ x: e.pageX, y: e.pageY })
      .replay()

    if (child.props.onMouseOver) {
      child.props.onMouseOver()
    }
  }

  render() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        onMouseOver: e => this.kaboom(e, child),
        style: {
          cursor: `pointer`,
          userSelect: `none`,
        },
      })
    })
  }
}

export default HoverBurst
