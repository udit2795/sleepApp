# sleepApp
## Steps to start the project in local
- clone the repository
- run <b>npm i</b> in terminal
- run <b>node server.js</b> to start the application

## CURL command to insert data in db
```
curl --location --request POST 'http://localhost:5000/userData' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Udit",
    "imei": "235425dg43534654656",
    "changes": "I would go to sleep easily",
    "sleep_Struggle": "Less than 2 weeks",
    "bed_time": "10:30 pm",
    "wake_up_time": "7:30 am",
    "sleep_hours": 8
}'
```
## CURL command to get config

```
curl --location --request GET 'http://localhost:5000/config'
```
## CURL command to get Dashboard Data

```
curl --location --request GET 'http://localhost:5000/dashboard?imei=235425dg43534654656'
```
