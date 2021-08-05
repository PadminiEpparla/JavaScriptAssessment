var library = [
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true
},
{
author: 'Suzanne Collins',
title: 'Mockingjay: The Final Book of The Hunger Games',
readingStatus: false
}];
for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log(book +"Already read " );
    } else
    {
     console.log(book + "still need to read ");
    }
   }


//output: 
//        "'The Road Ahead' by Bill Gates.Already read "
//        "'Walter Isaacson' by Steve Jobs.Already read "
//        "'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.still need to read "
