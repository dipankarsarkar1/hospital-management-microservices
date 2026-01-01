Hospital Management System (HMS)
Microservices-Based Architecture using Spring Boot
📖 Overview

The Hospital Management System (HMS) is a backend application built using Spring Boot Microservices Architecture.
It manages hospital operations such as patients, doctors, appointments, billing, and authentication in a scalable and secure manner.

🏗️ Project Structure
HMS-With-MicroService/
│
├── config-server/
├── service-registry/        # Eureka Server
├── api-gateway/
├── auth-service/
├── patient-service/
├── doctor-service/
├── appointment-service/
├── billing-service/
└── common-library/


✅ Use triple backticks
✅ Add text after backticks
✅ End each folder with /

This guarantees correct rendering on GitHub.

🧰 Technology Stack
Category	Technology
Language	Java 17
Framework	Spring Boot
Architecture	Microservices
Security	Spring Security, JWT
Service Discovery	Netflix Eureka
API Gateway	Spring Cloud Gateway
Config Server	Spring Cloud Config
Database	MySQL
Build Tool	Maven
Documentation	Swagger
🔐 Security

JWT-based authentication

Role-based authorization (ADMIN, DOCTOR, PATIENT)

Secure API access via Gateway

⚙️ Configuration Management

Centralized configuration using Spring Cloud Config Server

Profiles: dev, test, prod

🔒 application.properties is ignored
📄 Use application.properties.example

🚀 How to Run
Prerequisites

Java 17+

Maven

MySQL

Git

Start Order

Config Server

Eureka Server

API Gateway

Business Services

mvn spring-boot:run

🧪 API Documentation
http://localhost:{port}/swagger-ui.html

🗄️ Database Strategy

Database per microservice

No shared schemas

Independent scaling

⚠️ Exception Handling

Global exception handling using @ControllerAdvice

Custom error codes:

PATIENT_NOT_FOUND

DOCTOR_ALREADY_EXISTS

📁 Git Ignore Rules

application.properties

target/

IDE config files

👤 Author

Dipankar Sarkar
Senior Java Developer
Spring Boot | Microservices | REST APIs

📄 License

For educational and demonstration purposes.
