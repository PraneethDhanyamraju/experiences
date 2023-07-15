package com.example.experienceservice.experienceservice.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.experienceservice.experienceservice.Entity.Experience;
public interface ExperienceRepository extends JpaRepository<Experience,Long> {

}
