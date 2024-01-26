import React, { Component } from 'react'
import "./ccomponents.css"

export default class CComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            error: null,
            isLoaded: false,
            news: []
        }
    }
     async componentDidMount() {
      await fetch("https://news.itmo.ru/api/news/list/?ver=2.0&lead=1&per_page=6")
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        news: result.news
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }



  render() {
    const {error, isLoaded, news} = this.state
    if (error) {
        return <p> Error {error.message}</p>
    }
    else if (!isLoaded){
        return <p>Loading...</p>
    } else {
        return(
            <div className="news__boxes">
                {news.map(item => (
                    <div key={item.name} onClick={() => window.location.href = item.url} className="news__box">
                        <img src={item.image_small}  alt="image" className="news__box-img" />
                        <div className="news__box-title">{item.date}</div>
                        <div className="news__box-descr">{item.title}</div>
                    </div>
                ))}
            </div>
        )
    }
  }
}
