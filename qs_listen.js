$(function() {
	var ebene;
	$("#nsubmit").click(function() {
		ebene = 1;

		var eingabe = $("#n").val();
		var eingabe = eingabe.split(";");

		$("#reihen").html("<table><tr><td></td></tr></table>");

		eingabe.forEach(function (element, index, array) {
			$("#reihen td").last().append("<div class='karte'>" + element + "</div>");
		});
	});
	$("#sortier").click(function() {
		$(".karte").css("background-color", "white");
		var lastRow = $("#reihen tr").last();

		var wasdran = "<table><tr>";
		$(lastRow).find("td").each (function (index) {
			var karten = $(this).find(".karte");
			var pivot = parseInt($(karten).last().css("background-color", "green").text());
			if (karten.length>1) {

				console.log("Pivot: " + pivot);

				var kleiner = [];
				var grosser = [];

				for (var i = 0; i < karten.length - 1; i++) {
					var val = parseInt($(karten[i]).text());
					if (val <= pivot) {
						kleiner.push(val);
					} else {
						grosser.push(val);
					}
				}
				wasdran += "<td>";
				$.each(kleiner, function(index, value) {
					wasdran += "<div class='karte'>" + value + "</div>";
				});
				wasdran += "</td><td>";
				wasdran += "<div class='karte'>" + pivot + "</div>";
				wasdran += "</td><td>";
				$.each(grosser, function(index, value) {
					wasdran += "<div class='karte'>" + value + "</div>";
				});
				wasdran += "</td>";	
				wasdran += "<td class='spacer'></td>";
			} else if(karten.length==1) {
				wasdran += "<td><div class='karte'>" + pivot + "</div></td>";
				wasdran += "<td class='spacer'></td>";
			}
		});
		wasdran += "</tr></table>";
		$("#reihen").append(wasdran);
	});
});