---
layout: generic.njk
---

# About Me
Hi! I'm Calvin Larimore and I never update this site :)
Come bother me over on Discord if you want I guess ¯\\\_(ツ)_/¯

---

# Contact
(note from 2 years later: this section does not read like something i wrote and i hate it)

Feel free to reach out about anything!

I've got nothing but time, and would love to hear your thoughts on any of my projects or other things.
Criticism is not only welcome but encouraged, as I find it's one of the best ways to learn and improve.

### Links and such:
{%- for id, contact in contacts -%}
	{% if contact.url %}
- {{ contact.title }}: [{{ contact.name }}]({{ contact.url }})
	{%- endif -%}
	{% if not contact.url %}
- {{ contact.title }}: {{ contact.name }}
	{%- endif -%}
{%- endfor -%}
