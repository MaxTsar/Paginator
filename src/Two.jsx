import React from 'react'
import {NavLink} from 'react-router-dom'

export default class Two extends React.Component {
    state = {
        list: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then((res) => res.json())
            .then((data) => this.setState({list: [...data]}))
    }

    render() {
        console.log(1)
        return (<section>
                    <ul>
                        <li>
                            <NavLink to='/two/1'>{+this.props.match.params.page}</NavLink>
                        </li>
                        <li>
                            <NavLink to='/two/2'>{+this.props.match.params.page + 1}</NavLink>
                        </li>
                        <li>
                            <NavLink to='/two/3'>{+this.props.match.params.page + 2}</NavLink>
                        </li>
                    </ul>
                    <ul>
                        {
                            this.state.list.map((item, i) => <li key={i}>{i+1}</li>)
                        }
                    </ul>
                </section>)
    }
}