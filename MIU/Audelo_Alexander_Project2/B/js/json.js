//    Full Sail University
//    Mobile Interfaces and Usability
//    Alexander Audelo
//    Week 2 Project 2
//    08/15/13


// Add Test Data 
// Five items for each file type
// 25 items total
// wordpress, author, html5, android, ios
//
// mgraphic = 75 x75
// mtype graphic = 35 x 35 icon

var json = 
{
	//object name
	"wordpress1": 
		{
			//object properties and value
			"mtype": ["Type:", "wordpress"],
			"mname": ["Name:", "Aamb.ca (01)"],
			"mdate": ["Date:", "2010-32-01"],
			"mrating": ["Rating:", "8"],
			"mtopics": ["Incentive:", "work"],
			"mtags": ["Tags:", "aamb akwesasne mohawk management board wordpress"],
			"mgraphic": ["ScreenShot:", "http://aamb.ca/wp-content/uploads/aamb1.jpg"],
			"mcomments": ["Comments:","I setup, customized, host, and maintain wordpress for this client."] 
		},
	"wordpress2": 
		{
			//object properties and value
			"mtype": ["Type:", "wordpress"],
			"mname": ["Name:", "MarlanaThompson.com (02)"],
			"mdate": ["Date:", "2009-03-01"],
			"mrating": ["Rating:", "8"],
			"mtopics": ["Incentive:", "work"],
			"mtags": ["Tags:", "okwaho marlana thompson akwesasne wordpress"],
			"mgraphic": ["ScreenShot:", "http://www.marlanathompson.com/wp-content/uploads/2010/01/OC-Logo-Wolf.jpg"],
			"mcomments": ["Comments:","I setup, customized, host, and maintain webhost, domain, email, mysql, and wordpress for this client."] 
		},
	"wordpress3": 
		{
			//object properties and value
			"mtype": ["Type:", "wordpress"],
			"mname": ["Name:", "Test wordpress 03"],
			"mdate": ["Date:", "1970-09-01"],
			"mrating": ["Rating:", "8"],
			"mtopics": ["Incentive:", "work"],
			"mtags": ["Tags:", "mobile"],
			"mgraphic": ["ScreenShot:", "http://regmedia.co.uk/2011/12/06/gcec_1.jpg"],
			"mcomments": ["Comments:","Case study details about how and why I created this wordpress website."]
		},
	"wordpress4": 
		{
			//object properties and value
			"mtype": ["Type:", "wordpress"],
			"mname": ["Name:", "Test wordpress 04"],
			"mdate": ["Date:", "1970-09-01"],
			"mrating": ["Rating:", "8"],
			"mtopics": ["Incentive:", "work"],
			"mtags": ["Tags:", "mobile"],
			"mgraphic": ["ScreenShot:", "http://regmedia.co.uk/2011/12/06/gcec_1.jpg"],
			"mcomments": ["Comments:","Case study details about how and why I created this wordpress website."]
		},
	"wordpress5": 
		{
			//object properties and value
			"mtype": ["Type:", "wordpress"],
			"mname": ["Name:", "Test wordpress 05"],
			"mdate": ["Date:", "1970-09-01"],
			"mrating": ["Rating:", "8"],
			"mtopics": ["Incentive:", "work"],
			"mtags": ["Tags:", "mobile"],
			"mgraphic": ["ScreenShot:", "http://regmedia.co.uk/2011/12/06/gcec_1.jpg"],
			"mcomments": ["Comments:","Case study details about how and why I created this wordpress website."]
		},
	"author1": 
		{
			//object properties and value
			"mtype": ["Type:", "author"],
			"mname": ["Name:", "Build your own Army of WebBots 03"],
			"mdate": ["Date:", "2010-01-01"],
			"mrating": ["Rating:", "8"],
			"mtopics": ["Incentive:", "work"],
			"mtags": ["Tags:", "ai chatbot aiml"],
			"mgraphic": ["ScreenShot:", "http://ia700808.us.archive.org/zipview.php?zip=/0/items/olcovers274/olcovers274-L.zip&file=2743394-L.jpg"],
			"mcomments": ["Comments:","Book I authored in 1997 to help readers."] 
		},
	"author2": 
		{
			//object properties and value
			"mtype": ["Type:", "author"],
			"mname": ["Name:", "Kanietekeron vs. GM Toxic Waste 02"],
			"mdate": ["Date:", "2011-009-01"],
			"mrating": ["Rating:", "9"],
			"mtopics": ["Incentive:", "work"],
			"mtags": ["Tags:", "kanietekeron gm toxic waste"],
			"mgraphic": ["ScreenShot:", "http://www.androidpress.com/wp-content/uploads/2012/01/find-your-new-rental-with-apartments-com-android-app1-75x75.png"],
			"mcomments": ["Comments:","I interviewed Kanietekeron and wrote articles for the newspaper."]
		},
	"author3": 
		{
			//object properties and value
			"mtype": ["Type:", "author"],
			"mname": ["Name:", "Kanietekeron vs. GM Toxic Waste 03"],
			"mdate": ["Date:", "2011-009-01"],
			"mrating": ["Rating:", "9"],
			"mtopics": ["Incentive:", "work"],
			"mtags": ["Tags:", "kanietekeron gm toxic waste"],
			"mgraphic": ["ScreenShot:", "http://www.androidpress.com/wp-content/uploads/2012/01/find-your-new-rental-with-apartments-com-android-app1-75x75.png"],
			"mcomments": ["Comments:","I interviewed Kanietekeron and wrote articles for the newspaper."] 
		},
	"author4": 
		{
			//object properties and value
			"mtype": ["Type:", "author"],
			"mname": ["Name:", "Test Author 04"],
			"mdate": ["Date:", "2012-02-16"],
			"mrating": ["Rating:", "8"],
			"mtopics": ["Incentive:", "work"],
			"mtags": ["Tags:", "robot"],
			"mgraphic": ["ScreenShot:", "http://www.androidapp101.com/appimg/2785/quick-app-manager.jpeg"],
			"mcomments": ["Comments:","Case study details about how and why I authored this book."]
		},
	"author5": 
		{
			//object properties and value
			"mtype": ["Type:", "author"],
			"mname": ["Name:", "Test Author 05"],
			"mdate": ["Date:", "2012-02-16"],
			"mrating": ["Rating:", "8"],
			"mtopics": ["Incentive:", "work"],
			"mtags": ["Tags:", "robot"],
			"mgraphic": ["ScreenShot:", "http://www.androidapp101.com/appimg/2785/quick-app-manager.jpeg"],
			"mcomments": ["Comments:","Case study details about how and why I authored this book."]
		},
	"graphic1": 
		{
			//object properties and value
			"mtype": ["Type:", "graphic"],
			"mname": ["Name:", "Wally PopArt 01"],
			"mdate": ["Date:", "2011-10-01"],
			"mrating": ["Rating:", "10"],
			"mtopics": ["Incentive:", "school"],
			"mtags": ["Tags:", "walter"],
			"mgraphic": ["ScreenShot:", "http://www.androidapp101.com/appimg/2700/diceshaker-3d-free.jpeg"],
			"mcomments": ["Comments:","Digital painting I created for a school assignment."]  
		},
	"graphic2": 
		{
			//object properties and value
			"mtype": ["Type:", "graphic"],
			"mname": ["Name:", "Wally PopArt 02"],
			"mdate": ["Date:", "2011-10-01"],
			"mrating": ["Rating:", "10"],
			"mtopics": ["Incentive:", "school"],
			"mtags": ["Tags:", "walter"],
			"mgraphic": ["ScreenShot:", "http://www.androidapp101.com/appimg/2700/diceshaker-3d-free.jpeg"],
			"mcomments": ["Comments:","Digital painting I created for a school assignment."]  
		},
	"graphic3": 
		{
			//object properties and value
			"mtype": ["Type:", "graphic"],
			"mname": ["Name:", "Wally PopArt 03"],
			"mdate": ["Date:", "2011-10-01"],
			"mrating": ["Rating:", "10"],
			"mtopics": ["Incentive:", "school"],
			"mtags": ["Tags:", "walter"],
			"mgraphic": ["ScreenShot:", "http://www.androidapp101.com/appimg/2700/diceshaker-3d-free.jpeg"],
			"mcomments": ["Comments:","Digital painting I created for a school assignment."]  
		},
	"graphic4": 
		{
			//object properties and value
			"mtype": ["Type:", "graphic"],
			"mname": ["Name:", "Wally PopArt 04"],
			"mdate": ["Date:", "2011-10-01"],
			"mrating": ["Rating:", "10"],
			"mtopics": ["Incentive:", "school"],
			"mtags": ["Tags:", "walter"],
			"mgraphic": ["ScreenShot:", "http://www.androidapp101.com/appimg/2700/diceshaker-3d-free.jpeg"],
			"mcomments": ["Comments:","Digital painting I created for a school assignment."]  
		},
	"graphic5": 
		{
			//object properties and value
			"mtype": ["Type:", "graphic"],
			"mname": ["Name:", "Wally PopArt 05"],
			"mdate": ["Date:", "2011-10-01"],
			"mrating": ["Rating:", "10"],
			"mtopics": ["Incentive:", "school"],
			"mtags": ["Tags:", "walter"],
			"mgraphic": ["ScreenShot:", "http://www.androidapp101.com/appimg/2700/diceshaker-3d-free.jpeg"],
			"mcomments": ["Comments:","Digital painting I created for a school assignment."]  
		},
	"html5_1": 
		{
			//object properties and value
			"mtype": ["Type:", "html5"],
			"mname": ["Name:", "Test html5 06"],
			"mdate": ["Date:", "1976-04-01"],
			"mrating": ["Rating:", "8"],
			"mtopics": ["Incentive:", "work"],
			"mtags": ["Tags:", "kitten"],
			"mgraphic": ["ScreenShot:", "http://www.whattoexpect.com/Images/socialnetworking/buddyicon_thumb/09_avatar.jpg"],
			"mcomments": ["Comments:","Amazing kitten html5 app created because everyone loves kittens!"]
		},
	"html5_2": 
		{
			//object properties and value
			"mtype": ["Type:", "html5"],
			"mname": ["Name:", "Test html5 07"],
			"mdate": ["Date:", "1979-04-01"],
			"mrating": ["Rating:", "5"],
			"mtopics": ["Incentive:", "school"],
			"mtags": ["Tags:", "bird"],
			"mgraphic": ["ScreenShot:", "http://www.androidstatic.com/wp-content/uploads/2012/01/unnamed3-75x75.jpg"],
			"mcomments": ["Comments:","Case study details about how and why I created this html5 app."]
		},
	"html5_3": 
		{
			//object properties and value
			"mtype": ["Type:", "html5"],
			"mname": ["Name:", "Test html5 03"],
			"mdate": ["Date:", "2009-05-20"],
			"mrating": ["Rating:", "3"],
			"mtopics": ["Incentive:", "work"],
			"mtags": ["Tags:", "gardening"],
			"mgraphic": ["ScreenShot:", "http://regmedia.co.uk/2012/01/30/airdroid_1.jpg"],
			"mcomments": ["Comments:","Case study details about how and why I created this html5 app."]
		},
	"html5_4": 
		{
			//object properties and value
			"mtype": ["Type:", "html5"],
			"mname": ["Name:", "Test html5 04"],
			"mdate": ["Date:", "2009-05-20"],
			"mrating": ["Rating:", "3"],
			"mtopics": ["Incentive:", "work"],
			"mtags": ["Tags:", "gardening"],
			"mgraphic": ["ScreenShot:", "http://regmedia.co.uk/2012/01/30/airdroid_1.jpg"],
			"mcomments": ["Comments:","Case study details about how and why I created this html5 app."]
		},
	"html5_5": 
		{
			//object properties and value
			"mtype": ["Type:", "html5"],
			"mname": ["Name:", "Test html5 05"],
			"mdate": ["Date:", "2009-05-20"],
			"mrating": ["Rating:", "3"],
			"mtopics": ["Incentive:", "work"],
			"mtags": ["Tags:", "gardening"],
			"mgraphic": ["ScreenShot:", "http://regmedia.co.uk/2012/01/30/airdroid_1.jpg"],
			"mcomments": ["Comments:","Case study details about how and why I created this html5 app."]
		},
	"android1": 
		{
			//object properties and value
			"mtype": ["Type:", "android"],
			"mname": ["Name:", "Test Android 01"],
			"mdate": ["Date:", "1970-04-01"],
			"mrating": ["Rating:", "8"],
			"mtopics": ["Incentive:", "inspiration"],
			"mtags": ["Tags:", "fishing"],
			"mgraphic": ["ScreenShot:", "http://www.androidapp101.com/appimg/2761/alphabet-car.jpeg"],
			"mcomments": ["Comments:","Case study details about why I find this android app inspirational."]
		},
	"android02": 
		{
			//object properties and value
			"mtype": ["Type:", "android"],
			"mname": ["Name:", "Test Android 02"],
			"mdate": ["Date:", "1970-02-01"],
			"mrating": ["Rating:", "10"],
			"mtopics": ["Incentive:", "school"],
			"mtags": ["Tags:", "zen"],
			"mgraphic": ["ScreenShot:", "http://yourotherwheels.com/_images/app/qr-android.png"],
			"mcomments": ["Comments:","Case study details about how and why I created this android app."]
		},
	"android03": 
		{
			//object properties and value
			"mtype": ["Type:", "android"],
			"mname": ["Name:", "Test Android 03"],
			"mdate": ["Date:", "1970-09-01"],
			"mrating": ["Rating:", "8"],
			"mtopics": ["Incentive:", "work"],
			"mtags": ["Tags:", "green"],
			"mgraphic": ["ScreenShot:", "http://ecx.images-amazon.com/images/I/51NEb1QMCHL._SL75_.png"],
			"mcomments": ["Comments:","Case study details about how and why I created this android app."]
		},
	"android04": 
		{
			//object properties and value
			"mtype": ["Type:", "android"],
			"mname": ["Name:", "Test Android 04"],
			"mdate": ["Date:", "1976-04-01"],
			"mrating": ["Rating:", "8"],
			"mtopics": ["Incentive:", "work"],
			"mtags": ["Tags:", "purple"],
			"mgraphic": ["ScreenShot:", "http://www.androidapp101.com/appimg/2798/priceline-hotel-negotiator.jpeg"],
			"mcomments": ["Comments:","Case study details about how and why I created this android app."]
		},
	"android05": 
		{
			//object properties and value
			"mtype": ["Type:", "android"],
			"mname": ["Name:", "Test Android 05"],
			"mdate": ["Date:", "1979-04-01"],
			"mrating": ["Rating:", "5"],
			"mtopics": ["Incentive:", "school"],
			"mtags": ["Tags:", "orange"],
			"mgraphic": ["ScreenShot:", "http://mcdn.toolking.com/tk_banner_images/AndroidAppIcon.png"],
			"mcomments": ["Comments:","Case study details about how and why I created this android app."]
		},
	"ios1": 
		{
			//object properties and value
			"mtype": ["Type:", "ios"],
			"mname": ["Name:", "Test ios 1"],
			"mdate": ["Date:", "1982-04-01"],
			"mrating": ["Rating:", "9"],
			"mtopics": ["Incentive:", "school"],
			"mtags": ["Tags:", "white yellow"],
			"mgraphic": ["ScreenShot:", "http://cdn.trickyways.com/wp-content/uploads/2011/07/google-plus-android-app-75x75.jpg"],
			"mcomments": ["Comments:","Case study details about how and why I created this ios app."]
		},
	"ios2": 
		{
			//object properties and value
			"mtype": ["Type:", "ios"],
			"mname": ["Name:", "Test ios 2"],
			"mdate": ["Date:", "1970-09-01"],
			"mrating": ["Rating:", "8"],
			"mtopics": ["Incentive:", "work"],
			"mtags": ["Tags:", "black blue"],
			"mgraphic": ["ScreenShot:", "http://androiduk.net/wp-content/uploads/2011/04/uk_android_app_tvguideuk.png"],
			"mcomments": ["Comments:","Case study details about how and why I created this ios app."]
		},
	"ios3": 
		{
			//object properties and value
			"mtype": ["Type:", "ios"],
			"mname": ["Name:", "Test ios 3"],
			"mdate": ["Date:", "1976-04-01"],
			"mrating": ["Rating:", "8"],
			"mtopics": ["Incentive:", "work"],
			"mtags": ["Tags:", "yellow blue"],
			"mgraphic": ["ScreenShot:", "http://regmedia.co.uk/2011/09/30/sandisk_1.jpg"],
			"mcomments": ["Comments:","Case study details about how and why I created this ios app."]
		},
	"ios4": 
		{
			//object properties and value
			"mtype": ["Type:", "ios"],
			"mname": ["Name:", "Test ios 4"],
			"mdate": ["Date:", "1979-04-01"],
			"mrating": ["Rating:", "5"],
			"mtopics": ["Incentive:", "school"],
			"mtags": ["Tags:", "gold pink"],
			"mgraphic": ["ScreenShot:", "http://www.androidapp101.com/appimg/2779/kayak-flight-hotel-car-search-and-travel-planner.jpeg"],
			"mcomments": ["Comments:","Case study details about how and why I created this ios app."]
		},
	"ios5": 
		{
			//object properties and value
			"mtype": ["Type:", "ios"],
			"mname": ["Name:", "Test ios 5"],
			"mdate": ["Date:", "1982-04-01"],
			"mrating": ["Rating:", "9"],
			"mtopics": ["Incentive:", "school"],
			"mtags": ["Tags:", "white black"],
			"mgraphic": ["ScreenShot:", "http://www.androidapp101.com/appimg/2798/priceline-hotel-negotiator.jpeg"],
			"mcomments": ["Comments:","Case study details about why I am inspired by this ios app."]
		}
}
