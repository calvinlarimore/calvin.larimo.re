---
layout: generic.njk
---

# About Me
Hi! I'm Calvin Larimore (oh thats weird, ive never written a bio with my full real name).
I'm a 16 year old tinkerer from the Pacific Northwest USA who loves to learn new things and figure out how things work.

---

# Contact
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