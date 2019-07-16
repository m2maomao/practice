// jQuery('#foo');
jQuery.ajax('/api/get_something');
jQuery.fn.extend({
    check: function() {
        return this.each(() => {
            this.checked = true;
        });
    }
});