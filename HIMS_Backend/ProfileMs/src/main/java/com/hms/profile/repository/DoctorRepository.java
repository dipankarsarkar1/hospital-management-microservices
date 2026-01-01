package com.hms.profile.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hms.profile.entity.Doctor;

@Repository
public interface DoctorRepository  extends CrudRepository<Doctor, Long>{
	Optional<Doctor> findByEmail(String email);
	Optional<Doctor> findByLicenseNo(String license);
}
