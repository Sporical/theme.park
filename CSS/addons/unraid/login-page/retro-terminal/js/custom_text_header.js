
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>
_______           _______           _______           _______ 
(  ____ \|\     /|(  ___  )|\     /|(  ___  )|\     /|(  ____ \
| (    \/| )   ( || (   ) |( \   / )| (   ) || )   ( || (    \/
| |      | (___) || (___) | \ (_) / | |   | || |   | || (_____ 
| |      |  ___  ||  ___  |  ) _ (  | |   | || |   | |(_____  )
| |      | (   ) || (   ) | / ( ) \ | |   | || |   | |      ) |
| (____/\| )   ( || )   ( |( /   \ )| (___) || (___) |/\____) |
(_______/|/     \||/     \||/     \|(_______)(_______)\_______)
                                                               
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
