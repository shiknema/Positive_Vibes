package com.positiveVibes.posts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

/*
    @TODO AutoWire PostService and create the methods needed to implement the API.
    Don't forget to add necessary annotations.
 */

@RestController

public class PostController {

	@Autowired
	private PostService postService;

	// get a list of all the post
	@GetMapping("/posts")
	public List<Post> getAll() {
		return postService.getAll();
	}

	// Get all posts related to a category
	@GetMapping("/posts/{category}")
	public List<Post> getByCategory(@PathVariable String category) {
		return postService.getByCategory(category);
	}

	// Get specific post related to a category
	@GetMapping("/posts/{Category}/{id}")
	public Post getByCategory(@PathVariable Long id, String category) {
		return postService.getByID(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
	}

	@PostMapping("/posts")
	public void addPost(@RequestBody Post post) {
		postService.save(post);
	}

	@DeleteMapping("/posts/{id}")
	public void deletePostByid(@PathVariable Long id) {
		postService.deleteById(id);
	}

	@PutMapping("/posts")
	public Post updatePost(@RequestBody Post post) {
		return postService.update(post);
	}

}
