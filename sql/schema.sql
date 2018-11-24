-- creation of a new schema and use it
CREATE SCHEMA ncschool_project;
USE ncschool_project;

-- creation of all tables
CREATE TABLE roles
(
	id						SMALLINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name					TINYTEXT NOT NULL
);

CREATE TABLE users
(
	id 						BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	username 				VARCHAR(255) NOT NULL UNIQUE,
	password 				TINYTEXT NOT NULL,
	role_id 				SMALLINT NOT NULL,
	avatar 					TINYTEXT NOT NULL,
	
	FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE projects
(
	id						BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	code 					VARCHAR(255) NOT NULL UNIQUE,
	description 			TEXT,
	owner_id 				BIGINT NOT NULL,
	created					DATETIME NOT NULL,
	updated					DATETIME NOT NULL,
	closed					DATETIME,
	
	FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE statuses
(
	id						SMALLINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name					TINYTEXT NOT NULL
);

CREATE TABLE priorities
(
	id						SMALLINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name					TINYTEXT NOT NULL
);

CREATE TABLE tasks
(
	id						BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	code 					VARCHAR(255) NOT NULL UNIQUE,
	description				TEXT,
	status_id				SMALLINT NOT NULL,
	priority_id				SMALLINT NOT NULL,
	project_id				BIGINT NOT NULL,
	reporter_id				BIGINT NOT NULL,
	assignee_id				BIGINT,
	created					DATETIME NOT NULL,
	updated					DATETIME NOT NULL,
	due_date				DATETIME NOT NULL,
	closed					DATETIME,
	estimation				TINYTEXT,
	
	FOREIGN KEY (status_id) REFERENCES statuses(id),
	FOREIGN KEY (priority_id) REFERENCES priorities(id),
	FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
	FOREIGN KEY (reporter_id) REFERENCES users(id) ON DELETE CASCADE,
	FOREIGN KEY (assignee_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE attachments
(
	id						BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name					TINYTEXT NOT NULL,
	file_data				MEDIUMBLOB NOT NULL,
	task_id					BIGINT NOT NULL,
	
	FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE
);

CREATE TABLE comments
(
	id						BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	text					TEXT NOT NULL,
	user_id					BIGINT NOT NULL,
	task_id					BIGINT NOT NULL,
	created 				DATETIME NOT NULL,
	
	FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
	FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE
);

CREATE TABLE task_links
(
	id						BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	parent_id				BIGINT NOT NULL,
	related_id				BIGINT NOT NULL,
	
	FOREIGN KEY (parent_id) REFERENCES tasks(id) ON DELETE CASCADE,
	FOREIGN KEY (related_id) REFERENCES tasks(id) ON DELETE CASCADE
);

CREATE TABLE users_projects
(
	id						BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	user_id					BIGINT NOT NULL,
	project_id				BIGINT NOT NULL,
	
	FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
	FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);