/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	initialize : function() {
		this.bind();
	},
	bind : function() {
		document.addEventListener('deviceready', this.deviceready, false);
	},
	deviceready : function() {
		// This is an event handler function, which means the scope is the event.
		// So, we must explicitly called `app.report()` instead of `this.report()`.
		app.report('deviceready');

		var myContact = navigator.contacts.create({
			"displayName" : "Test User Cordova"
		});
		myContact.note = "This contact has a note.";
		// console.log("The contact, " + myContact.displayName + ", note: " + myContact.note);

		elem = document.getElementById('contact_create');
		elem.innerHTML = "The contact, " + myContact.displayName + ", note: " + myContact.note;

		// find all contacts with 'Test' in any name field
		var options = new ContactFindOptions();
		options.filter = "E";
		var fields = [ "displayName", "name" ];
		navigator.contacts.find(fields, app.onSuccess, app.onError, options);
	},
	report : function(id) {
		// Report the event in the console
		console.log("Report: " + id);

		// Toggle the state from "pending" to "complete" for the reported ID.
		// Accomplished by adding .hide to the pending element and removing
		// .hide from the complete element.
		document.querySelector('#' + id + ' .pending').className += ' hide';
		var completeElem = document.querySelector('#' + id + ' .complete');
		completeElem.className = completeElem.className.split('hide').join('');
		app.removeSplash();
	},
	removeSplash : function() {
		document.querySelector('div.app').className += ' hide';

	},
	onSuccess : function(contacts) {
		// onSuccess: Get a snapshot of the current contacts
		for ( var i = 0; i < contacts.length; i++) {
			// console.log("Display Name = " + contacts[i].displayName);
			elem1 = document.getElementById('contact_find');
			var contactsobtained += "Display Name: " + contacts[i].displayName + ", Contact: " + contacts[i].phoneNumbers + "<br/>";
			elem1.innerHTML = contactsobtained;
		}
	},
	onError : function(contactError) {
		// onError: Failed to get the contacts
		elem1 = document.getElementById('contact_find');
		elem1.innerHTML = "Error!";
		// alert('onError!');
	}

};
