let outputElement = document.getElementById('output');

let hyperfixations = [
  {
    "name" : "The Little Mermaid",
    "age" : "3",
    "id" : "mermaid",
    "description" : "on repeat every single day for who knows how long. i also did this with enchanted i clearly remember going up to the dvd player and hitting play over and over again. typical child obsessed with good disney movie",
    "image" : "tlm.jpg"
  },
  {
    "name" : "Victorious",
    "age" : "7-8",
    "id" : "victorious",
    "description" : "memorized every song wow their songs are so superior. was self-aware that i talked about this show way too much and annoyed anyone who dared to bring it up. i learned from then on to shut up about things i liked. also, rewatching this show was terrifying",
    "image" : "victorious.jpg"
  },
  {
    "name" : "Littlest Pet Shop",
    "age" : "9-11",
    "id" : "lps",
    "description" : "i want to burn this part of my life away, for other reasons too. i was so obsessed with the stories and the little toys and crafting little things to play with them",
    "image" : "lps.jpg"
  },
  {
    "name" : "Minecraft, Minecraft Youtubers, The Pack",
    "age" : "11-13",
    "id" : "minecraft1",
    "description" : "OH MIDDLE SCHOOL what a time to be alive, i was way too obsessed with dudes who played the square video game it's so embarassing to think about, i repressed at home but at school i was talking about these guys and this game NONSTOP PLEASE STOP",
    // "favorite" : "Preston",
    "image" : "mc.jpg"
  },
  {
    "name" : "BTS",
    "age" : "12-16",
    "id" : "bts",
    "description" : "on a serious note. they changed me for the better and saved my identity crisis. i am forever forever grateful to them i still adore them and am not embarrassed that i was a super fan! while i was a big fan, not a day (or few hours) passed where i didn't watch their videos or listened to them. i did this for a LONG time and for most of my high school time",
    // "favorite" : "Suga (Min Yoongi)",
    "image" : "bts.jpg"
  },
  {
    "name" : "Mystic Messenger",
    "age" : "14-15",
    "id" : "mm",
    "description" : "the popular korean dating sim is actually such a good game with a good concept and story i won't take any criticism. was so invested in the lore and freaked out over every illustration. amazing characters honestly i stayed up until 3am every day to talk to fictional people and it was FUN not only was it FUN i couldn't stop thinking about it! this one was less severe compared to the next one, but i just want to say this game is still good",
    // "favorite" : "Jumin Han",
    "image" : "mm.jpg"
  },
  {
    "name" : "The Maze Runner",
    "age" : "15",
    "id" : "tmr",
    "description" : "the best dystopian ya trilogy! i watched the first movie so many times i memorized the entire thing, had a stan twitter account dedicated to the series, and couldn't get homework done; this one was really intense for me and disrupted my daily life more, but it was shorter",
    // "favorite" : "Newt",
    "image" : "tmr.jpg"
  },
  {
    "name" : "Dream Team, Dream SMP",
    "age" : "16-18",
    "id" : "dream",
    "description" : "fixation so strong it killed my interest in bts immediately (my longest fixation). again dedicated all my time and thoughts to white men who play the block game. i was on stan twitter ALL DAY and couldn't get myself off of it. looking back i learned a lot about cancel culture, stan twitter, the beauty of fanart, the ignorance of a lot of minecraft youtubers, and toxic stans!! it was really fun at first when they weren't famous but the fandom got super big super quick and it got so toxic i was doing pretty bad mentally because of the stan culture by 2021. despite that, they consumed my entire life - fixation so strong that when my fav kept saying sus things i excused and defended him every time... dark times...",
    // "favorite" : "Dream",
    "image" : "dt.jpg"
  },
  {
    "name" : "K-Dramas (specifically '18 Again', 'Hospital Playlist', and 'My Liberation Notes')",
    "age" : "18",
    "id" : "kdramas",
    "description" : "these shows took up my thoughts entirely, like i spend the ENTIRE day just thinking about this stuff and consuming it over and over again. the good thing was that these shows taught me a lot of good lessons, and they all have great writing. they made me cry way too much as well. very short but very intense",
    // "favorite" : "Hospital Playlist",
    "image" : "kdrama.jpeg"
  },
  {
    "name" : "Haikyuu!!",
    "age" : "19-Present",
    "id" : "hq",
    "description" : "the volleyball manga changed my life!!! i learned so much about what it means to have passion and love, what it means to work hard and take care of yourself; it has such great characters and writing i can't get my mind off of it. literally, most times it's every hour of my day i sleep thinking about my fixations and wake up and think about them immediately again. this fixation started in june and i'm still just as into it as i was 5 months ago. i don't know how this happens every time. every time i feel a fixation coming i'm like 'again?????' and i feel guilty that i'm not interested in my old fixation anymore and then i spend months or even years just focused on something so dumb like why can't i be obsessed with cooking or something instead of fictional characters",
    // "favorite" : "don't do that to me",
    "image" : "hq.jpg"
  }
];


for (var i = 0; i < hyperfixations.length; i++) {
  generateElement(hyperfixations[i]);
}


function generateElement(incomingJSON) {

  let newContentElement = document.createElement("BUTTON");
  newContentElement.classList.add('collapsible');
  newContentElement.innerText = incomingJSON['name'];
  outputElement.appendChild(newContentElement);

  let newContentDrop = document.createElement("DIV");
  newContentDrop.classList.add('content');
  outputElement.appendChild(newContentDrop);

  let newContentAge = document.createElement("H4");
  newContentAge.classList.add('contentAge');
  newContentAge.innerText = "age " + incomingJSON['age'];
  newContentDrop.appendChild(newContentAge);

  let newFlex = document.createElement("DIV");
  newFlex.classList.add('flexbox');
  newContentDrop.appendChild(newFlex);

  let newImage = document.createElement("IMG");
  newImage.classList.add("image");
  newImage.src = incomingJSON["image"];
  newFlex.appendChild(newImage);

  let newContentDesc = document.createElement("P");
  newContentDesc.classList.add('contentDesc');
  newContentDesc.innerText = incomingJSON['description'];
  newFlex.appendChild(newContentDesc);

}

// Code from W3Schools - for the drop down

let coll = document.getElementsByClassName("collapsible");

for (var y = 0; y < coll.length; y++) {
  coll[y].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
};
