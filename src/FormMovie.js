import React, { Component } from 'react';
import axios from 'axios'

class FormMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            poster:'',
            comment:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitForm(event) {
        event.preventDefault()
        const url = 'https://post-a-form.herokuapp.com/api/movies/'
        axios
            .post(url, this.state)
            .then(res => res.data)
            .then(res => { alert('Your film has been recorded.')})
            .catch(e => {
                console.error(e)
                alert('Your movie was not recorded correctly.')
            })
    }

    render() {
        return (
            <div className="FormMovie">
                <h1>MOVIE APP</h1>
                <form onSubmit={this.submitForm}>
                    <fieldset>
                    <legend>Movie's informations</legend>
                        <div className="form-data">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-data" >
                            <label htmlFor="url">URL</label>
                            <input
                                type="url"
                                id="poster"
                                name="poster"
                                placeholder="https://example.com"
                                value={this.state.poster}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-data">
                            <label htmlFor="comment">Comment</label>
                            <textarea
                                id="comment"
                                name="comment"
                                placeholder="ex: Why do you like this movie? What marked you?" 
                                rows="5" cols="33"
                                value={this.state.comment}
                                onChange={this.handleChange}
                            />
                        </div>
                        <hr/>
                        <div className="form-data">
                            <input
                                type="submit"
                                value="Send"
                            />
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default FormMovie;