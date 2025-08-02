# User Endpoints Documentation

---

## `/users/register` Endpoint

### Description
The `/users/register` endpoint is used to register a new user. It accepts user details, validates the input data, hashes the password, and creates a new user in the database. If registration is successful, it returns a JSON Web Token (JWT) along with the user details.

### HTTP Method
**POST**

### Request Body
The endpoint expects the request body in JSON format with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min length: 3)",
    "lastname": "string (min length: 3, optional)"
  },
  "email": "string (valid email, min length: 5)",
  "password": "string (min length: 6)"
}
```

#### Field Details
- **fullname.firstname**: Required string with a minimum of 3 characters.
- **fullname.lastname**: Optional string; if provided, must be at least 3 characters.
- **email**: Required string, must be a valid email with a minimum length of 5 characters.
- **password**: Required string with a minimum length of 6 characters.

### Success Response
- **Status Code:** 201 Created

#### Response Body
```json
{
  "token": "jwt_token_string",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "registered_firstname",
      "lastname": "registered_lastname"
    },
    "email": "registered_email"
    // Other user fields as applicable
  }
}
```

### Error Responses

#### Validation Errors
- **Status Code:** 400 Bad Request
- **Response Body:**
```json
{
  "errors": [
    {
      "msg": "Error message detailing the validation issue",
      "param": "field_name",
      "location": "body"
    }
    // Additional error objects if multiple validations fail
  ]
}
```

#### Other Errors
For any other issues during registration, a generic error message will be returned with an appropriate HTTP status code.

### Example Request
```bash
curl -X POST http://localhost:PORT/users/register \
  -H "Content-Type: application/json" \
  -d '{
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "password": "password123"
      }'
```

---

## `/users/login` Endpoint

### Description
The `/users/login` endpoint allows an existing user to log in. The endpoint validates the provided email and password, and if the credentials are correct, it returns a JSON Web Token (JWT) along with the user details.

### HTTP Method
**POST**

### Request Body
The endpoint expects the request body in JSON format with the following structure:

```json
{
  "email": "string (valid email, min length: 5)",
  "password": "string (min length: 6)"
}
```

#### Field Details
- **email**: Required string, must be a valid email address.
- **password**: Required string with a minimum length of 6 characters.

### Success Response
- **Status Code:** 200 OK

#### Response Body
```json
{
  "token": "jwt_token_string",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "user_firstname",
      "lastname": "user_lastname"
    },
    "email": "user_email"
    // Other user fields as applicable
  }
}
```

### Error Responses

#### Validation Errors
- **Status Code:** 400 Bad Request
- **Response Body:**
```json
{
  "errors": [
    {
      "msg": "Error message detailing the validation issue",
      "param": "field_name",
      "location": "body"
    }
    // Additional error objects if multiple validations fail
  ]
}
```

#### Authentication Errors
- **Status Code:** 401 Unauthorized
- **Response Body:**
```json
{
  "message": "Invalid email or password"
}
```

### Example Request
```bash
curl -X POST http://localhost:PORT/users/login \
  -H "Content-Type: application/json" \
  -d '{
        "email": "john.doe@example.com",
        "password": "password123"
      }'
```

---

## `/users/profile` Endpoint

### Description
The `/users/profile` endpoint retrieves the profile information of the authenticated user. This endpoint requires authentication via JWT token.

### HTTP Method
**GET**

### Authentication
Requires a valid JWT token in one of:
- Authorization header: `Bearer <token>`
- Cookie: `token=<token>`

### Success Response
- **Status Code:** 200 OK

#### Response Body
```json
{
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "user_firstname",
      "lastname": "user_lastname"
    },
    "email": "user_email"
  }
}
```

### Error Responses

#### Authentication Error
- **Status Code:** 401 Unauthorized
- **Response Body:**
```json
{
  "message": "Unauthorized"
}
```

### Example Request
```bash
curl -X GET http://localhost:PORT/users/profile \
  -H "Authorization: Bearer <your_jwt_token>"
```

---

## `/users/logout` Endpoint

### Description
The `/users/logout` endpoint invalidates the current user's JWT token by adding it to a blacklist. This endpoint requires authentication.

### HTTP Method
**GET**

### Authentication
Requires a valid JWT token in one of:
- Authorization header: `Bearer <token>`
- Cookie: `token=<token>`

### Success Response
- **Status Code:** 200 OK
- **Response Body:**
```json
{
  "message": "Logged out successfully"
}
```

### Error Responses

#### Authentication Error
- **Status Code:** 401 Unauthorized
- **Response Body:**
```json
{
  "message": "Unauthorized"
}
```

### Example Request
```bash
curl -X GET http://localhost:PORT/users/logout \
  -H "Authorization: Bearer <your_jwt_token>"
```

### Notes
- After logout, the token will be blacklisted and can't be used for future requests
- The token will be removed from cookies if it