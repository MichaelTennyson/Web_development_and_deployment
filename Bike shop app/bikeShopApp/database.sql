-- MySQL dump:

CREATE DATABASE IF NOT EXISTS bikeshopdb;
USE bikeshopdb;



CREATE TABLE `bikes` (
  `id` int NOT NULL,
  `brand` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `frame` varchar(45) NOT NULL,
  `gears` int NOT NULL,
  `brakes` varchar(45) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `bikes` VALUES (1,'Apolla','Phaze','Mountain Bike','Alloy',18,'Steel V-Brakes',200),(2,'Carrea','Valour','Mountain Bike','Lightweight Alloy',16,'Disc-Brakes',350),(3,'Carrea ','Subway','Electric','Lightweight Alloy',9,'Hydraulic Disc-Brakes',1200),(4,'Raleigh ','Evo','Folding Bike','Lightweight Alloy',7,'Lightweight Alloy',300),(5,'Boardman','HYB','Hybrid Bike','Lightweight Alloy',18,'Disc-Brakes',590),(6,'Carrera','Virtuoso','Road Bike','Lightweight Alloy',16,'Disc-Brakes',430),(7,'Boardman','ADV','Road Bike','Aluminium Alloy',18,'TRP Spyre brakes',850),(8,'Carrera','Vengeance','Mountain Bike','Alloy ',16,'Mechanical Disc-Brakes',400),(9,'Indi','Kaisa','Mountain Bike','Lightweight Alloy',18,'Steel V-Brakes',170),(10,'Brompton','B75','Folding Bike','Steel',3,'Dual-Pivot Calliper',950),(11,'Raleigh','Felix Step-Through','Electric Bike','Aluminium',7,'Hydraulic Disc-Brakes',2100),(12,'Apollo','Spiral','Mountain Bike','Steel',18,'Steel V-Brakes',220);



CREATE TABLE `purchases` (
  `id` int NOT NULL,
  `item` int NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `sold` varchar(45) NOT NULL,
  PRIMARY KEY (`item`),
  CONSTRAINT `item` FOREIGN KEY (`item`) REFERENCES `bikes` (`id`)
);

INSERT INTO `purchases` VALUES (1,1,200,'False'),(2,2,350,'False'),(3,3,1200,'True'),(4,4,300,'False'),(5,5,590,'True'),(6,6,430,'False'),(7,7,850,'False'),(8,8,400,'False'),(9,9,170,'False'),(10,10,950,'True'),(11,11,2100,'False'),(12,12,220,'False');



CREATE TABLE `users` ( 
  `id` int AUTO_INCREMENT,
  `username` varchar(20),
  `fullname` varchar(20),
  `password` varchar(128),
  PRIMARY KEY (id)
);



