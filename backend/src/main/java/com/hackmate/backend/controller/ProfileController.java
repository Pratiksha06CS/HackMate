package com.hackmate.backend.controller;

import com.hackmate.backend.model.Profile;
import com.hackmate.backend.service.ProfileService;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    private final ProfileService profileService;

    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    // Save or update the logged-in user's profile
    @PostMapping
    public ResponseEntity<?> saveProfile(
            @RequestBody Profile profile,
            Authentication authentication) {

        String email = authentication.getName();

        Profile savedProfile =
                profileService.saveProfile(profile, email);

        return ResponseEntity.ok(Map.of(
                "message", "Profile saved successfully!",
                "profile", savedProfile
        ));
    }

    // Retrieve the logged-in user's profile
    @GetMapping
    public ResponseEntity<?> getProfile(Authentication authentication) {

        String email = authentication.getName();

        Optional<Profile> profile =
                profileService.getProfile(email);

        if (profile.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(profile.get());
    }
}