package com.hms.user.jwt;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hms.user.dto.UserDTO;
import com.hms.user.exception.HMSException;
import com.hms.user.service.UserService;

@Service
public class MyUserDetailsService implements UserDetailsService {
	
	@Autowired
	private UserService userService;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		 try {
	            UserDTO dto = userService.getUser(email);

	            if (dto == null) {
	                throw new UsernameNotFoundException("User not found with email: " + email);
	            }

	            // Convert role to GrantedAuthority
	            List<GrantedAuthority> authorities =
	                    List.of(new SimpleGrantedAuthority("ROLE_" + dto.getRole()));

	            return new CustomUserDetails(
	                    dto.getId(),           // id
	                    dto.getEmail(),        // username
	                    dto.getEmail(),        // email
	                    dto.getPassword(),     // password
	                    dto.getRole(),         // role
	                    dto.getName(),         // name
	                    authorities            // authorities
	            );


	        } catch (HMSException e) {
	            throw new UsernameNotFoundException("User not found with email: " + email, e);
	        }
	}
}
