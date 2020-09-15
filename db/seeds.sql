create table users (
id serial primary key,
username varchar(25),
password varchar(25),
profile_pic text
)

insert into users (username, password, profile_pic)
values ('d2','123','prof pic')