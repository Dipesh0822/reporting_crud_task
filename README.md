###  REPORTING CRUD

#### Application Start and Install Description

1. Install Dependency using command line. 
    ```npm install```

2. Start Application using command line.
    ```npm start```

#### API Description

###### User API

1. <span style="color:blue">Insert</span>
    - http://localhost:8000/api/v1/users
    - POST
    - 
       ```
       {
            "email" : "test_01@gmail.com",
            "status" : "ACTIVE"
       }
       ```
    - email and status are mandatory. 
    - email is unique key    

2. <span style="color:blue">Update</span>
    - http://localhost:8000/api/v1/users/:id *
    - PUT
    - 
       ```
       {
            "email" : "test_01@gmail.com",
            "status" : "ACTIVE"
       }
       ```
    - email and status are mandatory.
    - email is unique key 
    ```* The is represents the existing user id.```

3. <span style="color:blue">Get</span>
    - http://localhost:8000/api/v1/users/:id *
    - GET
    ```* The is represents the existing user id.```

4. <span style="color:blue">Delete</span>
    - http://localhost:8000/api/v1/users/:id *
    - DELETE
    ```* The is represents the existing user id.```   

5. <span style="color:blue">Pagination</span>
    - http://localhost:8000/api/v1/users?page=1 **
    - GET
    ```* The is represents the existing page number.```



###### Report API

1. <span style="color:blue">Insert</span>
    - http://localhost:8000/api/v1/reports
    - POST
    - 
       ```
       {
            "short_title": "ACTIVE_USERS_1",
            "title": "All active users in country",
            "status": "ACTIVE",
            "paramaters": "country,since_when",
            "sql_string": "select id, email , created_at from users where status='ACTIVE' and country_code=%country and created_at>%since_when order by created_at desc"
       }
       ```
    - all field are mandatory. 
    - short_title is unique key     

2. <span style="color:blue">Update</span>
    - http://localhost:8000/api/v1/reports/:id *
    - PUT
    - 
       ```
       {
            "short_title": "ACTIVE_USERS_1",
            "title": "All active users in country",
            "status": "ACTIVE",
            "paramaters": "country,since_when",
            "sql_string": "select id, email , created_at from users where status='ACTIVE' and country_code=%country and created_at>%since_when order by created_at desc"
       }
       ```
    - all field are mandatory. 
    - short_title is unique key    
    ```* The is represents the existing report id.```

3. <span style="color:blue">Get</span>
    - http://localhost:8000/api/v1/reports/:id *
    - GET
    ```* The is represents the existing report id.```

4. <span style="color:blue">Delete</span>
    - http://localhost:8000/api/v1/reports/:id *
    - DELETE
    ```* The is represents the existing report id.```   

5. <span style="color:blue">Pagination</span>
    - http://localhost:8000/api/v1/reports?page=1 **
    - GET
    ```* The is represents the existing page number.```