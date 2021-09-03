import Api from "./Api";

class CommentsApi {
  getAllCommentsByPostId(id) {
    const params = { postId: id };
    return Api.get("/comments", { params });
  }

  createComment(comment) {
    return Api.post("/comments", comment);
  }

  deleteComment(id) {
    return Api.delete("/comments/" + id);
  }
}

export default new CommentsApi();
