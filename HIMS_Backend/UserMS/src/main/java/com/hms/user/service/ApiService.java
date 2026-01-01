package com.hms.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.hms.user.dto.Roles;
import com.hms.user.dto.UserDTO;

import reactor.core.publisher.Mono;

@Service
public class ApiService {

	@Autowired
	private WebClient.Builder webClient;
	
//	public Mono<Long> addProfile(UserDTO userDTO){
//		if(userDTO.getRole().equals(Roles.DOCTOR)) {
//			return webClient.build().post().uri("http://localhost:8081/profile/doctor/add").bodyValue(userDTO).retrieve().bodyToMono(Long.class);
//		}else if(userDTO.getRole().equals(Roles.PATIENT)) {
//			return webClient.build().post().uri("/profile/patient/add").bodyValue(userDTO).retrieve().bodyToMono(Long.class);
//
//		}
//		return null;
//	}
	
	public Mono<Long> addProfile(UserDTO userDTO) {

	    if (userDTO == null || userDTO.getRole() == null) {
	        return Mono.error(new IllegalArgumentException("User role must not be null"));
	    }

	    String uri;

	    if (Roles.DOCTOR.equals(userDTO.getRole())) {
	        uri = "/profile/doctor/add";
	    } else if (Roles.PATIENT.equals(userDTO.getRole())) {
	        uri = "/profile/patient/add";
	    } else {
	        return Mono.error(new IllegalArgumentException("Invalid role"));
	    }

	    return webClient.build()
	            .post()
	            .uri(uri)
	            .bodyValue(userDTO)
	            .retrieve()
	            .onStatus(
	                HttpStatusCode::isError,
	                response -> response.bodyToMono(String.class)
	                        .flatMap(body ->
	                                Mono.error(new RuntimeException("Profile service error: " + body))
	                        )
	            )
	            .bodyToMono(Long.class);
	}

}
