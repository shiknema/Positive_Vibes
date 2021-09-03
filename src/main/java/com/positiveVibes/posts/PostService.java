package com.positiveVibes.posts;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/*
    @TODO Autowire the PostRepository and use it to implement all the service methods.
 */
@Service
public class PostService {

	@Autowired
	private PostRepository repository;
	private static Long idCounter = 1L;

	// Get a list of all the post
	public List<Post> getAll() {
		return repository.findAll();
	}

	public Optional<Post> getByID(Long id) {
		// @TODO get a post by ID if it exists
		return repository.findById(id);
	}

	public Post save(Post post) {
		return repository.save(post);
	}

	public Post update(Post post) {
		// @TODO update the post if it exists in DB and return the updated post.
		return repository.save(post);
	}

	public void deleteById(Long id) {
		// @TODO delete the post by id
		repository.deleteById(id);
	}

	public List<Post> getByCategory(String category) {
		return repository.findAllByCategory(category);
	}

}
