#Creating User table and test user insertion
----------------------------------------------
CREATE TABLE USER (
	USER_ID INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	USER_NAME VARCHAR(50) NOT NULL,
	PASSWORD VARCHAR(100) NOT NULL,
	FIRST_NAME VARCHAR(50),
	LAST_NAME VARCHAR(50),
	USER_EMAIL VARCHAR(50),
	CREATE_DATE DATE NOT NULL,
	UPDATE_DATE DATE,
	USER_ROLE VARCHAR(50)
);


INSERT INTO USER(USER_NAME, PASSWORD, FIRST_NAME, LAST_NAME, CREATE_DATE) 
VALUES ('bala', 'bala123', 'BALAMURUGAN', 'KANDHAVEL', SYSDATE());


#Creating table to store Project pod details and master data insertion
-------------------------------------------------------------
CREATE TABLE PROJECT (
    PRO_ID INT AUTO_INCREMENT PRIMARY KEY not null,
    PRO_NAME VARCHAR(20) not null,
    PRO_POD_ID INT,
    PRO_POD_NAME VARCHAR(20)
);

INSERT INTO PROJECT(PRO_NAME, PRO_POD_ID, PRO_POD_NAME) 
VALUES ('Telstra', 1, 'RTFA');
INSERT INTO PROJECT(PRO_NAME, PRO_POD_ID, PRO_POD_NAME) 
VALUES ('Telstra', 2, 'Selfcare');
INSERT INTO PROJECT(PRO_NAME, PRO_POD_ID, PRO_POD_NAME) 
VALUES ('Telstra', 3, 'PPR');
INSERT INTO PROJECT(PRO_NAME, PRO_POD_ID, PRO_POD_NAME) 
VALUES ('Telstra', 4, 'Selfcare 2');
INSERT INTO PROJECT(PRO_NAME, PRO_POD_ID, PRO_POD_NAME) 
VALUES ('Telstra', 5, 'eSIM');
INSERT INTO PROJECT(PRO_NAME, PRO_POD_ID, PRO_POD_NAME) 
VALUES ('Telstra', 6, 'Smart Help');


#Creating table to store Engineering metric type details
--------------------------------------------------------
CREATE TABLE ENGINEERING (
ENG_ID INT AUTO_INCREMENT PRIMARY KEY not null,
ENG_POD_ID int(11), 
ENG_POD_NAME varchar(20) ,
MONTH varchar(20) ,
YEAR varchar(4), 
ENG_RELEASE int(11) ,
ENG_ITERATION int(11) ,
ENG_CODE_QUALITY_CYCLOMETRIC int(11) ,
ENG_CODE_QUALITY_TECHNICAL int(11) ,
ENG_UNIT_TEST_COVERAGE float ,
ENG_TEST_AUTOMATION_PERCENTAGE float ,
ENG_SECURITY_STANDARDS int(11) ,
ENG_TEST_CASES_EXECUTED int(11) ,
ENG_TOTAL_DEFECTS int(11) ,
ENG_OPEN_DEFECTS int(11) ,
ENG_COMMENTS varchar(500), 
CREATE_USER varchar(50) ,
UPDATE_USER varchar(50) ,
CREATE_DATE date ,
UPDATE_DATE date ,
ENG_CODE_QUALITY_MAINTAINABILITY varchar(10)
)


#Creating table to store agile metric type details

CREATE TABLE AGILE 
(
AGILE_ID  INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
AGILE_POD_ID varchar(50) ,
AGILE_POD_NAME varchar(20) ,
MONTH varchar(20) ,
YEAR varchar(20) ,
AGILE_ITERATION varchar(20) ,
AGILE_COGNIZANT_TEAM_SIZE varchar(20) ,
AGILE_TELSTRA_TEAM_SIZE varchar(20) ,
AGILE_ITERATION_NUMBER varchar(20) ,
AGILE_VELOCITY varchar(20) ,
AGILE_PLANNED_VELOCITY varchar(20) ,
AGILE_REJECTION_RATE varchar(20) ,
AGILE_AVERAGE_CYCLE varchar(20) ,
AGILE_VELOCITY_RATE varchar(20) ,
AGILE_VELOCITY_PER_WEEK varchar(20) ,
AGILE_COMMENTS varchar(500) ,
CREATE_USERNAME varchar(30) ,
CREATE_DATE date ,
NUMBER_OF_HOLIDAYS varchar(20) ,
NUMBER_OF_LEAVES_IN_PERSON_DAYS varchar(20) ,
COMMITMENT_RELIABILITY varchar(20)
)


#Creating table to store DevOps metric type details
--------------------------------------------------------
CREATE TABLE DEVOPS (
	DOPS_ID INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	DOPS_POD_ID VARCHAR(20),
	DOPS_POD_NAME VARCHAR(20),
	DOPS_PROD_DEV_FREQ VARCHAR(20),
	DOPS_RELEASE_NAME VARCHAR(20),
    DOPS_RELEASE_DATE VARCHAR(20),
    DOPS_RELEASE_DESC VARCHAR(20),
	DOPS_RELEASE_TYPE VARCHAR(20),
	DOPS_PERCENTAGE_FAILED VARCHAR(20),
	MONTH VARCHAR(20),
	YEAR VARCHAR(4),
	DOPS_COMMENTS VARCHAR(500),
	CREATE_USER VARCHAR(50),
	CREATE_DATE DATE
);

#Creating table for TEAM_TOOLS
CREATE TABLE TEAM_TOOLS (POD_ID VARCHAR(10), TEAM varchar(10));



create table agile
(
	id integer not null,
	year int,
	month varchar(200),
	cognizant_team_size int,
	telstra_team_size int,
	avg_velocity_per_week int,
 	primary key(id)
);
     
insert into agile values(1,2000,'August',22,12,9);









































INSERT INTO AGILE VALUES(NULL,'','eSIM', '2018','8','2','2.5','0','','','','','4','','','NA','NA','NA','0.75', 'NA','NA','NA','Data not available','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','eSIM', '2018','8','2','2.5','0','','','','','5','','','12','5','2.5','0.75', '88','0.2','0.416666666666667','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','eSIM', '2019','1','2.5','2','0','','','','','13','','','26','8','3.2','0.83', '119','0.2','0.307692307692308','Sprint started after the year end holidays were over','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','eSIM', '2019','2','2','2','0','','','','','14','','','25','17','8.5','0.8', '114','0.85','0.68','Sprint started after the year end holidays were over','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','eSIM', '2018','12','1.5','2','0','','','','','12','','','23','5','3.33333333333333','0.83', '119','0.125','0.217391304347826','PVT started and the sprint was cut short to 1.5 week due to holidays.','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','eSIM', '2018','12','2','2','0','','','','','11','','','25','5','2.5','0.83', '120','0.25','0.2','Carry forward user stories from previous sprint few user stories could not be accepted due to open items. Code coverage provided is for web project.','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','eSIM', '2018','11','2','2.25','0','','5','','','10','','','27','10','5','0.83', '120','0.444444444444444','0.37037037037037','Amar rolled off to another team in the middle of the sprint. ','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','eSIM', '2018','11','3','2.5','0','1','','','','9','','','17','30','10','0.83', '120','0.857142857142857','1.76470588235294','CAT testing support took most of the time. Sprint extended to 3 weeks due to CAT testing taken highest priority.','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','eSIM', '2018','10','2.5','2.5','0','1','','','','8','','','39','6','2.4','0.75', '140','0.12','0.153846153846154','CAT testing support took most of the time','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','eSIM', '2018','9','2','2.5','0','','','','','7','','','13','7','3.5','0.75', '136','0.28','0.538461538461538','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','eSIM', '2018','9','2','2.5','0','','','','','6','','','19','3','1.5','0.75', '136','0.12','0.157894736842105','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','eSIM', '2018','8','2','2.5','0','','','','','5','','','11','8','4','0.75', '136','0.32','0.727272727272727','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','eSIM', '2018','8','2','2.5','0','','','','','4','','','25','14','7','0.75', '136','0.56','0.56','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','eSIM', '2018','8','2','2.5','0','','','','','3','','','27','27','13.5','0.75', '136','1.08','1','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','eSIM', '2018','7','2','2.5','0','','','','','2','','','24','11','5.5','0.75', '136','0.44','0.458333333333333','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','eSIM', '2018','7','2','2.5','0','','','','','1','','','5','5','2.5','0.75', '136','0.2','1','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','LOT – Enterprise', '2018','8','2','4','0','','0','','','6','6','6','20','20','10','0.91', '80','0.5','1','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','LOT – Enterprise', '2018','8','2','4','0','1','0','','','5','8','10','29','37','18.5','0.9', '80','0.925','1.27586206896552','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','LOT – Enterprise', '2018','11','2','4','3','','0','','','13','18','11','60','31','15.5','0.92', '20','0.442857142857143','0.516666666666667','Dependency on Platform changes were pending with the customers','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','LOT – Enterprise', '2018','10','2','4','3','1','0','','','12','9','7','26','23','11.5','0.93', '24','0.328571428571429','0.884615384615385','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','LOT – Enterprise', '2018','10','2','4','3','','0','','','11','10','9','32','24','12','0.93', '20','0.342857142857143','0.75','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','LOT – Enterprise', '2018','10','2','4','3','1','0','','','10','18','15','64','38','19','0.9', '20','0.542857142857143','0.59375','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','LOT – Enterprise', '2018','9','2','4','0','','0','','','9','12','9','63','64','32','0.92', '80','1.6','1.01587301587302','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','LOT – Enterprise', '2018','9','2','4','0','','0','','','8','12','5','50','46','23','0.93', '80','1.15','0.92','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','LOT – Enterprise', '2018','9','2','4','0','','0','','','7','7','1','33','46','23','0.92', '80','1.15','1.39393939393939','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','LOT – Tech Support', '2018','9','2','2','0','','3','','','NA','','','','','NA','NA', 'NA','NA','NA','Not ready for agile metrics, Saranya and Nageswari on boarded','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','LOT – Tech Support', '2018','10','2','0.75','0','','0','','','NA','4','4','','','NA','0.9', 'NA','0','NA','Not ready for agile metrics. Hina joined on 8th 10.Not ready for agile metrics, Saranya and Nageswari off boarded','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','LOT – Tech Support', '2018','11','2','1','0','','1','','','NA','6','6','','','NA','0.9', 'NA','0','NA','Not ready for agile metrics','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','LOT -  Consumer Tech Support Portal', '2018','12','2','1','6','','4','','','15','3','3','','','NA','0.9', '','0','NA','Not ready for agile metrics','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','LOT – Tech Support', '2019','1','2','1','8','','1','','','16','3','3','','','NA','0.9', '','0','NA','Not ready for agile metrics','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payment Gateway', '2018','11','1','4.5','6','','','','','20','10','10','10','10','10','0.95', '220','0.19047619047619','1','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payment Gateway', '2018','11','1','4.5','6','','','','','19','16','10','16','10','10','0.95', '140','0.19047619047619','0.625','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payment Gateway', '2018','11','1','4.5','6','','','','','17','8','19','8','19','19','0.95', '68','0.361904761904762','2.375','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payment Gateway', '2018','11','1','4','6','','','','','18','24','21','24','21','21','0.95', '177','0.42','0.875','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payment Gateway', '2018','10','1','4.5','6','','','','','16','15','8','15','8','8','0.95', '69','0.152380952380952','0.533333333333333','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payment Gateway', '2018','10','1','4.5','6','1','','','','15','11','13','11','13','13','0.95', '24','0.247619047619048','1.18181818181818','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payment Gateway', '2018','10','1','4.5','6','','','','','14','10','14','10','14','14','0.95', '0','0.266666666666667','1.4','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payment Gateway', '2018','10','1','4.5','6','1','','','','13','15','14','15','14','14','0.95', '0','0.266666666666667','0.933333333333333','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payment Gateway', '2018','9','1','4.5','6','','','','','13','11','11','11','11','11','0.95', '0','0.20952380952381','1','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payment Gateway', '2018','9','1','4.5','6','','','','','12','15','14','15','14','14','0.95', '0','0.266666666666667','0.933333333333333','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payments', '2018','10','2','4','0','1','0','0','0','1','20','11','93','48','24','NA', '17.6','1.2','0.516129032258065','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payments', '2018','10','1','4','0','0','0','0','0','0','5','5','22','22','22','NA', '4.1','1.1','1','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2018','12','1','5','3','','','','','50','6','6','2','2','2','NA', '137','0','1','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2018','12','1','5','3','','','','','49','10','10','2','5','5','NA', '86','0.125','2.5','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2018','12','1','5','3','','','','','48','19','11','3','0','0','NA', '223','0','0','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2018','11','1','5','3','','1','','','47',' 23','6','5','0','0','NA', '99','0','0','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2018','11','1','5','3','','1','','','46','21','10','8','5','5','NA', '47','0.125','0.625','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2018','11','1','4','3','','2.5','','','45',' 6','10','8','5','5','NA', '115','0.142857142857143','0.625','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2018','11','1','4','3','','1','','','44','9','15','8','10','10','NA', '38','0.285714285714286','1.25','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2018','10','1','4','3','','1','','','43',' 6','9','9','5','5','NA', '49','0.142857142857143','0.555555555555556','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2018','10','1','4','3','1','5.5','','','42','6','6','8','5','5','NA', '152','0.142857142857143','0.625','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2018','10','1','4','3','','2','','','41',' 5','8','11','11','11','NA', '61','0.523809523809524','1','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2018','10','1','4','3','1','4.5','','','40','8 ','6','9','6','6','NA', '142','0.171428571428571','0.666666666666667','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2018','9','1','3','3','','6','','','39',' 4','12','9','5','5','NA', '2','0.166666666666667','0.555555555555556','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2018','9','1','3','3','','5','','','38',' 14','6','5','2','2','NA', '37','0.0666666666666667','0.4','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2018','9','1','3','3','','6.5','','','37',' 3','10','6','13','13','NA', '171','0.433333333333333','2.16666666666667','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2018','9','1','3','3','','3.5','','','36','6 ','1','9','0','0','NA', '28','0','0','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','RTFA', '2018','8','2','7','0','','12.5','','','11','14','8','15','15','7.5','NA', '337','0.214285714285714','1','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','RTFA', '2018','8','2','7','0','1','5','','','10','13','10','19','19','9.5','NA', '121','0.271428571428571','1','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','RTFA', '2018','12','2','9','0','','','','','18','20','12','29','24','12','0.82', '92','0.266666666666667','0.827586206896552','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','RTFA', '2018','11','2','9','0','','4','','','17','20','12','19','18','9','0.79', '160','0.2','0.947368421052632','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','RTFA', '2018','11','2','9','0','','12','','','16','20','13','17','22','11','0.81', '688','0.244444444444444','1.29411764705882','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','RTFA', '2018','10','2','9','0','2','12.5','','','15','12','8','12','14','7','0.87', '303','0.155555555555556','1.16666666666667','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','RTFA', '2018','10','2','9','0','1','3','','','14','17','15','21','19','9.5','0.82', '625','0.211111111111111','0.904761904761905','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','RTFA', '2018','9','2','9','0','','4.5','','','13','15','11','18','18','9','0.82', '625','0.2','1','CAT Support','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','RTFA', '2018','9','2','9','0','','8','','','12','12','3','3','3','1.5','0.87', '171','0.0333333333333333','1','CAT Support','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2018','8','1','2','0','0','0','0','0','52','NA','NA','7','13','13','NA', '19','1.3','1.85714285714286','Sprint level story report unavailable for 8 month in Pivotal','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2018','8','1','2','0','1','2','0','0','53','NA','NA','9','4','4','0.82', '15','0.4','0.444444444444444','Sprint level story report unavailable for 8 month in Pivotal','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2018','8','1','2','0','0','3','0','0','54','NA','NA','7','8','8','0.82', '12','0.8','1.14285714285714','Sprint level story report unavailable for 8 month in Pivotal','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2018','8','1','2','0','0','0','0','0','55','NA','NA','13','4','4','0.82', '13','0.4','0.307692307692308','Sprint level story report unavailable for 8 month in Pivotal','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2018','9','1','2','0','0','0','0','0','56','12','8','11','8','8','0.82', '43','0.8','0.727272727272727','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2018','9','1','2','0','0','0','0','0','57','14','12','10','8','8','0.82', '91','0.8','0.8','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2018','9','1','2','0','0','5','0','0','58','13','8','8','7','7','0.82', '38','0.7','0.875','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2018','9','1','3','0','0','2','0','0','59','21','3','15','2','2','0.82', '21','0.133333333333333','0.133333333333333','Product owner was on leave so stories were not accepted','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2018','10','1','3','0','1','0','0','0','60','16','10','14','10','10','0.82', '163','0.666666666666667','0.714285714285714','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2018','10','1','3','0','0','0','0','0','61','24','19','12','11','11','0.82', '21','0.733333333333333','0.916666666666667','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2018','10','1','3','0','0','8','0','0','62','16','7','7','4','4','0.82', '97','0.266666666666667','0.571428571428571','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2018','10','1','3','0','1','1','0','0','63','10','8','8','5','5','0.82', '18','0.333333333333333','0.625','out of 3 2 resource were on leave, and also we had production support hence less story point delivered','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2018','10','1','3','0','0','0','0','0','64','17','14','11','8','8','0.82', '18','0.533333333333333','0.727272727272727','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2018','11','1','4','0','1','4','0','0','65','13','11','10','8','8','0.83', '71','0.4','0.8','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2018','11','1','4','0','1','7','0','0','66','23','9','9','4','4','0.83', '39','0.2','0.444444444444444','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2018','11','1','4','0','0','2','0','0','67','10','5','11','4','4','0.83', '113','0.2','0.363636363636364','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2018','11','1','4','0','0','2','0','0','68','10','7','12','10','10','0.83', '114','0.5','0.833333333333333','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2018','12','1','4','0','1','0','0','0','69','10','7','12','7','7','0.83', '86','0.35','0.583333333333333','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2018','8','1','2','2','','','','','15','4','4','4','4','4','1', '252','0.2','1','Acceptence Rate is low since we had more no of  Chores ','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2018','8','1','2','2','','','','','16','5','8','5','8','8','1', '72','0.4','1.6','Acceptence Rate is low since we had more no of  Chores ','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2018','8','1','2','2','','','','','17','4','29','4','29','29','1', '304','1.45','7.25','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2018','8','1','2','2','','','','','18','6','5','6','5','5','1', '93','0.25','0.833333333333333','Acceptence Rate is low since we had more no of  Chores ','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2018','8','1','2','2','','','','','19','3','26','3','26','26','1', '237','1.3','8.66666666666667','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2019','2','1','2','2','','','','','42','17','11','17','11','11','1', '113','0.55','0.647058823529412','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2019','1','1','2','2','','','','','41','0','0','0','0','0','NA', 'NA','0','0','Velocity is zero since we worked on chores and new framework','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2019','1','1','2','2','','0','1','','40','0','0','0','0','0','NA', 'NA','0','0','Velocity is zero since we worked on chores and new framework','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2019','1','1','2','1','','3','','','39','1','3','1','3','3','1', '314','0.2','3','Stories and points accepted are low as we were working on developing a new framework for offerings flow, as the existing framework would not work for this new flow.','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2019','1','1','2','1','0','0','','','38','22','18','22','18','18','1', '432','1.2','0.818181818181818','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2019','1','1','2','1','1','4','','','37','0','1','0','1','1','NA', 'NA','NA','NA','Due to Christmas shut down period in Sydney from Dec 24th to Jan 4th no work on stories','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2018','12','1','2','1','2','3','','','36','0','0','0','0','0','NA', 'NA','NA','NA','Due to Christmas shut down period in Sydney from Dec 24th to Jan 4th no work on stories','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2018','12','1','2','1','0','1','','','35','7','10','7','10','10','1', '240','0.666666666666667','1.42857142857143','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2018','12','1','2','1','0','0','','','34','11','9','11','9','9','1', '26','0.6','0.818181818181818','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2018','12','1','1','1','','4','','','33','11','20','11','20','20','1', '83','2','1.81818181818182','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2018','11','1','1','1','','6','','','32','10','10','10','10','10','1', '205','1','1','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2018','11','1','1','1','','5','','','31','10','7','10','7','7','1', '110','0.7','0.7','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2018','11','1','1','1','','5','','','30','5','1','5','1','1','1', '3','0.1','0.2','Acceptence Rate is low since we had more no of  Chores ','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2018','11','1','1','1','','4','','','29','7','0','7','0','0','1', '45','0','0','Acceptence Rate is low since we had more no of  Chores ','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2018','10','1','1','1','','1','','','28','7','18','7','18','18','1', '77','1.8','2.57142857142857','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2018','10','1','2','2','','','','','27','21','0','21','0','0','1', '3','0','0','Acceptence Rate is low since we had more no of  Chores ','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2018','10','1','2','2','','','','','26','3','4','3','4','4','1', '18','0.2','1.33333333333333','Acceptence Rate is low since we had more no of Chores','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2018','10','1','2','2','','','','','24','28','13','28','13','13','1', '3','0.65','0.464285714285714','Acceptence Rate is low since we had more no of Chores','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2018','10','1','2','2','','','','','25','15','10','15','10','10','1', '4','0.5','0.666666666666667','Acceptence Rate is low since we had more no of Chores','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2018','9','1','2','2','','','','','20','4','0','4','0','0','1', '31','0','0','Acceptence Rate is low since we had more no of  Chores ','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2018','9','1','2','2','','','','','21','4','5','4','5','5','1', '47','0.25','1.25','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2018','9','1','2','2','','','','','22','4','0','4','0','0','1', '3','0','0','Acceptence Rate is low since we had more no of  Chores ','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Smart Help', '2018','9','1','2','2','','','','','23','4','2','4','2','2','1', '2','0.1','0.5','Acceptence Rate is low since we had more no of  Chores ','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','LOT – Enterprise', '2018','11','2','4','3','1','0','','','14','8','4','31','12','6','0.917', '80','0.171428571428571','0.387096774193548','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payments', '2018','11','2','4','0','1','5','0','0','2','14','7','68','35','17.5','0.5', '4.1','0.875','0.514705882352941','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payments', '2018','11','2','4','0','1','0','0','0','3','18','12','87','45','22.5','0.5', '4.1','1.125','0.517241379310345','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2018','8','1','4','3','','6','','','35','NA','NA','6','3','3','NA', '149','0.0857142857142857','0.5','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2018','8','1','4','3','','','','','34','NA','NA','9','5','5','NA', '14','0.142857142857143','0.555555555555556','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2018','8','1','4','3','1','8.5','','','33','NA','NA','15','12','12','NA', '294','0.342857142857143','0.8','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2018','8','1','4','3','','3','','','32','NA','NA','15','4','4','NA', '59','0.114285714285714','0.266666666666667','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2018','8','1','4','3','','','','','31','NA','NA','15','5','5','NA', '142','0.142857142857143','0.333333333333333','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','LOT – Enterprise', '2018','12','2','4','3','0','7','','','15','11','4','61','18','9','0.917', '24','0.257142857142857','0.295081967213115','Platform related stories were pending with customer','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2018','12','1','4','0','0','0','0','0','70','10','6','15','11','11','0.83', '20','0.55','0.733333333333333','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2018','12','1','4','0','0','0','0','0','71','10','6','9','5','5','0.83', '27','0.25','0.555555555555556','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2018','12','1','4','0','0','0','0','0','72','7','5','6','6','6','0.83', '27','0.3','1','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2019','1','1','4','0','0','0','0','0','73','0','0','0','0','0','0.83', '9','0','0','Due to shutdown, No work on stories. ','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','RTFA', '2018','12','2','9','0','','6','','','200','20','11','18','18','9','0.79', '170','0.2','1','CAT Support','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payments', '2018','11','1','4','0','1','0','0','0','4','7','4','47','28','28','NA', '4.1','1.4','0.595744680851064','NO unit test cases were written due to external blocker','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payments', '2018','12','2','4','0','1','6','0','0','5','5','3','33','13','6.5','0.5', '11.1','0.325','0.393939393939394','NO unit test cases were written due to external blocker','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2018','12','1','5','3','','','','','51','7','9','7','9','9','NA', '68','0.225','1.28571428571429','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payments', '2018','12','2','4','0','1','11','2','0','6','11','5','53','26','13','0.5', '11.4','0.65','0.490566037735849','NO unit test cases were written due to external blocker','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payments', '2019','1','2','4','0','0','0','0','0','7','8','5','47','26','13','0.74', '9.5','0.65','0.553191489361702','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payments', '2019','1','2','6','0','0','0','0','0','8','7','4','41','26','13','0.93', '10.1','0.433333333333333','0.634146341463415','Test case % increased  as upstream issue got resolved','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payment Gateway', '2018','12','1','4.5','6','','1','','','21','5','10','5','10','10','0.95', '235','0.19047619047619','2','#43 - in Pivotal Tracker ','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payment Gateway', '2018','12','1','4.5','6','','1','','','22','2','5','2','5','5','0.95', '115','0.0952380952380952','2.5','#44 - in Pivotal Tracker ','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payment Gateway', '2018','12','1','4.5','6','','2','','','23','2','2','2','2','2','0.95', '80','0.0380952380952381','1','#45 - in Pivotal Tracker ','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payment Gateway', '2018','12','1','4.5','6','1','','1','6','24','2','2','2','2','2','0.95', '80','0.0380952380952381','1','#46 - in Pivotal Tracker ','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','LOT – Enterprise', '2018','12','2','4','3','0','5','','','16','8','6','25','20','10','0.917', '20','0.285714285714286','0.8','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2018','12','1','5','3','','','','','52','11','0','4','0','0','NA', '--','0','0','Team were working on chores and bugs only which have no points.','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','RTFA', '2019','1','2','9','0','','6','','','201','13','13','12','14','7','0.82', '171','0.155555555555556','1.16666666666667','CAT Support','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2019','1','1','5','3','','','','','53','11','3','4','0','0','NA', '208','0','0','Team were working on chores and bugs only which have no points.','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','RTFA', '2019','1','2','9','0','1','2','','','202','11','11','15','15','7.5','0.82', '144','0.166666666666667','1','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payment Gateway', '2019','1','1','2','6','1','','3','3','25','0','0','0','0','0','0.95', '0','0','0','Due to Telstra Shutdown, not planned for any User stories (#47 - in pivotal)','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payment Gateway', '2019','1','1','2','6','','','','','26','5','5','5','5','5','0.95', '704','0.125','1','#48 - in Pivotal Tracker','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','LOT – Enterprise', '2019','1','2','4','3','1','5','','','17','16','9','55','22','11','0.91', '24','0.314285714285714','0.4','Platform related stories were pending with customer','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2019','1','1','4','0','0','0','0','0','74','7','5','5','5','5','0.83', '22','0.25','1','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2019','1','1','4','0','0','0','0','0','75','8','7','7','5','5','0.83', '104','0.25','0.714285714285714','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payment Gateway', '2019','1','1','2','6','1','1','','','27','8','8','8','8','8','0.95', '700','0.2','1','#49 - in Pivotal tracker','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payment Gateway', '2019','1','1','2','6','','','','','28','2','2','2','2','2','0.95', '347','0.05','1','#50 - in Pivotal tracker','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2019','1','1','5','4','','','','','54','9','9','2','7','7','NA', '256','0.155555555555556','3.5','Team were working on chores and bugs only which have no points.','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2019','1','1','5','4','','','','','55','9','6','7','0','0','NA', '50','0','0','Team were working on chores and bugs only which have no points.','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2019','1','1','4','4','','','','','56','11','7','13','4','4','NA', '168','0.1','0.307692307692308','Team were working on chores and bugs only which have no points.','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','RTFA', '2019','1','2','9','0','0','2','','','203','13','12','18','18','9','0.87', '144','0.2','1','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','LOT – Enterprise', '2019','1','2','4','3','0','0','1','','18','13','4','55','12','6','0.917', '24','0.171428571428571','0.218181818181818','Platform dependency, Testing blocked due to acceptance env issue','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Self Care - Speed', '2019','1','1','4','0','0','0','0','0','76','8','8','18','15','15','0.83', '19','0.75','0.833333333333333','','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','Payment Gateway', '2019','2','1','2','4','0','0','0','0','30','12','12','12','12','12','0.95', '1663','0.4','1','#52 - in Pivotal tracker','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2019','2','1','5','4','','','','','57','12','10','8','5','5','NA', '94','0.111111111111111','0.625','Team were working on chores and bugs only which have no points.','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','PPR', '2019','2','1','5','4','','','','','58','13','8','7','3','3','NA', '234','0.0666666666666667','0.428571428571429','Team were working on chores and bugs only which have no points.','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','LOT – Enterprise', '2019','2','2','4','3','0','1','','','19','2','2','10','7','3.5','0.91', '34','0.1','0.7','More adhoc bug fixes during regression testing and some of stories are blocked and pending with customer.','',NOW(),'');
INSERT INTO AGILE VALUES(NULL,'','RTFA', '2019','2','2','9','0','0','2','','','204','13','10','25','18','9','0.854', '163','0.2','0.72','','',NOW(),'');














INSERT INTO DEVOPS VALUES(NULL,'','eSIM', '2018','11','MVP1 - ESIM Support App','43423','Download / Refresh eSIM','','1','0','9','0','0','','','','1','BVT did not happen in prod as the url is external. PVT will take place in prod. WIll be rolled out to end users by 19th Feb, 2019.', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','eSIM', '2019','1','NA','NA','NA','','NA','NA','NA','NA','NA','','','','','No release planned as PVT yet to complete for the previous release.', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','eSIM', '2018','12','NA','NA','NA','','NA','NA','NA','NA','NA','','','','','No release planned as PVT yet to complete for the previous release.', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','eSIM', '2018','10','NA','NA','NA','','NA','NA','NA','NA','NA','','','','','Released not planned', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','eSIM', '2018','9','NA','NA','NA','','NA','NA','NA','NA','NA','','','','','Released not planned', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','eSIM', '2018','8','NA','NA','NA','','NA','NA','NA','NA','NA','','','','','Released not planned', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','LOT – Enterprise', '2018','11','No','NA','NA','','NA','NA','NA','NA','','','','','NA','', '','1','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','LOT – Enterprise', '2018','10','1','18/10/18','MVP 1.0','','1','0','No','No','No','','','','1','', '','1','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','LOT- Tech Support Portal', '2018','11','0','','','','','','','','','','','','','Not in production yet', '','','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Payment Gateway', '2018','11','','','','','','','','','','','','','','Not in production yet', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Payment Gateway', '2018','10','','','','','','','','','','','','','','Not in production yet', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Payment Gateway', '2018','9','','','','','','','','','','','','','','Not in production yet', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Payments', '2019','1','NA','NA','NA','','NA','NA','NA','NA','NA','','','','','Not in production yet', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Payments', '2018','12','NA','NA','NA','','NA','NA','NA','NA','NA','','','','','Not in production yet', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Payments', '2018','11','NA','NA','NA','','NA','NA','NA','NA','NA','','','','','Not in production yet', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Payments', '2018','10','NA','NA','NA','','NA','NA','NA','NA','','','','','','Not in production yet', '','NA','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','PPR', '2018','12','MVP-1-V.4','43446','Newrelic browser implementation and other bugs','Minor','1','0','NA','NA','','','','','1','', '','','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','PPR', '2018','12','MVP-1-V.3','43438','Omniture changes','Minor','1','0','NA','NA','','','','','1','', '','','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','PPR', '2018','11','MVP-1-V.2','43432','MVP 1 go live with 50% of traffic','Minor','1','0','NA','NA','','','','','1','Tentative dates', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','PPR', '2018','11','MVP - 1','43419','MVP 1 go live with 10% of traffic','Major','1','0','NA','NA','1','','','','1','', '2','NA','0','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','PPR', '2018','11','MVP-1-V.1','43429','Fix for unwanted payment errors. In specific, pin numbervalidation changes . Added additional Logs','Minor','1','0','','','','','','','1','Tentative dates', '','','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','PPR', '2018','10','0','','','','0','','','','','','','','','Not in production yet', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','PPR', '2018','9','0','','','','0','','','','','','','','','Not in production yet', '','','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','RTFA', '2018','12','API-MVP2-V0.4','43439','Add NULL check for Delivery field','Minor','1','0','0','0','','','','','1','', '','','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','RTFA', '2018','11','API-MVP2-V0.3','43427','Add more debug logs to print runtime stack trace','Minor','1','0','0','0','','','','','1','', '4','4','0','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','RTFA', '2018','11','API-MVP2-V0.2','43423','Fixed Floating Point Format Exception & Product Name Fix','Minor','1','0','0','0','','','','','1','', '4','4','0','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','RTFA', '2018','11','API-MVP2-V0.1','43417','Allow fraud check even for Unsegmented Customer','Minor','1','0','0','0','','','','','1','', '4','4','0','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','RTFA', '2018','10','API-MVP2','43378','CDE and SAS services added to RTFA MS','Major','1','0','6','0','','','','','1','Has the ability to do daily deployment, considering the upstream and downstream dependencies we are restricted to one.', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','RTFA', '2018','7','API-MVP1','43295','FPDS service added to RTFA MS','Major','1','0','','0','','','','','1','Has the ability to do daily deployment, considering the upstream and downstream dependencies we are restricted to one.', '','','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Self Care - Speed', '2018','9','Release Speed Troubleshooting - AUTH Flow','43346','Speed Troubleshooting - AUTH flow','Minor','1','0','NA','NA','0','','','','1','', '','6','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Self Care - Speed', '2018','10','GATHER ','43377','Improment on Gather Services','Minor','1','0','NA','NA','0','','','','1','', '','6','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Self Care - Speed', '2018','10',' Speed Troubleshooting - AUTH - Speed Tier identification','43382','Speed Tier identification- Authenticated flow','Minor','1','0','NA','NA','0','','','','1','', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Self Care - Speed', '2018','10','smartmodem \'hybrid\' Page','43404','smartmodem \'hybrid\' Page Enhance','Minor','1','0','NA','NA','0','','','','1','', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Self Care - Speed', '2018','10','UnAuth WiFi Index Event Change','43404','UnAuthenicated WiFi Index Event Change','Minor','1','0','NA','NA','0','','','','1','', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Smart Help', '2018','12','1','43439','URL Shortener','Major','1','0','NA','NA','NA','','','','1','In production', '','','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Smart Help', '2018','11','0','NA','NA','NA','0','0','NA','NA','NA','','','','1','No release', '','1','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Smart Help', '2018','10','1','43399','TCW application','Major','1','0','NA','NA','NA','','','','1','In production', '','','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Smart Help', '2018','10','1','43390','Medallia','Minor','1','0','NA','NA','NA','','','','1','In production', '','','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Smart Help', '2018','10','1','43382','IPPOTS workflow','Major','1','0','NA','NA','NA','','','','1','In production', '','1','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Smart Help', '2018','9','1','43364','NGC workflow NGC/IPPOTS','Major','1','0','NA','NA','NA','','','','1','In production', '','6','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Smart Help', '2018','8','1','43336','CIMS Registration Workflow','Major','1','0','NA','NA','NA','','','','','', '','','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','LOT- Tech Support Portal', '2018','10','0','','','','','','','','','','','','','Not in production yet', '','','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','LOT- Tech Support Portal', '2018','9','0','','','','','','','','','','','','','Not in production yet', '','','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Self Care - Speed', '2018','11','speedtest changes to production','43424','speedtest changes to production','Minor','1','0','NA','NA','0','','','','1','', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','LOT – Enterprise', '2018','12','No','NA','NA','','NA','NA','NA','NA','NA','NA','','','NA','Production release not planned for this month', '','','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Payment Gateway', '2018','12','NA','NA','NA','','NA','NA','NA','NA','NA','','','','','No release planned.', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Payment Gateway', '2018','11','NA','NA','NA','','NA','NA','NA','NA','NA','','','','','No release planned.', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Payment Gateway', '2018','10','NA','NA','NA','','NA','NA','NA','NA','NA','','','','','No release planned.', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Payment Gateway', '2018','9','NA','NA','NA','','NA','NA','NA','NA','NA','','','','','No release planned.', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','RTFA', '2019','1','API-MVP2-V0.5','43483','Look up Table implementation for Siebel','Minor','1','0','0','0','0','0','0','0','1','', '','','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Payment Gateway', '2019','1','NA','NA','NA','','NA','NA','NA','NA','NA','','','','','No release planned.', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','Self Care - Speed', '2019','1','Speed Troubleshooting - AUTH - REDESIGN (without workflow trigger)','43494','Speed Troubleshooting - AUTH - REDESIGN (without workflow trigger)','Major','1','0','NA','NA','0','','','','1','', '','0','','',NOW());
INSERT INTO DEVOPS VALUES(NULL,'','LOT – Enterprise', '2019','2','2','13/02/19','MVP 2.0','','1','0','No','No','No','','','','1','', '','','','',NOW());








INSERT INTO ENGINEERING VALUES(NULL,'','eSIM', '2018','10','2','1','A','0','','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','eSIM', '2018','11','2','0.5','A','0','','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','eSIM', '2018','9','2','1','A','0','','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','eSIM', '2018','12','2','0.5','A','0','','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','eSIM', '2019','1','2','0.5','A','0','','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','LOT – Enterprise', '2018','11','1.28718388341192','0','A','0','','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','LOT – Enterprise', '2018','10','1.28711547035221','0','A','0','','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','Payment Gateway', '2018','11','','','','','Not Available','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','Payment Gateway', '2018','10','','','','','Not Available','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','Payment Gateway', '2018','9','','','','','Not Available','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','Payments', '2019','1','2.19','0.6','NA','0','Using detekt','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','Payments', '2018','12','2.29','0.54','NA','0','Using detekt','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','Payments', '2018','11','2.17','0.43','NA','0','Using detekt','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','Payments', '2018','10','NA','NA','NA','0','Still working on configuration related and spike related stories ','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','PPR', '2019','2','2.24','0.38','','','','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','PPR', '2019','1','2.23','0.38','','','','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','PPR', '2018','12','2.1','0.33','','0','','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','PPR', '2018','11','2.1','0.33','','6','Test coverage tool not implemented in our project, but we cover most of the test cases.','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','PPR', '2018','10','2.1','0.26','','','','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','PPR', '2018','9','1.91','0.22','A','','','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','RTFA', '2018','12','1.1','6','A','0','','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','RTFA', '2018','11','1.2','3','A','','','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','RTFA', '2018','10','1.2','3','A','0','0 for phase 1, Minor defects for phase 2, Testcases including dependent systems ( SAS, FPDS, RTFA)','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','SelfCareSpeed', '2018','9','0','NA','NA','0','No static  code analyzer used yet for kotlin','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','SelfCareSpeed', '2018','10','0','NA','NA','0','No static  code analyzer used yet for kotlin','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','SelfCareSpeed', '2018','11','0','NA','NA','0','No static  code analyzer used yet for kotlin','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','RTFA', '2019','1','1.7','3','A','0','We don\'t work with defects.','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','Smart Help', '2019','1','0','0','A','0','','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','Smart Help', '2018','12','0','0','A','0','We don’t work with defects.Using Jetpack','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','Smart Help', '2018','11','0','0','A','0','We don’t work with defects.Using Jetpack','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','Smart Help', '2018','10','0','0','A','0','We don’t work with defects.Using Jetpack','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','Smart Help', '2018','9','0','0','A','0','We don’t work with defects. Using Jetpack','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','SelfCareSpeed', '2018','12','0','NA','NA','0','No static  code analyzer used yet for kotlin','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','LOT – Enterprise', '2018','12','1.28711547035221','0','A','0','','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','', '2018','12','','','','','Not Available','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','Payment Gateway', '2019','1','NA','NA','','','Not Available','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','SelfCareSpeed', '2019','1','0','NA','NA','0','No static  code analyzer used yet for kotlin','','',NOW(),NOW());
INSERT INTO ENGINEERING VALUES(NULL,'','LOT – Enterprise', '2019','1','1.28711547035221','0','A','0','','','',NOW(),NOW());










#Creating User table and test user insertion
----------------------------------------------
CREATE TABLE USER (
	USER_ID INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	USER_NAME VARCHAR(50) NOT NULL,
	PASSWORD VARCHAR(100) NOT NULL,
	FIRST_NAME VARCHAR(50),
	LAST_NAME VARCHAR(50),
	USER_EMAIL VARCHAR(50),
	CREATE_DATE DATE NOT NULL,
	UPDATE_DATE DATE,
	USER_ROLE VARCHAR(50)
);


INSERT INTO USER(USER_NAME, PASSWORD, FIRST_NAME, LAST_NAME, CREATE_DATE) 
VALUES ('bala', 'bala123', 'BALAMURUGAN', 'KANDHAVEL', SYSDATE());


#Creating table to store Project pod details and master data insertion
-------------------------------------------------------------
CREATE TABLE PROJECT (
    PRO_ID INT AUTO_INCREMENT PRIMARY KEY not null,
    PRO_NAME VARCHAR(20) not null,
    PRO_POD_ID INT,
    PRO_POD_NAME VARCHAR(20)
);

INSERT INTO PROJECT(PRO_NAME, PRO_POD_ID, PRO_POD_NAME) 
VALUES ('Telstra', 1, 'RTFA');
INSERT INTO PROJECT(PRO_NAME, PRO_POD_ID, PRO_POD_NAME) 
VALUES ('Telstra', 2, 'Selfcare');
INSERT INTO PROJECT(PRO_NAME, PRO_POD_ID, PRO_POD_NAME) 
VALUES ('Telstra', 3, 'PPR');
INSERT INTO PROJECT(PRO_NAME, PRO_POD_ID, PRO_POD_NAME) 
VALUES ('Telstra', 4, 'Selfcare 2');
INSERT INTO PROJECT(PRO_NAME, PRO_POD_ID, PRO_POD_NAME) 
VALUES ('Telstra', 5, 'eSIM');
INSERT INTO PROJECT(PRO_NAME, PRO_POD_ID, PRO_POD_NAME) 
VALUES ('Telstra', 6, 'Smart Help');


#Creating table to store Engineering metric type details
--------------------------------------------------------
CREATE TABLE ENGINEERING (
ENG_ID INT AUTO_INCREMENT PRIMARY KEY not null,
ENG_POD_ID int(11), 
ENG_POD_NAME varchar(20) ,
MONTH varchar(20) ,
YEAR varchar(4), 
ENG_CODE_QUALITY_CYCLOMETRIC_COMPLEXITY varchar(11) ,
ENG_CODE_QUALITY_TECHNICAL varchar(11) ,
ENG_SECURITY_DEFECTS varchar(20),
ENG_COMMENTS varchar(500), 
CREATE_USER varchar(50) ,
UPDATE_USER varchar(50) ,
CREATE_DATE date ,
UPDATE_DATE date ,
ENG_CODE_QUALITY_MAINTAINABILITY varchar(10)
)
;


#Creating table to store agile metric type details

CREATE TABLE AGILE 
(
AGILE_ID  INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
AGILE_POD_ID varchar(50) ,
AGILE_POD_NAME varchar(20) ,
AGILE_MONTH varchar(20) ,
AGILE_YEAR varchar(20) ,
AGILE_ITERATION varchar(20) ,
AGILE_COGNIZANT_TEAM_SIZE varchar(20) ,
AGILE_TELSTRA_TEAM_SIZE varchar(20) ,
AGILE_ITERATION_NUMBER varchar(20) ,
AGILE_AVERAGE_CYCLE varchar(20),
AGILE_VELOCITY_RATE varchar(20) ,
AGILE_VELOCITY_PER_WEEK varchar(20) ,
AGILE_COMMENTS varchar(20) ,
NUMBER_OF_COGNIZANT_HOLIDAYS varchar(20) ,
NUMBER_OF_COGNIZANT_LEAVES varchar(20),
COMMITMENT_RELIABILITY varchar(500) ,
CREATE_USERNAME varchar(30) ,
CREATE_DATE date ,
AGILE_USERSTORIES_COMMITTED varchar(20) ,
AGILE_USERSTORIES_ACCEPTED varchar(20),
AGILE_COMMITTED_STORY_POINTS varchar(20),
AGILE_ACCEPTED_STORY_POINTS varchar(20),
AGILE_ACCEPTED_STORYPOINTS_PERWEEK varchar(20),
NUMBER_OF_TELSTRA_HOLIDAYS varchar(20),
NUMBER_OF_TELSTRA_LEAVES varchar(20),
UNIT_TEST_COVERAGE varchar(20)
)


#Creating table to store DevOps metric type details
--------------------------------------------------------
CREATE TABLE DEVOPS (
	DOPS_ID INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	DOPS_POD_ID VARCHAR(20),
	DOPS_POD_NAME VARCHAR(20),
	DOPS_PROD_DEV_FREQ VARCHAR(20),
	DOPS_RELEASE_NAME VARCHAR(20),
        DOPS_RELEASE_DATE VARCHAR(20),
        DOPS_RELEASE_DESC VARCHAR(20),
	DOPS_RELEASE_TYPE VARCHAR(20),
	DOPS_FAILED_DEPLOYS VARCHAR(20),
	MONTH VARCHAR(20),
	YEAR VARCHAR(4),
	DOPS_COMMENTS VARCHAR(500),
	CREATE_USER VARCHAR(50),
	CREATE_DATE DATE,
	DOPS_ROLLBACKS varchar(20),
	DOPS_TOTAL_DEFECTS varchar(20),
	DOPS_OPEN_DEFECTS varchar(20),
	DOPS_POST_PROD_DEFECTS_HIGH varchar(20),
	DOPS_POST_PROD_DEFECTS_CRITICAL varchar(20),
	DOPS_PERCENTAGE_SUCCESSFUL_DEPLOYMENTS varchar(20),
	DOPS_TOTAL_DEPLOYMENT_DONE varchar(20),
	DOPS_TOTAL_DEPLOYMENT_ATTEMPTED varchar(20)
);

#Creating table for TEAM_TOOLS
CREATE TABLE TEAM_TOOLS (POD_ID VARCHAR(10), TEAM varchar(10));










Hi,

I have removed three columns from devops table as Vidya has suggested. Kindly run the below query. And kindly find the updated script for devops table.

ALTER TABLE DEVOPS DROP column DOPS_TOTAL_DEPLOYMENT_DONE;
ALTER TABLE DEVOPS DROP column DOPS_PROD_DEV_FREQ;
ALTER TABLE DEVOPS DROP column DOPS_FAILED_DEPLOYS;

















