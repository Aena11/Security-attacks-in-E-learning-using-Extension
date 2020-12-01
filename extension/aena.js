var menuItem = {
    "id": "Wikit1",
    "title": "Wikit1",
    "contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);

function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}
chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "Wikit1" && clickData.selectionText){    
        var wikiUrl1 = "https://www.udemy.com/courses/search/?price=price-free&q=" + fixedEncodeURI(clickData.selectionText + "&ratings=4.5&sort=relevance");
        


        var createData = {
            "url": wikiUrl1,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": screen.availWidth/2,
            "height": screen.availHeight/2
        };
              
        chrome.windows.create(createData, function(){});
       
    }
});


chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "Wikit1" && clickData.selectionText){    
        var wikiUrl1 = "https://www.coursera.org/search?query=" + fixedEncodeURI(clickData.selectionText);
        


        var createData = {
            "url": wikiUrl1,
            "type": "popup",
            "top": 700,
            "left": 800,
            "width": screen.availWidth/2,
            "height": screen.availHeight/2
        };
              
        chrome.windows.create(createData, function(){});
       
    }
});
chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "Wikit1" && clickData.selectionText){    
        var wikiUrl1 = "https://hritish.000webhostapp.com/coupons.html" ;
        


        var createData = {
            "url": wikiUrl1,
            "type": "popup",
            "top": 5,
            "left": 800,
            "width": screen.availWidth/2,
            "height": screen.availHeight/2
        };
              
        chrome.windows.create(createData, function(){});
       
    }
});