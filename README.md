Hospital Management System (HMS)
Microservices-Based Architecture using Spring Boot
📖 Overview

The Hospital Management System (HMS) is an enterprise-grade backend application developed using Spring Boot Microservices Architecture.
It is designed to manage hospital operations such as patient records, doctor management, appointments, billing, and authentication with scalability, security, and maintainability in mind.

This project follows real-world microservices best practices including service discovery, centralized configuration, API gateway, and secure communication.

🏗️ System Architecture

The system is decomposed into independent microservices, each responsible for a single business capability.

HMS-With-MicroService
│
├── config-server
├── service-registry (Eureka)
├── api-gateway
├── auth-service
├── patient-service
├── doctor-service
├── appointment-service
├── billing-service
└── common-library

Architectural Highlights

Loose coupling between services

Independent deployment and scaling

Database per microservice

Centralized configuration

Secure API access via Gateway

🧰 Technology Stack
Category	Technology
Language	Java 17
Framework	Spring Boot
Architecture	Microservices
Security	Spring Security, JWT
API Gateway	Spring Cloud Gateway
Service Discovery	Netflix Eureka
Configuration	Spring Cloud Config
Database	MySQL
Build Tool	Maven
Documentation	Swagger / OpenAPI
Version Control	Git
🔐 Security Design

JWT-based authentication

Role-based authorization:

ADMIN

DOCTOR

PATIENT

Secured endpoints via Spring Security filters

Token validation handled at API Gateway level

⚙️ Configuration Management

Centralized configuration using Spring Cloud Config Server

Environment-specific profiles:

dev

test

prod

⚠️ Sensitive configuration files such as application.properties are excluded from version control.
Use application.properties.example as a reference template.

🚀 Application Startup Guide
Prerequisites

Java 17 or higher

Maven

MySQL

Git

Clone Repository
git clone https://github.com/your-username/HMS-With-MicroService.git
cd HMS-With-MicroService

Startup Order (Important)

Config Server

Service Registry (Eureka)

API Gateway

Business Microservices

mvn spring-boot:run

🧪 API Documentation

Each microservice exposes Swagger documentation:

http://localhost:{service-port}/swagger-ui.html

🗄️ Database Strategy

Each microservice owns its database

No shared schema across services

Ensures:

High scalability

Fault isolation

Independent evolution

⚠️ Exception Handling

Global exception handling using @ControllerAdvice

Custom business exceptions:

PATIENT_ALREADY_EXISTS

PATIENT_NOT_FOUND

DOCTOR_ALREADY_EXISTS

APPOINTMENT_CONFLICT

📁 Git Ignore Policy

The following are excluded from version control:

application.properties

Build artifacts (target/)

IDE-specific files (.idea, .classpath, .project)

🔮 Future Enhancements

Docker & Kubernetes deployment

Event-driven communication using Kafka

Centralized logging (ELK Stack)

CI/CD pipeline integration

Payment gateway integration

👤 Author

Dipankar Sarkar
Senior Java Developer
Spring Boot • Microservices • REST APIs • Security

📄 License

This project is intended for learning, demonstration, and internal use.
You may modify and extend it as needed.
