import React from "react";
import CommentList from "../comments/CommentList";
import { Row } from 'react-bootstrap';


class PostCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editPostbody: null,
            setBody: null
        };
        this.handleSubmit.bind(this);
    }
    handleSubmit = () => {
        // Invoke the passed in event callback
        this.props.onUpdateClick({ body: this.state.editPostbody, id: this.state.post.id });

        // Clear the input field
        this.props.setBody("");
    };
    render() {
        return (

            <Row>
                <div className="card mt-3 ml-3 col-md-11">
                    <div className="card-body" id="post{this.props.post.id}">
                        <h5>{this.props.post.heading}</h5>
                        <p>{this.props.post.body}</p>
                        <button class="btn btn-outline-info " type="button" data-toggle="collapse" data-target={"#collapseComments" + this.props.post.id} aria-expanded="false" aria-controls={"#collapse" + this.props.post.id}>
                            Comment
                        </button>
                        <button className="btn btn-outline-danger offset-md-1" onClick={this.props.onDeleteClick}>
                            Delete
                        </button>

                        <div class="collapse" id={"collapse" + this.props.post.id}>
                            <div>
                                <div className="form-group">
                                    <textarea value={this.state.editPostbody}
                                        onChange={e => this.setState({ body: e.target.value })} />
                                </div>

                                <div className="form-group">
                                    <button
                                        className="btn btn-outline-success"
                                        onClick={this.handleSubmit}>
                                        Post
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="collapse" id={"collapseComments" + this.props.post.id}>
                            <div className="comment-body">
                                <CommentList post={this.props.post} />
                            </div>
                        </div>
                    </div>
                </div>

            </Row>
        )
    }
}

export default PostCard;