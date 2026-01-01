package com.hms.user.service;

import com.hms.user.dto.LoginDTO;
import com.hms.user.dto.UserDTO;
import com.hms.user.exception.HMSException;

public interface UserService {
	public void registerUser(UserDTO userDTO) throws HMSException;
	public UserDTO loginUser(LoginDTO loginDTO) throws HMSException;
	public UserDTO getUserById(Long id) throws HMSException;
	public void updateUser(UserDTO userDTO);
	public UserDTO getUser(String email) throws HMSException;
}
