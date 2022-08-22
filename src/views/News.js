import React, { Component } from 'react'
import Story from '../components/Story';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            newsStories: []
        }
    }


    getStory = async (input) => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=baa4f0a6ff5949ada2be61c06cff15a1&pageSize=20`)
        const data = await res.json()
        console.log(data)
        this.setState({ newsStories: data.newsStories })
    };

    // async componentDidMount() {
    //     this.getStory("shopping")
    // };

    showStories = () => {
        return this.state?.newsStories?.map((s, i) =>
        (
            <Story key={i} storyInfo={s}/>
        )
        )
    };

    searchNews = (e) => {
        e.preventDefault();
        const input = e.target.searchNews.value;
        this.getStory(input)
    };

    render() {
        return (
            <div>
                <form onSubmit={this.searchNews}>
                    <input name="searchNews" />
                    <button>Search The News</button>
                </form>
                <div className='row'>

                    {this.showStories()}

                </div>
            </div>
        )
    }
}
