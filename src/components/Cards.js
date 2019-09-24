import React, { Component } from 'react'
import JuiceCard from './JuiceCard'


export default class Cards extends Component {

    state = {
        clicked: false
    }
    
    handleClick = (event) => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    renderJuiceCards = () => {
    return this.props.store.juices.map(juice => {
        return <JuiceCard key={juice.id} juice={juice} handleClick={this.handleClick} />
    })

    }
    render(){
        return (
            <div className='card'>
                {this.state.clicked === false ?
                (<div>
                    <div className='store-image'>
                        <img className='card-pic' src={this.props.store.image} alt='store' />
                    </div>
                    <h2>{this.props.store.name}</h2>
                    <h4>{this.props.store.address}</h4>
                    <h4>Hours: {this.props.store.hours}</h4>
                    <h4>Phone: {this.props.store.phone}</h4>
                    <h4>Rating: {this.props.store.rating}</h4>
                    <button onClick={this.handleClick}>Juices</button>
                </div>) : this.renderJuiceCards() }
                {this.state.clicked ? <button onClick={this.handleClick}>Store</button> : null}
            </div>
        )
    }
}
