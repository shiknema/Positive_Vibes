import React from "react";
import PostsApi from "./../../api/PostsApi";
import PostForm from "./PostForm";
import PostCard from "./PostCard";

class PostsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts : []
        };
    }

    async createPost(postData) {
        try {
            await PostsApi.createPost(postData);
            const response = await PostsApi.getPostByCategeory(this.props.category);
            const newPosts = response.data;
            this.setState({
                posts: newPosts,
            });
        } catch (e) {
            console.error(e);
        }
    }

    async deletePost(post) {
        try {
            await PostsApi.deletePost(post.id);
            const newPosts = this.state.posts.filter(p => p.id !== post.id);
            this.setState({
                posts: newPosts,
            });
        } catch (e) {
            console.error(e);
        }
    }

    async updatePost(post) {
        try {
            await PostsApi.updatePost(post);
            const response = await PostsApi.getAllPosts();
            const newPosts = response.data;
            this.setState({
                posts: newPosts,
            });
        } catch (e) {
            console.error(e);
        }
    }



    componentDidMount() {
        PostsApi.getPostByCategeory(this.props.category)
            .then(({data}) => this.setState({posts: data}))
            .catch(err => console.error(err));
    }

    render() {
        // posts = this.state.posts;
        return (
            <div className="background-image">
                
                {this.state.posts.map(post => 
                    <PostCard key={post.id} post={post} onDeleteClick={() => this.deletePost(post)} onUpdateClick={(post) => this.updatePost(post)}/>
                )}
                 <PostForm category= {this.props.category} onSubmit={(postData) => this.createPost(postData)}/>
            </div>
        );
    }
}

export default PostsPage;