const cookies = {
    add(name, value) {
        var d = new Date();
        d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    },
    remove(name) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },
    get(name) {
        var name = name + "=";
        var ca = document.cookie.split(';');

        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            
            while (c.charAt(0) == ' ') {
               c = c.substring(1);
            }

            if (c.indexOf(name) == 0) {
               return c.substring(name.length, c.length);
            }
        }

        return ""; 
    }
};
