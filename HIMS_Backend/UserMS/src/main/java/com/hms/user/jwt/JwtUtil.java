package com.hms.user.jwt;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtUtil {
	
	private static final Long JWT_TOKEN_VALIDITY=5*60*60L;
	
	private static final String JWT_SECRET_KEY="d6965dd0f2df77f74b60ba780598f454e31953ce434d6ec6b4e02a35460c81715f8420a8da0b854d0e7adee4be33d0ee0e61c41c8217fe3120fbb4f32b98d8d5";
	
	public String generateToken(UserDetails userDetails) {
		Map<String, Object> claims=new HashMap<>();
		CustomUserDetails user=(CustomUserDetails) userDetails;
		claims.put("id", user.getId());
		claims.put("email", user.getEmail());
		claims.put("role", user.getRole());
		claims.put("name", user.getName());
		
		return doGenerateToken(claims, user.getUsername());
	}
	
	public String doGenerateToken(Map<String, Object> claims, String email) {
		return Jwts.builder()
		        .setClaims(claims)
		        .setSubject(email)
		        .setIssuedAt(new Date(System.currentTimeMillis()))
		        .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
		        .signWith(SignatureAlgorithm.HS512, JWT_SECRET_KEY)
		        .compact();

	}
}
