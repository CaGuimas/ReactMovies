package com.mauxeroso.reactmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mauxeroso.reactmovie.dto.MovieDTO;
import com.mauxeroso.reactmovie.dto.ScoreDTO;
import com.mauxeroso.reactmovie.entities.Movie;
import com.mauxeroso.reactmovie.entities.Score;
import com.mauxeroso.reactmovie.entities.User;
import com.mauxeroso.reactmovie.repositories.MovieRepository;
import com.mauxeroso.reactmovie.repositories.ScoreRepository;
import com.mauxeroso.reactmovie.repositories.UserRepository;

@Service
public class ScoreService {

	@Autowired 
	private MovieRepository movieRepository;

	@Autowired
	private ScoreRepository scoreRepository;

	@Autowired
	private UserRepository userRepository;

	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {

		User user = userRepository.findByEmail(dto.getEmail());
		if (user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);

		}

		Movie movie = movieRepository.findById(dto.getMovieid()).get();

		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());

		score = scoreRepository.saveAndFlush(score);

		double sum = 0.0;
		for (Score s : movie.getScores()) {
			sum = sum + s.getValue();
		}

		double avg = sum / movie.getScores().size();
		movie.setCount(movie.getScores().size());

		movie = movieRepository.save(movie);
		return new MovieDTO(movie);

	}

}
