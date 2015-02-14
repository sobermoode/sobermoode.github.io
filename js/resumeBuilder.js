var name = "Aaron Justman";
var formattedName = HTMLheaderName.replace( "%data%", name );

var role = "Spaceship Wizard";
var formattedRole = HTMLheaderRole.replace( "%data%", role );

$( "#header" ).prepend( formattedRole );
$( "#header" ).prepend( formattedName );

var bio =
{
	"name" : "Aaron J",
	"role" : "Spaceship Wizard",
	"contacts" :
	{
		"mobile" : "123-456-7890",
		"email" : "aaron.justman@gmail.com",
		"github" : "https://github.com/sobermoode",
		"twitter" : "@sobermoode",
		"location" : "Hermosa Beach, CA"
	},
	"biopic" : "images/AJicon-small.jpg",
	"welcomeMessage" : "Do u liek to aet meatloaf?",
	"skills" :
	[
		"Air drumming",
		"Good looks",
		"Encyclopedic Star Trek: TNG knowledge"
	],
	display : function()
	{
		var mobileContact = HTMLmobile.replace( "%data%", bio.contacts.mobile );
		var emailContact = HTMLemail.replace( "%data%", bio.contacts.email );
		var githubContact = HTMLgithub.replace( "%data%", bio.contacts.github );
		var twitterContact = HTMLtwitter.replace( "%data%", bio.contacts.twitter );
		var locationContact = HTMLlocation.replace( "%data%", bio.contacts.location );
		
		$( "#header" ).append( mobileContact );
		$( "#header" ).append( emailContact );
		$( "#header" ).append( githubContact );
		$( "#header" ).append( twitterContact );
		$( "#header" ).append( locationContact );

		var bioPic = HTMLbioPic.replace( "%data%", bio.biopic );
		$( "#header" ).append( bioPic );

		var welcomeMessage = HTMLWelcomeMsg.replace( "%data%", bio.welcomeMessage );
		$( "#header" ).append( welcomeMessage );

		if ( bio.skills.length > 0 ) 
		{
			var formattedSkill;

			$( "#header" ).append( HTMLskillsStart );
			formattedSkill = HTMLskills.replace( "%data%", bio.skills[ 0 ] );
			$( "#skills" ).append( formattedSkill );
			formattedSkill = HTMLskills.replace( "%data%", bio.skills[ 1 ] );
			$( "#skills" ).append( formattedSkill );
			formattedSkill = HTMLskills.replace( "%data%", bio.skills[ 2 ] );
			$( "#skills" ).append( formattedSkill );
		}
	}
}

bio.display();

var work =
{
	"jobs" :
	[
		{
			"employer" : "Coffee Bean and Tea Leaf",
			"title" : "Barista",
			"location" : "Los Angeles, CA",
			"dates" : "2013 - 2015",
			"description" : "Making coffee, serving pastries."
		},
		{
			"employer" : "Novalogic",
			"title" : "Quality Assurance Specialist",
			"location" : "Calabasas, CA",
			"dates" : "2005 - 2006",
			"description" : "Finding bugs, submitting bugs."
		},
		{
			"employer" : "Activision",
			"title" : "Project Lead",
			"location" : "Santa Monica, CA",
			"dates" : "2001 - 2005",
			"description" : "Leading a project, leading the team."
		}
	],
	display : function()
	{
		for ( job in work.jobs )
		{
			$( "#workExperience" ).append( HTMLworkStart );

			var jobEmployer = HTMLworkEmployer.replace( "%data%", work.jobs[ job ].employer );
			var jobTitle = HTMLworkTitle.replace( "%data%", work.jobs[ job ].title );
			var formattedEmployerTitle = jobEmployer + jobTitle;
			$( ".work-entry:last" ).append( formattedEmployerTitle );

			var jobLocation = HTMLworkLocation.replace( "%data%", work.jobs[ job ].location );
			$( ".work-entry:last" ).append( jobLocation );

			var jobDates = HTMLworkDates.replace( "%data%", work.jobs[ job ].dates );
			$( ".work-entry:last" ).append( jobDates );

			var jobDescription = HTMLworkDescription.replace( "%data%", work.jobs[ job ].description );
			$(".work-entry:last").append(jobDescription)
		}
	}
}

work.display();

/*
$("#main").append(internationalizeButton);

function inName()
{
	// console.log("calling inName()");
	var splitName = name.split(" ");

	var firstName = splitName[0];
	var upperCaseLasteName = splitName[1].toUpperCase();
	var internationalizedName = firstName + " " + upperCaseLasteName;

	// console.log(firstName + " " + upperCaseLasteName);
	return internationalizedName;
}
*/

var projects =
{
	"projects" :
	[
		{
			"title" : "T-shirts I like",
			"dates" : "2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015",
			"description" : "Recent awesome t-shirts from various one-shirt-a-day sites.",
			"images" :
			[
				"images/A_balloonfairy.jpg",
				"images/A_chaos.jpg",
				"images/A_hobbitstales.jpg",
				"images/A_lionwar.jpg"
			]
		},
		{
			"title" : "Books I've read",
			"dates" : "2015",
			"description" : "All of the books I've read, so far this year.",
			"images" :
			[
				"10:04, by Ben Lerner",
				"The Hawkline Monster, by Richard Brautigan",
				"The Man Who Couldn't Stop, by David Adam"
			]
		},
		{
			"title" : "Favorite TV shows",
			"dates" : "1977 - 2015",
			"description" : "The best TV shows, ever.",
			"images" :
			[
				"Star Trek: The Next Generation",
				"Quantum Leap",
				"JEOPARDY!",
				"The Real Ghostbusters",
				"ALF"
			]
		}
	],
	display : function()
	{
		for ( projectNumber in projects.projects )
		{
			$( "#projects" ).append( HTMLprojectStart );

			var projectTitle = HTMLprojectTitle.replace( "%data%", projects.projects[ projectNumber ].title );
			var projectDates = HTMLprojectDates.replace( "%data%", projects.projects[ projectNumber ].dates );
			var projectDescription = HTMLprojectDescription.replace( "%data%", projects.projects[ projectNumber ].description );
			var projectImages = projects.projects[ projectNumber ].images;

			$( ".project-entry:last" ).append( projectTitle );
			$( ".project-entry:last" ).append( projectDates );
			$( ".project-entry:last" ).append( projectDescription );

			if ( projectImages.length !== 0 )
			{
				for ( var image in projectImages )
				{
					var projectImage = HTMLprojectImage.replace( "%data%", projectImages[ image ] );
					$( ".project-entry" ).append( projectImage );
				}
			}
		}
	}
}

projects.display();

var education = 
{
	"schools" :
	[
		{
			"name" : "Purdue University",
			"location" : "West Lafayette, IN",
			"degree" : "none"
			"majors" : [ "Computer Science" ],
			"dates" : 1997,
			"url" : "http://www.purdue.edu"
		},
		{
			"name" : "University of Southern California",
			"location" : "Los Angeles, CA",
			"majors" : ["Art History"],
			"dates" : [1997, 1998, 1999],
			"url" : "http://www.usc.edu"
		},
		{
			"name" : "Santa Monica College",
			"location" : "Santa Monica, CA",
			"majors" : ["General"],
			"dates" : [2014],
			"url" : "http://www.smc.edu"
		}
	],
	"onlineCourses" :
	[
		{
			"title" : "Front-end web developer nanodegree",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "http://www.udacity.com"
		}
	],
	display : function()
	{
		
	}
}

$("#mapDiv").append(googleMap);

