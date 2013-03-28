    // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        //var myContact = navigator.contacts.create({"displayName": "Test User Cordova"});
       // myContact.note = "This contact has a note.";
        //console.log("The contact, " + myContact.displayName + ", note: " + myContact.note);
        
       // elem = document.getElementById('contact_create');
       // elem.innerHTML = "The contact, " + myContact.displayName + ", note: " + myContact.note;
        
        // find all contacts with 'Test' in any name field
       // var options = new ContactFindOptions();
      //  options.filter="Chep";
      //  var fields = ["displayName", "name"];
      //  navigator.contacts.find(fields, onSuccess, onError, options);
      
      $('#tab-bar li a').click(function(){
          $('#map').html('attr: '+$(this).attr('id'));
          $('#map').html('prop: '+$(this).prop('id'));
      });
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

 

