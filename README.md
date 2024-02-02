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
