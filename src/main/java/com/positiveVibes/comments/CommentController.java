package com.positiveVibes.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comments")
public class CommentController {
	@Autowired
	private CommentService commentService;

//get a list of all the comments
	@GetMapping("")
	public List<Comment> getAllByPostId(@RequestParam("postId") Long postId) {
		return commentService.getAllByPostId(postId);
	}

//add new comments
	@PostMapping("")
	public Comment postComment(@RequestBody Comment comment) {
		return commentService.create(comment);
	}

//delete comments
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		commentService.deleteById(id);
	}
}
