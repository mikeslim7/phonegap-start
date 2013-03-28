/*
 * Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
var app = {
	initialize : function() {
		this.bind();
	},
	bind : function() {
		document.addEventListener('deviceready', this.deviceready, false);
	},
	deviceready : function() {
		alert('device is ready');
		$('#tab-bar li a').click(function() {

			alert($(this).attr('href'));
			$("#pages div.current").removeClass("current")
			$($(this).attr('href')).addClass("current");

			// e.preventDefault();
			// alert(e.target.hash);
			// app.ViewPage(e.target.hash);
			/*
			 * var nextPage = $(e.target.hash); $("#pages .current").removeClass("current"); nextPage.addClass("current");
			 */
		});
	},
	ViewPage : function(toPage) {
		var toPage = $(toPage), fromPage = $("#pages .current");

		if (toPage.hasClass("current") || toPage === fromPage) {
			alert('returning');
			return;
		}

		alert('returning not');
		toPage.addClass("current fade in").one("webkitAnimationEnd", function() {
			fromPage.removeClass("current fade out");
			toPage.removeClass("fade in");
		});
		fromPage.addClass("fade out");
	}

};
