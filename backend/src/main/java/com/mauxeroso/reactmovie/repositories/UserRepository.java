package com.mauxeroso.reactmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mauxeroso.reactmovie.entities.User;

public interface UserRepository extends JpaRepository <User, Long> {

	User findByEmail(String email);	
}
