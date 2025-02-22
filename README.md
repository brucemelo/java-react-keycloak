# Java + React + Keycloak

A integration project using Java (Micronaut 4) for the backend, React 19 for the frontend,
and Keycloak for authentication. This example uses Docker Compose to run Keycloak.

---

## Tech stack

- **Java 21**
- **Micronaut 4**
- **React 19**
- **Keycloak**

---

## Prerequisites

Before running the project, please ensure you have the following installed:

- **Java 21**
- **Gradle 8**
- **Node.js (22+)**
- **Docker** and **Docker Compose**

---

## Setting Up the Environment

### 1. Install Java 21 Using SDKMAN

1. Install **SDKMAN**:
   ```bash
   curl -s "https://get.sdkman.io" | bash
   source "$HOME/.sdkman/bin/sdkman-init.sh"
   ```

2. Install Java 21:
   ```bash
   sdk install java 21
   ```


### 2. Install Gradle (via SDKMAN)

1. Use SDKMAN to install Gradle:
   ```bash
   sdk install gradle
   ```



## Running the Keycloak Server with Docker Compose

The project includes a `keycloak.yaml` file that contains the configuration for running Keycloak using Docker Compose. 
Follow these steps to set it up:

- Navigate to the project directory and locate the `keycloak.yaml` file.

- Start the Keycloak server:
  ```bash
  docker-compose -f keycloak.yaml up
  ```

- Verify Keycloak is running by accessing:
  ```bash
  http://localhost:8080
  ```

- Default credentials (configurable in `keycloak.yaml`):
    - **Username**: `admin1`
    - **Password**: `admin1`


Use `keycloak-config.http` to create a client `my-client` with webOrigins and redirectUris.

---

## Setting Up and Running the Project

### Backend (Micronaut 4)

1. Navigate to the backend directory:
   ```bash
   cd service
   ```
   
3. Run the backend server:
   ```bash
   ./gradlew run -t
   ```

4. The backend API will start at:
   ```bash
   http://localhost:8081/api
   ```

### Frontend (React 19)

1. Navigate to the frontend directory:
   ```bash
   cd web
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the frontend in a browser:
   ```bash
   http://localhost:5173/
   ```

---


