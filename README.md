# Ansible

Ansible is an automated configuration manager for controlling infrastructure. By using ansible
we can divide our infrastructure (nodes) into groups and define tasks (roles) for them.

## structure

Each ansible template has a __hosts.ini__ (or hosts.yaml) file that contains information about our hosts for grouping them.

```ini
[all:children]
web
db

[web]
host2

[db]
host1
```

We put them in a directory called __inventory__. We can group our hosts by using the following structure:

```
|_ inventory
  |_ region-e
    |_ hosts-dc1.ini
    |_ hosts-dc2.ini
  |_ region-w
    |_ hosts-dc3.ini
```

## playbook

For executing tasks on each group, we assign some roles to each group. We need to create __playbooks__ in order to
perform such operation. A playbook looks like this:

```yaml
---
- name: web
  hosts: web
  roles:
    - app
    - nginx
```

We can also import playbooks in another playbook:

```yaml
---
- import_playbook: default.yml
```

## vars

In order to create our variables to use them in other files, we have __group_vars__ and __host_vars__.
In group_vars we set variables for hosts groups, and in host_vars we set variables for hosts. We also
have a __vars__ directory for general variables.

```
|_ group_vars
  |_ web.yml
|_ host_vars
  |_ host1.yml
|_ vars
```

## roles

In this directory we create the tasks that we want to execute during configuration. For each
operation we create a directory. In each directory we have a structure like this:

```
|_ roles
  |_ nginx
    |_ defaults (setting default variables)
      |_ main.yml
    |_ files (static config files)
    |_ handlers (triggering systemd commands)
      |_ main.yml
    |_ tasks (operations)
      |_ main.yml
    |_ templates (dynamic config files)
      |_ main.yml
    |_ vars
      |_ main.yml
```
