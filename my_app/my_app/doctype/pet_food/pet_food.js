// Copyright (c) 2024, SubAdmin and contributors
// For license information, please see license.txt

frappe.ui.form.on('Pet Food', {
	setup: function(frm) {
        // write setup code
		frm.get_nearest_ten = function(num) {
			return Math.ceil(num / 10) * 10;
		}
		frm.calculate_price = function(row) {
			row.price = row.quantity * row.rate
			refresh_field('ingredients')
		}
    },
	// refresh: function(frm) {

	// }
	price: function(frm) {
		frm.doc.price = frm.get_nearest_ten(frm.doc.price)
		refresh_field('price')
	},
	discount_price: function(frm) {
		frm.doc.discount_price = frm.get_nearest_ten(frm.doc.discount_price)
		refresh_field('discount_price')
	}
});

frappe.ui.form.on('Ingredient', {
    // cdt is Child DocType name i.e Quotation Item
    // cdn is the row name for e.g bbfcb8da6a
    quantity(frm, cdt, cdn) {
        let row = frappe.get_doc(cdt, cdn);
		frm.calculate_price(row)
    },
	rate(frm, cdt, cdn) {
        let row = frappe.get_doc(cdt, cdn);
		frm.calculate_price(row)
    }
})
