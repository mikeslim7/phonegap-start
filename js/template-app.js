    // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        mapdiv = document.getElementById('map');
        mapdiv.innerHTML = "Here is the Map";
      
    }

    // onSuccess: Get a snapshot of the current contacts
    //
    function onSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            //console.log("Display Name = " + contacts[i].displayName);
            elem1 = document.getElementById('contact_find');
            elem1.innerHTML = "Display Name = " + contacts[i].displayName;
        }
    }

    // onError: Failed to get the contacts
    //
    function onError(contactError) {
        elem1 = document.getElementById('contact_find');
        elem1.innerHTML = "Error!";
        //alert('onError!');
    }

 

