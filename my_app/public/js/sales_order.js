frappe.ui.form.on('Sales Order', {
    // on refresh event
    refresh(frm) {
        // frm.doc.delivery_date = new Date()
        // refresh_field('delivery_date')
    },
    transaction_date: function(frm) {
        frm.doc.delivery_date = frm.doc.transaction_date
        refresh_field('delivery_date')
    }
})