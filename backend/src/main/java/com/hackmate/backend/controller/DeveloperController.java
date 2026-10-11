package com.hackmate.backend.controller;

import com.hackmate.backend.model.Profile;
import com.hackmate.backend.repository.ProfileRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/developers")
public class DeveloperController {

    private final ProfileRepository profileRepository;

    public DeveloperController(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    // Get developers or search by name, college, or skill
    @GetMapping
    public ResponseEntity<?> getDevelopers(
            @RequestParam(required = false) String search,
            Authentication authentication) {

        String loggedInEmail = authentication.getName();

        List<Profile> developers =
                profileRepository.findByEmailNot(loggedInEmail);

        if (search != null && !search.trim().isEmpty()) {
            String keyword = search.trim().toLowerCase();

            developers = developers.stream()
                    .filter(profile ->
                            contains(profile.getFullName(), keyword)
                            || contains(profile.getCollege(), keyword)
                            || containsSkill(profile.getSkills(), keyword))
                    .toList();
        }

        // Return only public profile information.
        List<Map<String, Object>> results = developers.stream()
                .map(profile -> {
                    Map<String, Object> developer = new java.util.LinkedHashMap<>();

                    developer.put("id", profile.getId());
                    developer.put("fullName", profile.getFullName());
                    developer.put("college", profile.getCollege());
                    developer.put("branch", profile.getBranch());
                    developer.put("skills", profile.getSkills());
                    developer.put("experienceLevel", profile.getExperienceLevel());
                    developer.put("interests", profile.getInterests());
                    developer.put("preferredRole", profile.getPreferredRole());
                    developer.put("availability", profile.getAvailability());
                    developer.put("github", profile.getGithub());
                    developer.put("portfolio", profile.getPortfolio());

                    return developer;
                })
                .toList();

        return ResponseEntity.ok(results);
    }

    private boolean contains(String value, String keyword) {
        return value != null
                && value.toLowerCase().contains(keyword);
    }

    private boolean containsSkill(
            List<String> skills, String keyword) {

        return skills != null
                && skills.stream().anyMatch(
                        skill -> contains(skill, keyword));
    }
}