package com.mauxeroso.reactmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mauxeroso.reactmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
