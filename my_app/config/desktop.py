from frappe import _

def get_data():
	return [
		{
			"module_name": "My App",
			"color": "grey",
			"icon": "octicon octicon-file-directory",
			"type": "module",
			"label": _("My App")
		}
	]
