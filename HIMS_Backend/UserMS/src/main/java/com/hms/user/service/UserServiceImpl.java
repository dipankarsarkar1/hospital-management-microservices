package com.hms.user.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hms.user.dto.LoginDTO;
import com.hms.user.dto.UserDTO;
import com.hms.user.entity.User;
import com.hms.user.exception.HMSException;
import com.hms.user.repository.UserRepository;

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private  ApiService apiService;

	@Override
	public void registerUser(UserDTO userDTO) throws HMSException {
		Optional<User> opt= userRepository.findByEmail(userDTO.getEmail());
		if(opt.isPresent()) { 	
			throw new HMSException("USER_ALREADY_EXISTS");
		}
		
		userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
		Long profileId=apiService.addProfile(userDTO).block();
		userDTO.setProfileId(profileId);
		userRepository.save(userDTO.toEntity());
	}

	@Override
	public UserDTO loginUser(LoginDTO loginDTO) throws HMSException {
		User user=userRepository.findByEmail(loginDTO.getEmail()).orElseThrow(()->new HMSException("USER_ALREADY_EXISTS"));
		if(!passwordEncoder.matches(loginDTO.getPassword() , user.getPassword())) {
			throw new HMSException("INVALID_CREDENTIALS");
		}
		user.setPassword(null);
		return user.toDTO();
	}

	@Override
	public UserDTO getUserById(Long id) throws HMSException {
		return userRepository.findById(id).orElseThrow(()-> new HMSException("USER_NOT_FOUND")).toDTO();
	}

	@Override
	public void updateUser(UserDTO userDTO) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public UserDTO getUser(String email) throws HMSException {
		return userRepository.findByEmail(email).orElseThrow(()-> new HMSException("USER_NOT_FOUND")).toDTO();
	}

}
