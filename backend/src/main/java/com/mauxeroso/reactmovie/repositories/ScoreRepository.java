package com.mauxeroso.reactmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mauxeroso.reactmovie.entities.Score;
import com.mauxeroso.reactmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository <Score, ScorePK> {

}
