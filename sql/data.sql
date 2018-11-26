-- fill roles
INSERT INTO roles (id, name) VALUES (1, 'admin');
INSERT INTO roles (id, name) VALUES (2, 'project manager');
INSERT INTO roles (id, name) VALUES (3, 'developer');
INSERT INTO roles (id, name) VALUES (4, 'quality assurance');

-- fill users
INSERT INTO users (id, username, password, role_id, avatar)
	   VALUES (1, 'admin', '$2a$04$NUuAuVBP0SP538fh5tcwEunxj896HGsKL0gpVzvz403tIpU33fOK6', 1, 'path');
INSERT INTO users (id, username, password, role_id, avatar)
	   VALUES (2, 'pm_1', '$2a$04$NUuAuVBP0SP538fh5tcwEunxj896HGsKL0gpVzvz403tIpU33fOK6', 2, 'path');
INSERT INTO users (id, username, password, role_id, avatar)
	   VALUES (3, 'pm_2', '$2a$04$NUuAuVBP0SP538fh5tcwEunxj896HGsKL0gpVzvz403tIpU33fOK6', 2, 'path');
INSERT INTO users (id, username, password, role_id, avatar)
	   VALUES (4, 'dev_1', '$2a$04$NUuAuVBP0SP538fh5tcwEunxj896HGsKL0gpVzvz403tIpU33fOK6', 3, 'path');
INSERT INTO users (id, username, password, role_id, avatar)
	   VALUES (5, 'dev_2', '$2a$04$NUuAuVBP0SP538fh5tcwEunxj896HGsKL0gpVzvz403tIpU33fOK6', 3, 'path');
INSERT INTO users (id, username, password, role_id, avatar)
	   VALUES (6, 'qa_1', '$2a$04$NUuAuVBP0SP538fh5tcwEunxj896HGsKL0gpVzvz403tIpU33fOK6', 4, 'path');
INSERT INTO users (id, username, password, role_id, avatar)
	   VALUES (7, 'qa_2', '$2a$04$NUuAuVBP0SP538fh5tcwEunxj896HGsKL0gpVzvz403tIpU33fOK6', 4, 'path');
	   
-- fill projects
INSERT INTO projects (id, code, description, owner_id, created, updated, closed)
	   VALUES (1, 'Desktop application', "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 2, '2018-10-01', '2018-10-01', null);
INSERT INTO projects (id, code, description, owner_id, created, updated, closed)
	   VALUES (2, 'Web application', "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", 3, '2018-11-02', '2018-11-02', null);
INSERT INTO projects (id, code, description, owner_id, created, updated, closed)
	   VALUES (3, 'Mobile application', "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 3, '2018-12-03', '2018-12-03', null);

-- fill statuses
INSERT INTO statuses (id, name) VALUES (1, 'open');
INSERT INTO statuses (id, name) VALUES (2, 'in progress');
INSERT INTO statuses (id, name) VALUES (3, 'ready for test');
INSERT INTO statuses (id, name) VALUES (4, 'closed');
	   
-- fill priorities
INSERT INTO priorities (id, name) VALUES (1, 'blocker');
INSERT INTO priorities (id, name) VALUES (2, 'critical');
INSERT INTO priorities (id, name) VALUES (3, 'major');
INSERT INTO priorities (id, name) VALUES (4, 'minor');
INSERT INTO priorities (id, name) VALUES (5, 'normal');

-- fill tasks
INSERT INTO tasks (id, code, description, status_id, priority_id, project_id, reporter_id, assignee_id, created, updated, due_date, closed, estimation)
	   VALUES (1, 'Desktop application - 1', 'some description', 1, 1, 1, 2, 2, '2018-01-01', '2018-01-01', '2018-02-01', null, null);
INSERT INTO tasks (id, code, description, status_id, priority_id, project_id, reporter_id, assignee_id, created, updated, due_date, closed, estimation)
	   VALUES (2, 'Desktop application - 2', 'some description', 2, 2, 1, 3, 3, '2018-01-02', '2018-01-02', '2018-02-01', null, null);
INSERT INTO tasks (id, code, description, status_id, priority_id, project_id, reporter_id, assignee_id, created, updated, due_date, closed, estimation)
	   VALUES (3, 'Desktop application - 3', 'some description', 3, 3, 1, 3, 4, '2018-01-03', '2018-01-03', '2018-02-01', null, null);
INSERT INTO tasks (id, code, description, status_id, priority_id, project_id, reporter_id, assignee_id, created, updated, due_date, closed, estimation)
	   VALUES (4, 'Web application - 1', 'some description', 1, 4, 2, 3, 5, '2018-02-01', '2018-02-01', '2018-02-01', null, null);
INSERT INTO tasks (id, code, description, status_id, priority_id, project_id, reporter_id, assignee_id, created, updated, due_date, closed, estimation)
	   VALUES (5, 'Web application - 2', 'some description', 2, 5, 2, 2, 6, '2018-02-02', '2018-02-02', '2018-03-01', null, null);
INSERT INTO tasks (id, code, description, status_id, priority_id, project_id, reporter_id, assignee_id, created, updated, due_date, closed, estimation)
	   VALUES (6, 'Mobile application - 1', 'some description', 3, 1, 3, 2, 7, '2018-03-01', '2018-03-01', '2018-04-01', null, null);
INSERT INTO tasks (id, code, description, status_id, priority_id, project_id, reporter_id, assignee_id, created, updated, due_date, closed, estimation)
	   VALUES (7, 'Mobile application - 2', 'some description', 1, 2, 3, 2, 5, '2018-03-02', '2018-03-02', '2018-04-01', null, null);

-- fill comments
INSERT INTO comments (id, text, user_id, task_id, created)
	   VALUES (1, "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 4, 1, '2018-01-01');
INSERT INTO comments (id, text, user_id, task_id, created)
	   VALUES (2, "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 5, 1, '2018-01-02');

-- fill task_links
INSERT INTO task_links (id, parent_id, related_id) VALUES (1, 1, 2);

-- fill projects_users
-- Desktop - pm_1, pm_2, dev_1
INSERT INTO users_projects (id, user_id, project_id) VALUES (1, 2, 1);
INSERT INTO users_projects (id, user_id, project_id) VALUES (2, 3, 1);
INSERT INTO users_projects (id, user_id, project_id) VALUES (3, 4, 1);
-- Web - dev_2, qa_1
INSERT INTO users_projects (id, user_id, project_id) VALUES (4, 5, 2);
INSERT INTO users_projects (id, user_id, project_id) VALUES (5, 6, 2);
-- Mobile - dev_2, qa_2
INSERT INTO users_projects (id, user_id, project_id) VALUES (6, 7, 3);
INSERT INTO users_projects (id, user_id, project_id) VALUES (7, 5, 3);