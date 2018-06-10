import React from 'react'

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
        console.log(this.props.match.params.page)
        return (<section>
                    <ul>
                        {
                            this.state.list.map((item, i) => <li key={i}>{i+1}</li>)
                        }
                    </ul>
                </section>)
    }
}