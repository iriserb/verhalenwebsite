/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white:  true*/

//MODAL NOT OPENING, ANSWER ON STACKOVERFLOW: https://stackoverflow.com/questions/9778888/uncaught-typeerror-cannot-set-property-onclick-of-null
window.onload = function () {
    var sorterenModal = document.getElementById("sorterenModal");

    // Get the button that opens the modal
    var sorterenBtn = document.getElementById("buttonSorterenModal");

    // Get the <span> element that closes the modal
    var sorterenClose = document.getElementsByClassName("sorterenClose")[0];

    // When the user clicks on the button, open the modal 
    sorterenBtn.onclick = function () {
        sorterenModal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    sorterenClose.onclick = function () {
        sorterenModal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === sorterenModal) {
            sorterenModal.style.display = "none";
        }

    };

    var filterenModal = document.getElementById("filterenModal");

    // Get the button that opens the modal
    var buttonFilterenModal = document.getElementById("buttonFilterenModal");
    
    var filterenBevestig = document.getElementById("filterenBevestig");
    
    // Save all selected categories in an array and show them on the results page when filterenModal is closed.
    var categoriesList = document.getElementById("categories");

    // filteren opties
    var selectedCategories = [];
    
    categoriesList.querySelectorAll('li').forEach(function (li) {
        li.onclick = function () {
            selectedCategories.push(li.getElementsByTagName("h3")[0].textContent);
        };
    });
    
    categoriesList = document.getElementById("kinderen"); 
    selectedCategories = [];
    
    categoriesList.querySelectorAll('li').forEach(function (li) {
        li.onclick = function() {
            selectedCategories.push(li.getElementsByTagName("h3")[0].textContent);
        };
    });
    
    categoriesList = document.getElementById("leeftijd"); 
    selectedCategories = [];
    
    categoriesList.querySelectorAll('li').forEach(function (li) {
        li.onclick = function() {
            selectedCategories.push(li.getElementsByTagName("h3")[0].textContent);
        };
    });
    

    
    categoriesList = document.getElementById("lengte");
    
    selectedCategories = [];
    
    categoriesList.querySelectorAll('li').forEach(function (li) {
        li.onclick = function() {
            selectedCategories.push(li.getElementsByTagName("h3")[0].textContent);
        };
    });
    

    // Get the <span> element that closes the modal
    var closeFilterenModal = document.getElementsByClassName("filterenClose")[0];

    // When the user clicks on the button, open the modal 
    buttonFilterenModal.onclick = function() {
        filterenModal.style.display = "block";
        
    };
    
    // pas na het sluiten van filterenmodel word deze code uitgevoerd. Deze slaat de aangeklikte filter opties op in een list item en komt dan te staan in de filterlist wat een ul is.
    
    var i = document.getElementById("filterlist");
    var node = document.createElement("li");
    var textnode = document.createTextNode(selectedCategories[i]);
            
    filterenBevestig.onclick = function() { 
        /*document.getElementById("filterList").innerHTML = "";*/
        
        for (i = 0; i < selectedCategories.length; i++) {
          
            node = document.createElement("li");
            textnode = document.createTextNode(selectedCategories[i]);
            
            node.appendChild(textnode);
            document.getElementById("filterList").appendChild(node); 
        }   
        
        filterenModal.style.display = "none";
        
    };

    // When the user clicks on <span> (x), close the modal
    closeFilterenModal.onclick = function() {
        filterenModal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == filterenModal) {
            filterenModal.style.display = "none";
        }
    };
    

    //windows.onload = function() {
    //ZOEKEN MODAL - SOURCE: https://www.w3schools.com/howto/howto_css_modals.asp
    // Get the modal
    var zoekenModal = document.getElementById("zoekenModal");

    // Get the button that opens the modal
    var btnZoeken = document.getElementById("buttonZoekenModal");

    // Get the <span> element that closes the modal
    var zoekenClose = document.getElementsByClassName("zoekenClose")[0];

    // When the user clicks on the button, open the modal 
    btnZoeken.onclick = function() {
        zoekenModal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    zoekenClose.onclick = function() {
        zoekenModal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == zoekenModal) {
            zoekenModal.style.display = "none";
        }
    };
    
    // De "loader is er al" maar hij staat in css op display none dus je ziet hem niet. Pas als je klikt op sorterenB wordt het gelezen en dan wordt loader gelezen die zie je niet omdat die op display none staat. daarna wordt de functie aangesproken die een classname animate heeft. Animate staat in css en daar staat hij niet op display none, dus daarom zie je hem pas als je hebt geklikt op sorterenB. Met een setTimeot zeg je na hoelang de classlist animate moet verwijderd worden, en dat is dus 2000 dus 2 seconden. En dan verdwijnt ook het sorterenmodel waarbij je weer op de index.html terecht komt. 

    sorterenBtn = document.getElementById("sorterenB");
    var loaderEl = document.getElementById("loader");
    sorterenBtn.onclick = function() {
        loaderEl.className = "animate";
        setTimeout(function() {
            loaderEl.classList.remove("animate");
            sorterenModal.style.display = "none";
        }, 2000);
    };

    // Na 2 seconden stop loader animate, verberg loader en ga terug naar index scherm, sluit modal box
    

    
    var hartje = document.querySelectorAll(".hartje");
    
    hartje.forEach(function(h) {
        // Animeer hartje naar hartje in header
        h.onclick = function() {
            var gevuldHartje = document.getElementById("gevuld-hartje");
            gevuldHartje.className = "animate";
            setTimeout(function() {
                gevuldHartje.classList.remove("animate");
            }, 1000);
        };
    });
    
    
     document.getElementById("zoekenB").onclick = function () {
            location.href = "index.html";
        };
};

/*BRON IVO OOSTWEGEL*/
var borderAdded = false;

function addBorderOnImage(el) {
    
    if (el.style.border == "none") {
        el.setAttribute("style", "border: 3px solid #ca2b55");
    } else {
        el.setAttribute("style", "border: none");
    }
    
}

/*BRON: W3C SCHOOL*/ 
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

document.getElementById("inloggenB").onclick = function () {
            location.href = "index.html";
        };
document.getElementById("aanmeldenBtn").onclick = function () {
            location.href = "index.html";
        };


    