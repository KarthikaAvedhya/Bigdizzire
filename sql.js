// creation of login table.
CREATE TABLE `bigdizzire`.`User` ( `User_id` INT NOT NULL AUTO_INCREMENT , `User_name` VARCHAR(250) NOT NULL , `Password` VARCHAR(250) NOT NULL , `User_type` VARCHAR(250) NOT NULL , `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , `deleted_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`User_id`)) ENGINE = InnoDB;

// creation of designer table.
CREATE TABLE `bigdizzire`.`Designer` ( `Id` INT NOT NULL AUTO_INCREMENT , `Reference_No` VARCHAR(250) NOT NULL , `Cust_Name` VARCHAR(250) NOT NULL , `Phone_number` VARCHAR(250) NOT NULL , `Product_No` VARCHAR(250) NOT NULL , `Product Name` VARCHAR(250) NOT NULL , `Photo` VARCHAR(250) NOT NULL , `online data` VARCHAR(250) NOT NULL , `New design` VARCHAR(250) NOT NULL , `Priority` INT NOT NULL DEFAULT '0' , `Status` VARCHAR(255) NOT NULL , `Start_time` TIMESTAMP NOT NULL , `Pause time` TIMESTAMP NOT NULL , `Resume time` TIMESTAMP NOT NULL , `Stop_time` TIMESTAMP NOT NULL , `Working_hr` TIME NOT NULL , PRIMARY KEY (`Id`)) ENGINE = InnoDB;
// adding an additional feild to designer table.
ALTER TABLE `designer` ADD `userid` INT NOT NULL AFTER `Working_hr`;
// adding foregin key to designer table.
ALTER TABLE designer ADD FOREIGN KEY (userid) REFERENCES user(User_id);
ALTER TABLE `designer` DROP `online data`;
ALTER TABLE `designer` ADD `Date_Estmated` DATE NOT NULL AFTER `Status`, ADD `Company_Date` DATE NOT NULL AFTER `Date_Estmated`;

// creation of Handworking table.

CREATE TABLE `bigdizzire`.`Handwork` ( `Id` INT NOT NULL AUTO_INCREMENT , `Start_time` TIMESTAMP NOT NULL , `Pause_time` TIMESTAMP NOT NULL , `resume_time` TIMESTAMP NOT NULL , `Stop_time` TIMESTAMP NOT NULL , `userid` INT NOT NULL , `Reference_no` VARCHAR(250) NOT NULL , `Product_no` VARCHAR(250) NOT NULL , `Reporter` INT NOT NULL DEFAULT '0' , PRIMARY KEY (`Id`)) ENGINE = InnoDB;

ALTER TABLE handwork ADD FOREIGN KEY (userid) REFERENCES user(User_id)

// creation of Stitching table.
CREATE TABLE `bigdizzire`.`Stitching` ( `Id` INT NOT NULL AUTO_INCREMENT , `Start_time` TIMESTAMP NOT NULL , `Pause_time` TIMESTAMP NOT NULL , `resume_time` TIMESTAMP NOT NULL , `Stop_time` TIMESTAMP NOT NULL , `Reference_no` VARCHAR(250) NOT NULL , `Product_no` VARCHAR(250) NOT NULL , `userid` INT NOT NULL , `Reporter` INT NOT NULL DEFAULT '0' , PRIMARY KEY (`Id`)) ENGINE = InnoDB;
ALTER TABLE Stitching ADD FOREIGN KEY (userid) REFERENCES user(User_id)

// creation of Quality checker table.
CREATE TABLE `bigdizzire`.`Quality_Checker` ( `Id` INT NOT NULL AUTO_INCREMENT , `Start_time` TIMESTAMP NOT NULL , `Pause_time` TIMESTAMP NOT NULL , `resume_time` TIMESTAMP NOT NULL , `Stop_time` TIMESTAMP NOT NULL , `Comment_new Error` VARCHAR(250) NOT NULL , `Q1` VARCHAR(250) NOT NULL , `Q2` VARCHAR(250) NOT NULL , `Q3` VARCHAR(250) NOT NULL , `Q4` VARCHAR(250) NOT NULL , `Product_no` VARCHAR(250) NOT NULL , `Reference_no` VARCHAR(250) NOT NULL , `userid` INT NOT NULL , PRIMARY KEY (`Id`)) ENGINE = InnoDB;
ALTER TABLE Quality_Checker ADD FOREIGN KEY (userid) REFERENCES user(User_id)

// creation of Master table.
CREATE TABLE `bigdizzire`.`Master` ( `Id` INT NOT NULL , `Assigned_to` VARCHAR(250) NOT NULL , `Reassigned_to` VARCHAR(250) NOT NULL , `Start_time` TIMESTAMP NOT NULL , `Pause_time` TIMESTAMP NOT NULL , `Resume_time` TIMESTAMP NOT NULL , `Stop_time` TIMESTAMP NOT NULL , `Reference_no` VARCHAR(250) NOT NULL , `Product_no` VARCHAR(250) NOT NULL , `userid` INT NOT NULL ) ENGINE = InnoDB;
ALTER TABLE Master ADD FOREIGN KEY (userid) REFERENCES user(User_id)