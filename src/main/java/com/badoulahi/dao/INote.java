package com.badoulahi.dao;

import com.badoulahi.entities.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface INote extends JpaRepository<Note, Integer> {
}
