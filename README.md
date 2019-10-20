# CS3-Map Concept

This project is an webApp for displaying university OwnCloud implementations worldwide. It is a simple App that displays the registered OwnCloud installations on a Google Maps map and allows user registration and let users insert new OwnCloud installations. The following functionality is provided:

- GoogleMaps overview of registered OwnCloud installations.
- User registration and Login functions (provided by Django).
- Users can create, modify and delete their registered OwnCloud installations.
- Users can choose the location of their OwnCloud installations through a Map (coordnates saved).
- Users can upload a picture for their OwnCloud installations.

## Classes

Installations

- name (VARCHAR)
- number_of_users (INT)
- number_of_terabytes (DECIMAL)
- lat_coordinates (DECIMAL)
- lon_coordinates (DECIMAL)
- user (INT)
- logo (Blob)
- created (DATETIME)
- updated (DATETIME)
- deleted (BOOLEAN)
- url (URLFIELD)

## Endpoints

### /

Default endpoint and where the app is served

### /admin

Django Backend Login

## Requirements

Everything is provided as Docker images, so dev and test deployments are easy. For production it is advised to use a separate, highly available, mariaDB / MySQL Server.

- MariaDB Server
- Webserver for reverse proxy (we use gunicorn to serve the python code)

## Commands

### General django commands

Initialize new project:

```shell
django-admin startproject cs3
```

Start Server (in project folder where manage.py is):

```shell
python manage.py runserver
```

Do migrations:

```shell
python manage.py migrate
```

create new app:

```shell
python manage.py migrate
```
