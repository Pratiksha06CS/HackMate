package com.hackmate.backend.repository;

import com.hackmate.backend.model.Profile;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface ProfileRepository extends MongoRepository<Profile, String> {

    // Find a user's profile by email
    Optional<Profile> findByEmail(String email);

    // Check whether a profile exists for an email
    boolean existsByEmail(String email);

    // Find all profiles except the logged-in user's profile
    List<Profile> findByEmailNot(String email);

    // Search profiles by name, ignoring case
    List<Profile> findByFullNameContainingIgnoreCase(String fullName);

    // Search profiles by college, ignoring case
    List<Profile> findByCollegeContainingIgnoreCase(String college);

    // Find profiles that contain a particular skill
    List<Profile> findBySkillsContainingIgnoreCase(String skill);
}