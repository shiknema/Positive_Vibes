package com.positiveVibes.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {

	@Autowired
	public CommentRepository commentRepository;

//Get a list of all the comments
	public List<Comment> getAllByPostId(Long postId) {
		return commentRepository.findAllByPostId(postId);
	}

	public Optional<Comment> getById(Long id) {
		return commentRepository.findById(id);
	}

	public Comment create(Comment comment) {
		return commentRepository.save(comment);
	}

	public void deleteById(Long id) {
		commentRepository.deleteById(id);
	}
}
