# Will Work For Food Backend

This is the backend for Will Work For Food. It is a [Sails](http://sailsjs.org) application. The database used is MongoDB.

## Getting Started

The only thing needed to get started on development is MongoDB. Visit the following page for installation instructions for your OS: https://docs.mongodb.org/manual/installation/. To verify MongoDB was installed properly, run the following command:

```
mongod --version
```

After you have installed MongoDB, create a new directory that will house the data for the database. Inside of that directory, create another directory called "data". Then start Mongo using the data directory as the "dbpath". For instance:

```
mkdir wwff-db
cd wwff-db
mkdir data
mongod --dbpath=data
```

The last line should start MongoDB and it should mention that it's listening for connections on port 27017 (you can change this if you want but the Sails configuration assumes this default port for the DB).

After you've got MongoDB set up, you'll need to clone this git repo so you can make local changes. Once you've cloned the repo, change into the repository's directory and run the following command:

```
sails lift
```

That's it! Now if you go to http://localhost:1337/user, you should see a list of prepopulated users (that are created when the application bootstraps).
