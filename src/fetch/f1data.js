// let video = document.getElementById('achtergrond')
let cardWidth = "";
let teamColor = "";
let driverStandings = "";
let cardHeight = "";
let driverFirstName = "";
let driverLastName = "";
let team = "redbull";
let driver = "verstappen";
let teamColors = {
	ferrari: "#F91536",
	red_bull: "#3671C6",
	mercedes: "#6CD3BF",
	mclaren: "#F58020",
	alfa: "#C92D4B",
	alpine: "#2293D1",
	haas: "#B6BABD",
	alphatauri: "#5E8FAA",
	aston_martin: "#358C75",
	williams: "#37BEDD",
};

const url = `https://ergast.com/api/f1/current/driverStandings.json`;

const options = {
	method: "GET",
	Host: "api.aladhan.com",
	scheme: "https",
	Accept: "*/*",
	"Access-Control-Allow-Origin": "*",
	headers: {
		// no headers athorwise it wont work
	},
};

const data = fetch(url, options)
	.then((response) => response.json())
	.then((data) => {
		return data;
	})
	.catch((error) => {
		console.error("Error:", error);
	});

data.then((data) => {
	let standingColor = document.querySelectorAll("#standing-color");
	let standingNameDriver = document.querySelectorAll("#standing-name-driver");

	let podium = document.querySelectorAll("#ranglijst-podium");

	for (let i = 0; i < 10; i++) {
		driverLastName =
			data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver
				.familyName;
		driverFirstName =
			data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver
				.givenName;
		team =
			data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i]
				.Constructors[0].constructorId;
		driverStandings =
			data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i];

		teamColor = teamColors[team];

		console.log(driverStandings.points);

		if (driverLastName === "Pérez") {
			driverLastName = "Perez";
		}

		driver = `${driverFirstName.toLowerCase()}-${driverLastName.toLowerCase()}`;

		standingColor[i].style.backgroundColor = teamColor;

		standingNameDriver[
			i
		].innerHTML = `<light>${driverFirstName}<light> ${driverLastName}`;

		if (i === 0) {
			cardWidth = 300;
			cardHeight = 255;
			podium[i + 1].innerHTML = cards().eerste;
		} else if (i === 2) {
			cardHeight = 203;
			cardWidth = 227;

			podium[i].innerHTML = cards().derde;
		} else if (i === 1) {
			cardHeight = 203;
			cardWidth = 227;
			podium[i - 1].innerHTML = cards().tweede;
		}
	}

	function cards() {
		let eerste = `<svg id="podium-cards" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${cardWidth}" height="${cardHeight}" viewBox="0 0 333 304">
	<defs>
	<pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 96 64">
		<image width="96" height="64" xlink:href="${require(`@/assets/img/${team}/${driver}/flag.jpg`)}"/>
	</pattern>
	</defs>
	<path id="Rectangle_8" data-name="Rectangle 8" d="M40,0H293a40,40,0,0,1,40,40v95a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V40A40,40,0,0,1,40,0Z" transform="translate(0 85)" fill="#fff"/>
	<rect id="Rectangle_9" data-name="Rectangle 9" width="333" height="19" transform="translate(0 190)" fill="${teamColor}"/>
	<image id="verstappen-zonderAchtergrond" width="220" height="220" transform="translate(100)" xlink:href="${require(`@/assets/img/${team}/${driver}/${driver}-zonderAchtergrond.png`)}"/>
	<path id="Rectangle_7" data-name="Rectangle 7" d="M0,0H333a0,0,0,0,1,0,0V61a40,40,0,0,1-40,40H40A40,40,0,0,1,0,61V0A0,0,0,0,1,0,0Z" transform="translate(0 203)" fill="#1a1a1a"/>
	<line id="Line_1" data-name="Line 1" y2="53.536" transform="translate(66 98.964)" fill="none" stroke="${teamColor}" stroke-width="10"/>
	<text id="Max_Verstappen" data-name="Max 
	Verstappen" transform="translate(38 253)" fill="#fff" font-size="28" font-family="HelveticaNeue-Light, Helvetica Neue" font-weight="300"><tspan x="0" y="0">${driverFirstName}</tspan><tspan y="0" font-family="HelveticaNeue, Helvetica Neue" font-weight="400"> </tspan><tspan font-family="HelveticaNeue-Bold, Helvetica Neue" font-weight="700"><tspan x="0" y="34">${driverLastName}</tspan></tspan></text>
	<rect id="flag-klein" width="28" height="19" transform="translate(${
		driverFirstName.length + 130
	} 235)" fill="url(#pattern)"/>
	</svg>
	`;

		let derde = `<svg id="podium-cards" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${cardWidth}" height="${cardHeight}" viewBox="0 0 333 304">
	<path id="Rectangle_13" data-name="Rectangle 13" d="M40,0H293a40,40,0,0,1,40,40v95a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V40A40,40,0,0,1,40,0Z" transform="translate(0 85)" fill="#fff"/>
	<rect id="Rectangle_14" data-name="Rectangle 14" width="333" height="19" transform="translate(0 190)" fill="${teamColor}"/>
	<image id="verstappen-zonderAchtergrond" width="220" height="220" transform="translate(100)" xlink:href="${require(`@/assets/img/${team}/${driver}/${driver}-zonderAchtergrond.png`)}"/>
	<path id="Rectangle_15" data-name="Rectangle 15" d="M0,0H333a0,0,0,0,1,0,0V61a40,40,0,0,1-40,40H40A40,40,0,0,1,0,61V0A0,0,0,0,1,0,0Z" transform="translate(0 203)" fill="#1a1a1a"/>
	<text id="Max_Verstappen" data-name="Max 
	Verstappen" transform="translate(29 247)" fill="#fff" font-size="28" font-family="HelveticaNeue-Light, Helvetica Neue" font-weight="300"><tspan x="0" y="0">${driverFirstName}</tspan><tspan y="0" font-family="HelveticaNeue, Helvetica Neue" font-weight="400"> </tspan><tspan font-family="HelveticaNeue-Bold, Helvetica Neue" font-weight="700"><tspan x="0" y="34">${driverLastName}</tspan></tspan></text>
	<line id="Line_13" data-name="Line 13" y2="53.536" transform="translate(66 98.964)" fill="none" stroke="${teamColor}" stroke-width="10"/>
	<line id="Line_14" data-name="Line 14" y2="53.536" transform="translate(86 98.964)" fill="none" stroke="${teamColor}" stroke-width="10"/>
	<line id="Line_15" data-name="Line 15" y2="53.536" transform="translate(46 98.964)" fill="none" stroke="${teamColor}" stroke-width="10"/>
	<image id="flag-klein" width="27" height="18" transform="translate(${
		driverFirstName.length + 104
	} 230)" xlink:href="${require(`@/assets/img/${team}/${driver}/flag.jpg`)}"/>
	</svg>
	`;

		let tweede = `<svg id="podium-cards" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"width="${cardWidth}" height="${cardHeight}" viewBox="0 0 333 304">
	<defs>
	  <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 96 64">
		<image width="96" height="64" xlink:href="${require(`@/assets/img/${team}/${driver}/flag.jpg`)}"/>
	  </pattern>
	</defs>
	<path id="Rectangle_10" data-name="Rectangle 10" d="M40,0H293a40,40,0,0,1,40,40v95a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V40A40,40,0,0,1,40,0Z" transform="translate(0 85)" fill="#fff"/>
	<rect id="Rectangle_11" data-name="Rectangle 11" width="333" height="19" transform="translate(0 190)" fill="${teamColor}"/>
	<image id="verstappen-zonderAchtergrond" width="220" height="220" transform="translate(100)" xlink:href="${require(`@/assets/img/${team}/${driver}/${driver}-zonderAchtergrond.png`)}"/>
	<path id="Rectangle_12" data-name="Rectangle 12" d="M0,0H333a0,0,0,0,1,0,0V61a40,40,0,0,1-40,40H40A40,40,0,0,1,0,61V0A0,0,0,0,1,0,0Z" transform="translate(0 203)" fill="#1a1a1a"/>
	<text id="Max_Verstappen" data-name="Max 
	Verstappen" transform="translate(29 247)" fill="#fff" font-size="28" font-family="HelveticaNeue-Light, Helvetica Neue" font-weight="300"><tspan x="0" y="0">${driverFirstName}</tspan>
	
	<tspan y="0" font-family="HelveticaNeue, Helvetica Neue" font-weight="400"> </tspan><tspan font-family="HelveticaNeue-Bold, Helvetica Neue" font-weight="700"><tspan x="0" y="34">${driverLastName}</tspan></tspan></text>
	<rect id="flag-klein" width="28" height="19" transform="translate(${
		driverFirstName.length + 85
	} 230)" fill="url(#pattern)" />
	<line id="Line_10" data-name="Line 10" y2="53.536" transform="translate(55 98.964)" fill="none" stroke="${teamColor}" stroke-width="10"/>
	<line id="Line_12" data-name="Line 12" y2="53.536" transform="translate(74 98.964)" fill="none" stroke="${teamColor}" stroke-width="10"/>
	</svg>
	`;

		let podiumCards = {
			eerste,
			tweede,
			derde,
		};

		return podiumCards;
	}
});
