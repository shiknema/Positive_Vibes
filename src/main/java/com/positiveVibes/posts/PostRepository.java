package com.positiveVibes.posts;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/*
    @TODO extend the appropriate JpaRepository to get common database operations for Post
    Add also the correct annotation to describe the Repository.
 */

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
	@Query("SELECT p FROM Post p where p.category = ?1")
	List<Post> findAllByCategory(String category);
}
