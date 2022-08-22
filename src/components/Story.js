import React, { Component } from 'react'

export default class Story extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }

    render() {
        const s = this.props.storyInfo
        return (
            <div className="card" style={{ width: "18rem" }}>
                <img src={s.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{s.title}</h5>
                    <p>{s.author} - {s.source.name}</p>
                    <p className="card-text">{s.description}</p>
                    <a href={s.url} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
}
