
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
    "welcomeMessage" : "Welcome to my Portfolio",
    "skills" : ['HTML','CSS','PHP'],
    "biopic" : "images/avatar1.png"
};

// display my name
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

// display role
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);


// display contact information
for(var items in bio.contacts) {
    $("#header").append(HTMLcontactGeneric.replace("%contact%", items).replace("%data%", bio.contacts[items]));
}

// bio image
var formattedImg = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedImg);

// welcome message
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMsg);



// display skills information
$("#header").append(HTMLskillsStart);
for(var skills in bio.skills) {
    $("#header").append(HTMLskills.replace("%data%", bio.skills[skills]));
}






// workExperience

var work = {
    "jobs" : [
        {
            "employer" : "Responsive",
            "title" : "PHP Developer",
            "location" : "3 Woodlands Road, Woodstock",
            "dates" : "March 2016 - Present",
            "description" : ""
        },
        {
            "employer" : "DesignGuru",
            "title" : "Senior Developer",
            "location" : "unit G16, Old Castle Brewery, Woodstock",
            "dates" : "March 2016 - Present",
            "description" : ""
        }
    ]

};



// display title
$('#workExperience').append(HTMLworkStart);







// projects

// display title
$('#projects').append(HTMLprojectStart);

var projects = {
    "jobs" : [
        {
            "employer" : "Responsive",
            "title" : "PHP Developer",
            "location" : "3 Woodlands Road, Woodstock",
            "dates" : "March 2016 - Present",
            "description" : ""
        },
        {
            "employer" : "Responsive",
            "title" : "PHP Developer",
            "location" : "3 Woodlands Road, Woodstock",
            "dates" : "March 2016 - Present",
            "description" : ""
        },
        {
            "employer" : "Responsive",
            "title" : "PHP Developer",
            "location" : "3 Woodlands Road, Woodstock",
            "dates" : "March 2016 - Present",
            "description" : ""
        }
    ]

};







// education details
var education = {
    "schools": [
        {
            "name": "Pc Training and Business College",
            "location": "49 St Georges Mall, Cape Town City Centre, Cape Town, 8000",
            "degree": "Diploma",
            "majors": "CompSci",
            "dates" : "",
            "url" : ""
        },
        {
            "name": "Pc Training and Business College",
            "location": "Cape Town",
            "degree": "BA",
            "majors": ["CompSci"],
            "dates" : "",
            "url" : ""
        }
    ],
    "onlineCouses": [
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







// mapDiv ---- google maps
$('#mapDiv').append(googleMap);


