create table priorities
(
  name varchar(10) not null
    primary key
);

create table statuses
(
  name varchar(20) default '' not null
    primary key
);

create table task_links
(
  parent_id  bigint not null,
  related_id bigint not null
);

create table user_roles
(
  name varchar(20) not null
    primary key
);

create table users
(
  id                 bigint auto_increment
    primary key,
  username           varchar(45)        null,
  password           varchar(255)       null,
  role               varchar(20)        null,
  current_project_id bigint default '0' null,
  constraint login_UNIQUE
  unique (username),
  constraint role
  foreign key (role) references user_roles (name)
);

create table projects
(
  id          bigint auto_increment
    primary key,
  code        varchar(255)                       null,
  owner_id    bigint                             null,
  description mediumtext                         null,
  created     datetime default CURRENT_TIMESTAMP null,
  closed      datetime                           null,
  constraint project_code_UNIQUE
  unique (code),
  constraint owner_id
  foreign key (owner_id) references users (id)
);

create index owner_id_idx
  on projects (owner_id);

create table tasks
(
  id          bigint auto_increment
    primary key,
  code        varchar(255)                       null,
  project_id  bigint                             null,
  reporter_id bigint                             null,
  assignee_id bigint                             null,
  status      varchar(20) default 'open'         null,
  priority    varchar(10)                        null,
  description mediumtext                         null,
  created     datetime default CURRENT_TIMESTAMP null,
  due_date    varchar(45)                        null,
  updated     datetime default CURRENT_TIMESTAMP null,
  estimation  varchar(45)                        null,
  constraint code_UNIQUE
  unique (code),
  constraint assignee_id
  foreign key (assignee_id) references users (id),
  constraint priority
  foreign key (priority) references priorities (name),
  constraint project_id
  foreign key (project_id) references projects (id),
  constraint reporter_id
  foreign key (reporter_id) references users (id),
  constraint status
  foreign key (status) references statuses (name)
);

create index assignee_id_idx
  on tasks (assignee_id);

create index priority_idx
  on tasks (priority);

create index project_id_idx
  on tasks (project_id);

create index reporter_id_idx
  on tasks (reporter_id);

create index status_idx
  on tasks (status);

create index current_project_id_idx
  on users (current_project_id);

create index role_idx
  on users (role);


