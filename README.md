# SYNATECH-CODE-TEST
Contains PHP/Laravel backend API and React Frontend

#BACKEND API
Built using PHP Laravel framework

Contains /login, /register/, and /clients which is an API resource which is authenticated; 
  >(GET) /clients will list all, 
  >
  >(GET) /clients/{id} will display individual client based on id,
  > 
  >(PATCH) /clients/{id} will update individual client based on id,
  >
  >(DELETE) /clients/{id} will delete client based on id

#LOCAL INSTALLATION
>Clone or Download this repository
>
>Extract and navigate to the backend folder using CMD or VScode
>
>Run Composer update
>
>create .env or rename the example.env and add your db details
>
>Run php artisan passport:install
>
>Run PHP artisan migrate
>
>Then php artisan serve

You will now be able to access the API using the address shown after the above step then add /api/ to any route you want to test
>
