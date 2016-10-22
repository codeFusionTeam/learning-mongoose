# Installing and Running MongoDB:

run ``` sudo apt-get install -y mongodb-org ```

``` 
$ mkdir data
$ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
$ chmod a+x mongod 
```

Then, start the MongoDB process by running ``` ./mongod ``` 

While running the ``` ./mongod ``` process, run ``` mongo ``` to get an interactive shell.