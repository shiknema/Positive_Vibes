package com.positiveVibes.posts;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

// @TODO add Hibernate annotations to define which table and columns should be used to save the Post Object.

@Entity
@Table(name = "Post")
public class Post {
	@Column(name = "id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

// to define posts under each category
	@Column(name = "category")
	private String category;

//to give a heading to the post
	@Column(name = "heading")
	private String heading;

	@Column(name = "body")
	private String body;

//    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
//    private List<Comment> comments = new ArrayList<>();

	public Post() {
	}

	public Post(Long id, String category, String heading, String body) {
		this.id = id;
		this.category = category;
		this.heading = heading;
		this.body = body;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getHeading() {
		return heading;
	}

	public void setHeading(String heading) {
		this.heading = heading;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

}
