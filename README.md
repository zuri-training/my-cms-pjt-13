
# MY CMS Team 13

A platform that allows users spin up a basic website - allow as much customizations as possible.




## Feature Requests

### User: Unauthenticated.

- Visit the platform to view basic information about it.
- View and Interact with the documentation.
- Register to setup a new website.
- Setup website by filling out some information.
- Browse through available templates.

### User: Authenticated
- Full access to the platform.
- Access to backend of created website.
- Ability to create more pages.
- Ability to change template.
- Unique address.
- Ability to add social media links.


## Authors

- [Dapo Adedire](https://www.github.com/dapo_adedire)
- [Add your name](https://www.github.com/your-username)


## Contributing

Contributions are always welcome!

See `CONTRIBUTING.md` for ways to get started.



## Documentation

[Documentation](https://github.com/zuri-training/my-cms-pjt-13/blob/main/DOCUMENTATION.md)


## Run Locally

Clone the project

```
git clone https://github.com/zuri-training/my-cms-pjt-13.git
```

Go to the project directory

```
cd my-cms-pjt-13
```

Create a Virtual Environment 
```
python -m virtualenv env
```
Activate Virtual Environment
```
env\scripts\activate
```

Install Dependencies

```
pip install -r requirements.txt
```
Migrate Database 
```
python manage.py migrate
```
Create Super User 
```
python manage.py createsuperuser
```
Finally, Start The Server.
```
python manage.py runserver
```


