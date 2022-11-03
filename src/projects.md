---
layout: generic.njk
title: Projects
---

# Projects
This is only projects I have writen a post about. More things may be on my [{{ contacts.github.title }}]({{ contacts.github.url }}).

---

{% for project in collections.projects | reverse %}
## [{{ project.data.title }}]({{ project.data.page.url }})
{{ project.data.summary }}

---
{%- endfor -%}