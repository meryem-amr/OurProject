CREATE  DATABASE cloud;
USE cloud;

CREATE TABLE students(
    Student_ID int unique not null,
    Student_Name varchar(100) not null,
    Student_Age int not null,
    CGPA decimal(5,4) not null,
    PRIMARY KEY(Student_ID)
);
INSERT INTO students (Student_ID, Student_Name, Student_Age, CGPA) VALUES
(22011530, 'Jana Mohamed Kamal', 20, 3.01),
(22010393, 'Mariam Amr Abdelkader', 20, 3.32),
(22011552, 'Rola Ehab Ali', 19, 3.34),
(22011561, 'Sara Hesham Ahmed', 19, 2.9),
(22010114, 'Seham Ahmed Mohamed', 20, 2.98);


