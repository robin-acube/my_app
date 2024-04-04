import frappe

def get_server_call(num):
    return num + 2

@frappe.whitelist()
def say_hi():
    frappe.msgprint("HI")