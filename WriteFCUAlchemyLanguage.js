var fs = require('fs');
var AlchemyLanguageV1 = require('watson-developer-cloud/alchemy-language/v1');
var alchemy_language = new AlchemyLanguageV1({
  api_key: 'fcb11f5cebca4850ae9771ed0678ae4222d5733e'
});

var	王祥齡  =	{	
		text: 'Chinese Philosophy (philosophy expert Zi) chinese philosophy Chinese literary aesthetics aesthetic esthetics esthetics Zis thinking beyond the "National Guidance - History department'
    };
var	朱文光  =	{	
		text: 'Repentance write the biography cloud Chronicle Master and Research (Ⅱ) Buddhist restraint over the meaning and value: the college female students learn fast cloud Case Repentance Master Chronicle of the biography written in the Tang Dynasty and Foreign Cultural Exchanges and dissemination - Sub Project III: from Tang Dynasty Buddhist translation and Foreign cultural Exchange (3 3) of the Tang Dynasty and Foreign cultural Exchange and dissemination - sub project III: from the Tang Dynasty Buddhist translation and Foreign cultural Exchange (2 3) of the Tang Dynasty and Foreign cultural Exchange and dissemination - child count Videos three: from the Tang Dynasty Buddhist translation and Foreign cultural Exchange (1 3) Humanities Research Methodology Research Methods in the Humanities Buddhism Buddhist studies Chinese History of Thought the History of Chinese Thoughts of Literary theory Literary theories News writing News writing analysis Ideological analysis of cultural symbols Cultural Symbol crises and challenges of creative expression jargon University Chinese Curriculum theory and practice of Introduction to Tibetan Buddhist life and death of Buddhist studies'
    };


var AllTeachersList = [ 王祥齡 , 朱文光 ]



for(i=0;i<3;i++){	

	//parameters = AllTeachersList[i];

	alchemy_language.keywords(AllTeachersList[i], function (err, response) {
		if (err)
			console.log('error:', err);
		else
				console.log(JSON.stringify(response, null, 2));
				fs.writeFile('/home/user/Tranquility/Temp-Data/'+i+'.json',JSON.stringify(response, null, 2));
	});
}



alchemy_language.entities(parameters, function (err, response) {
	if (err)
		console.log('error:', err);
	else
		console.log(JSON.stringify(response, null, 2));
});




			fs.writeFile('/home/user/Tranquility/Temp-Data/'+i+'.json',123,  function(err) {
			if (err) {
			   return console.error(err);
			}
			console.log("寫資料中...\n");
			});























