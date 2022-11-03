---
layout: generic.njk
title: Blog
---

# Blog
There's nothing here...

---

{% for blogpost in collections.blogposts %}
## [{{ blogpost.data.title }}]({{ blogpost.data.page.url }})
{{ blogpost.data.summary }}

---
{%- endfor -%}
