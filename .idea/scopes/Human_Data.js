var checkPersonExists = function(text,section,NameObject,DayObject,isYar){

    var indexstart;
    var  indexend ;
    var je;
    var temp;
    var day;
    var shorttext;
    var Months = ["Հունվար","Փետրվար","Մարտ","Ապրիլ","Մայիս","Հունիս","Հուլիս","Օգոստոս","Սեպտեմբեր","Հոկտեմբեր","Նոյեմբեր","Դեկտեմբեր"];
    var f = function(word){
        for(var count = 0;count < 12;count++)
            if(word == Months[count])
                return count+1;
    }


    indexstart = text.indexOf(section);
    indexend = text.indexOf("==",indexstart+13);
    shorttext = text.substring(indexstart,indexend);

    if(isYar){
        while(indexstart != -1) {

            indexstart = shorttext.indexOf("[[",indexstart);
            temp =  shorttext.substring(indexstart+2,indexstart+6);
            if(temp == DayObject.year)
            {

                indexstart = shorttext.indexOf("[[",indexstart+8);
                je =  shorttext.indexOf("]]",indexstart+2);
                temp = shorttext.substring(indexstart+2,je);
                if(NameObject.name === temp)
                    return   true;
            }
            indexstart = shorttext.indexOf("*",indexstart);
        }
    }
    else
    {
        indexstart = shorttext.indexOf("'''",indexstart);
        while(indexstart !== -1){


            je = shorttext.indexOf("ի",indexstart+3);
            temp = shorttext.substring(indexstart+3,je);

            day = shorttext.substring(je+2,je+4);
            if(DayObject.month === f(temp) && day == DayObject.day)
            {
                indexstart = shorttext.indexOf("[[",je+6);
                je = shorttext.indexOf("]]",indexstart+2);
                temp = shorttext.substring(indexstart+2,je);
                if(NameObject.name === temp)
                    return true;
            }
            indexstart = shorttext.indexOf("'''",indexstart);
        }
    }
    return false;
}


