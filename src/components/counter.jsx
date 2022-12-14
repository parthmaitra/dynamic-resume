import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:1,
        tags:['tag1','tag2','tag3']
    };
    render() { 
        return (
        <React.Fragment>
            <span className={this.getBadgeClass()}>{this.formatCount()}</span>
            <button className='btn btn-secondary bt-sm'>Increment</button>
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        </React.Fragment>);
        
    }
    getBadgeClass() {
        let classes = "badge m-2 bg-";
        classes += (this.state.count === 0)? "warning" : "primary";
        return classes
    }
    formatCount() {
        const {count} = this.state;
        return count === 0? 'Zero' : count;
    }
}
 
export default Counter;