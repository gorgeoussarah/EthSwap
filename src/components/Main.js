import React, { Component } from 'react'
import BuyForm from './BuyForm'
import SellForm from './SellForm'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentForm: 'buy'
    }
  }

  render() {
    let content
    if(this.state.currentForm === 'buy') {
      content = <BuyForm
        ethBalance={this.props.ethBalance}
        tokenBalance={this.props.tokenBalance}
        buyTokens={this.props.buyTokens}
      />
    } else {
      content = <SellForm
        ethBalance={this.props.ethBalance}
        tokenBalance={this.props.tokenBalance}
        sellTokens={this.props.sellTokens}
      />
    }

    return (
      <div id="content" className="mt-3" style={{ backgroundColor: 'navy', color: 'navy' }}> {/* Apply navy background color */}
      

        <div className="d-flex justify-content-between mb-3" >
          <button
              className="btn btn-light"
              style={{ color: 'navy' }}
              onClick={(event) => {
                this.setState({ currentForm: 'buy' })
              }}
            >
            Buy
          </button>
          <span className="text-muted"></span>
          <button
              className="btn btn-light"
              style={{ color: 'navy' }}
              onClick={(event) => {
                this.setState({ currentForm: 'sell' })
              }}
            >
            Sell
          </button>
        </div>

        <div className="card mb-4" style={{ marginTop: '10px' }} >

          <div className="card-body">

            {content}

          </div>

        </div>

      </div>
    );
  }
}

export default Main;