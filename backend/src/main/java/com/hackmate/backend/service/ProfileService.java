package com.hackmate.backend.service;

import com.hackmate.backend.model.Profile;
import com.hackmate.backend.repository.ProfileRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProfileService {

    private final ProfileRepository profileRepository;

    public ProfileService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    public Profile saveProfile(Profile profile, String email) {

        // Associate the profile with the authenticated user's email
        profile.setEmail(email);

        // Check whether this user already has a profile
        Optional<Profile> existingProfile =
                profileRepository.findByEmail(email);

        if (existingProfile.isPresent()) {
            Profile savedProfile = existingProfile.get();

            // Preserve the existing MongoDB document ID
            profile.setId(savedProfile.getId());
        }

        return profileRepository.save(profile);
    }

    public Optional<Profile> getProfile(String email) {
        return profileRepository.findByEmail(email);
    }
}