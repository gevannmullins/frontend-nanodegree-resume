
// bio details
var bio = {
    "name" : "Gevann Mullins",
    "role" : "PHP Web Developer",
    "contacts" : {
        "mobile" : "078 929 8581",
        "email" : "gevann@responsive.co.za",
        "github" : "https://github.com/gevannmullins",
        "location" : "107 Botma Street, Steenberg"
    },
    "welcomeMessage" : "A league of its own",
    "skills" : ['HTML','CSS','PHP'],
    "biopic" : "images/avatar1.png"
};



// display contact information
/*
for(var items in bio.contacts) {

    $("#topContacts").append(HTMLcontactGeneric.replace("%contact%", items).replace("%data%", bio.contacts[items]));
}
*/

// display my name
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

// display role

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);


// welcome message

 var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
 $("#header").append(formattedMsg);

$("#header_container").append(HTMLheaderArrow);

// bio image
 /*
var formattedImg = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedImg);
  */


// display skills information
 /*
$("#header").append(HTMLskillsStart);
for(var skills in bio.skills) {
    $("#header").append(HTMLskills.replace("%data%", bio.skills[skills]));
}
  */




// workExperience

// display title
$("#workExperience").append(HTMLworkStart);

var work = {
    "jobs" : [
        {
            "employer" : "Responsive",
            "title" : "PHP Developer",
            "location" : "3 Woodlands Road, Woodstock",
            "dates" : "March 2016 - Present",
            "description" : "rdtndrf"
        },
        {
            "employer" : "DesignGuru",
            "title" : "Senior Developer",
            "location" : "unit G16, Old Castle Brewery, Woodstock",
            "dates" : "March 2016 - Present",
            "description" : "drtndrt"
        },
        {
            "employer" : "DesignGuru",
            "title" : "Senior Developer",
            "location" : "unit G16, Old Castle Brewery, Woodstock",
            "dates" : "March 2016 - Present",
            "description" : "drndrtn"
        }
    ]

};



for(var jobs in work.jobs) {
    $("#workExperience").append(HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer));
    $("#workExperience").append(HTMLworkTitle.replace("%data%", work.jobs[jobs].title));
    $("#workExperience").append(HTMLworkDates.replace("%data%", work.jobs[jobs].dates));
    $("#workExperience").append(HTMLworkLocation.replace("%data%", work.jobs[jobs].location));
    $("#workExperience").append(HTMLworkDescription.replace("%data%", work.jobs[jobs].description));
}




// projects

// display title
$('#projects').append(HTMLprojectStart);

var projects = {
    "jobs" : [
        {
            "title" : "Woolworths Game App",
            "dates" : "March 2016 - Present",
            "description" : "tests",
            "images" : "1"
        },
        {
            "title" : "Woolworths Game App",
            "dates" : "March 2016 - Present",
            "description" : "tests",
            "images" : "2"
        },
        {
            "title" : "Woolworths Game App",
            "dates" : "March 2016 - Present",
            "description" : "tests",
            "images" : "2"
        },
        {
            "title" : "Woolworths Game App",
            "dates" : "March 2016 - Present",
            "description" : "tests",
            "images" : "3"
        },
        {
            "title" : "Woolworths Game App",
            "dates" : "March 2016 - Present",
            "description" : "tests",
            "images" : "4"
        },
    ]

};


// display title
for(var jobs in projects.jobs) {
    $("#projects").append(HTMLprojectTitle.replace("%data%", projects.jobs[jobs].title));
    $("#projects").append(HTMLprojectDates.replace("%data%", projects.jobs[jobs].dates));
    $("#projects").append(HTMLprojectDescription.replace("%data%", projects.jobs[jobs].description));
    $("#projects").append(HTMLprojectImage.replace("%data%", projects.jobs[jobs].images));
}







// education details
var education = {
    "schools": [
        {
            "name": "Pc Training and Business College",
            "location": "49 St Georges Mall, Cape Town City Centre, Cape Town, 8000",
            "degree": "Diploma",
            "majors": "CompSci",
            "dates" : "",
        },
        {
            "name": "Pc Training and Business College",
            "location": "Cape Town",
            "degree": "BA",
            "majors": ["CompSci"],
            "dates" : "",
        }
    ],
    "onlineCourses": [
        {
            "title" : "Udacity NanoDegree - Frontend Developer Course",
            "school" : "Udacity NanoDegree",
            "date" : "",
            "url" : "www.udacity.com"
        },
        {
            "title" : "Udacity NanoDegree - Frontend Developer Course",
            "school" : "Udacity NanoDegree",
            "date" : "",
            "url" : ""
        }

    ]
};
// display title
$('#education').append(HTMLschoolStart);
// display education information

// display title
for(var schools in education.schools) {
    $("#education").append(HTMLschoolName.replace("%data%", education.schools[schools].name));
    $("#education").append(HTMLschoolLocation.replace("%data%", education.schools[schools].location));
    $("#education").append(HTMLschoolDegree.replace("%data%", education.schools[schools].degree));
    $("#education").append(HTMLschoolMajor.replace("%data%", education.schools[schools].majors));
    $("#education").append(HTMLschoolDates.replace("%data%", education.schools[schools].dates));
}

$('#education').append(HTMLonlineClasses);
// display title
for(var online in education.onlineCourses) {
    $("#education").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title));
    $("#education").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school));
    $("#education").append(HTMLonlineDates.replace("%data%", education.onlineCourses[online].date));
    $("#education").append(HTMLonlineURL.replace("%data%", education.onlineCourses[online].url));
}








// mapDiv ---- google maps
$('#mapDiv').append(googleMap);


