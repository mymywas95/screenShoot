function uploadFile() {
    document.getElementById('upload').click();
}

function uploadFileAction(e) {
    document.getElementById('new-image').src =  window.URL.createObjectURL(e.files[0]);
}

function format (option) {
    if (!option.id) { return option.text; }
    var ob = '<img src="https://lh4.ggpht.com/wKrDLLmmxjfRG2-E-k5L5BUuHWpCOe4lWRF7oVs1Gzdn5e5yvr8fj-ORTlBF43U47yI=w64" />' + option.text;	// replace image source with option.img (available in JSON)
    return ob;
};

$("#myval").select2({
    placeholder: "Select something!!",
    width: "50%",
    allowClear: true,
    templateResult: format,
    templateSelection: function (option) {
        if (option.id.length > 0 ) {
            return option.text + "<i class='fa fa-dot-circle-o'></i>";
        } else {
            return option.text;
        }
    },
    escapeMarkup: function (m) {
        return m;
    }
});

