var name = "Aaron J";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Spaceship Wizard";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio =
{
	"name" : "Aaron J",
	"role" : "Spaceship Wizard",
	"welcomeMessage" : "Do u liek to aet meatloaf?",
	"contacts" :
	{
		"home" : "1701 Enterprise St. D",
		"phone" : "123-345-6789",
		"starmail" : "aaronj@starfleet.org",
		"twitter" : "@capmaaronj",
		"shipRegistry" : "NCC-1701-D"
	},
	"skills" : ["Air drumming", "Good looks", "Moxie"]
}

if (bio.skills.length > 0) 
{
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
};

var work =
{
	"jobs" :
	[
		{
			"employer" : "Coffee Bean and Tea Leaf",
			"title" : "Barista",
			"location" : "Los Angeles, CA",
			"dates" : [2013, 2014, 2015],
			"description" : "Making coffee, serving pastries."
		},
		{
			"employer" : "Novalogic",
			"title" : "Quality Assurance Specialist",
			"location" : "Calabasas, CA",
			"dates" : [2005, 2006],
			"description" : "Finding bugs, submitting bugs."
		},
		{
			"employer" : "Activision",
			"title" : "Project Lead",
			"location" : "Santa Monica, CA",
			"dates" : [2001, 2002, 2003, 2004, 2005],
			"description" : "Leading a project, leading the team."
		}
	]
}

for ( job in work.jobs )
{
	$("#workExperience").append(HTMLworkStart);

	var jobEmployer = HTMLworkEmployer.replace( "%data%", work.jobs[ job ].employer );
	var jobTitle = HTMLworkTitle.replace( "%data%", work.jobs[ job ].title );
	var formattedEmployerTitle = jobEmployer + jobTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var jobLocation = HTMLworkLocation.replace( "%data%", work.jobs[ job ].location );
	$(".work-entry:last").append(jobLocation);

	var jobDates = "";
	for ( var i = 0; i < work.jobs[ job ].dates.length; i++ )
	{
		// var numberString = work.jobs[ job ].dates[ i ].toString();
		// jobDates += numberString + ", ";
		$(".work-entry:last").append(work.jobs[ job ].dates[ i ] + ", ");
	};

	// console.log( jobDates );

	var jobDescription = HTMLworkDescription.replace( "%data%", work.jobs[ job ].description );
	$(".work-entry:last").append(jobDescription)

	// var formattedJob = jobEmpjobDates += loyer + j[job]obTitle;
	// var formattedJob = jobEmployer + jobTitle + jobLocation + jobDates + jobDescription;

	// $(".work-entry:last").append( formattedJob );
}

var projects =
{
	"projects" :
	[
		{
			"title" : "T-shirts I like",
			"dates" : [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
			"description" : "All of the t-shirts I've ordered from various one-shirt-a-day sites.",
			"images" :
			[
				"../images/A_balloonfairy.jpg",
				"../images/A_chaos.jpg",
				"../images/A_hobbitstales.jpg",
				"../images/A_lionwar.jpg"
			]
		}
	]
}

var education = 
{
	"schools" :
	[
		{
			"name" : "Purdue University",
			"location" : "West Lafayette, IN",
			"majors" : ["Computer Science"],
			"dates" : [1995, 1996, 1997],
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
			"dates" : [2015],
			"url" : "http://www.udacity.com"
		}
	]
}

