// STEP 1
console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}



// TODO: Add the $$ function here!

// STEP 2
// 2.1
let navLinks = $$("nav a");

// 2.2
let currentLink = "TODO: FILL IN!!"

// 2.3
if (currentLink) { // or if (currentLink !== undefined)
	// TODO: FILL IN!!
}

// STEP 3
// TODO: Remove <nav> menu from all HTML pages!
// TODO: Comment out the step 2 code in this file!

// step 3.1
let pages = [
	{url: "", title: "Home"},
	{url: "projects/", title: "Projects"},
	// TODO: add the rest of your pages here
];

let nav = document.createElement("TODO: FILL IN!!");
document.body.prepend("TODO: FILL IN!!");

// TODO: Inside index.html (our home page), add a class="home" attribute to the <html lang="en"> element!
const ARE_WE_HOME = document.documentElement.classList.contains("home");

for (let p of pages) {
	let url = p.url;
	let title = p.title;

	// Create link and add it to nav
    if (!ARE_WE_HOME && !url.startsWith("http")) {
        url = "TODO: FILL IN RELATIVE URL"
    }

	nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>` );
}


// step 3.2
// TODO: Comment out the `for (let p of pages) {...}` loop you made in step 3.1 and uncomment the for loop below! I have helped you restructure the loop a bit in a way that may be confusing from the lab instructions

/* for (let p of pages) {
	let url = p.url;
	let title = p.title;

    // Create correct relative link and add it to nav
    if (!ARE_WE_HOME && !url.startsWith("http")) {
        url = "../" + url;
    }

    let a = document.createElement("TODO: create an <a> element!");
    a.href = url;
    a.textContent = title;

    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add("TODO: FILL IN CLASS NAME");
    }

    if ("TODO: FILL IN CONDITION TO OPEN LINK IN NEW TAB") {
        a.target = "_blank";
    }

    nav.append(a);
} */

// STEP 4
// step 4.1
// TODO: Inside your styles.css file, adjust your navigation menu colors! There is nothing to do in this file in this step.

// step 4.2
document.body.insertAdjacentHTML("afterbegin", `
	<label class="color-scheme">
		Theme:
		<select>
			<option value="light dark">TODO: ADD OPTION LABEL HERE</option>
            <option value="dark">TODO: ADD OPTION LABEL HERE</option>
            TODO: ADD LIGHT MODE OPTION HERE!
		</select>
	</label>`
);

// step 4.3
// TODO: Inside your styles.css file, add styling to move the switcher with class .color-scheme to the top right corner. There is nothing to do in this file in this step

// step 4.4
let select = document.querySelector("TODO: FILL IN SELECTOR");

select.addEventListener("input", function (event) {
	console.log("color scheme changed to", event.target.value);

    // TODO: use document.documentElement.style.setProperty to set the color scheme here! (hint: take a look at the handout)

    // TODO: (step 4.5.1) uncomment the line below!
    // localStorage.colorScheme = event.target.value;
});


// step 4.5 (continued)
// Reminder: uncomment line inside the event listener for 4.5.1
if ("colorScheme" in localStorage) {
    // TODO: set color scheme to the stored local value (hint: look at handout)
}

// STEP 5 (OPTIONAL)
// Note: This is an optional part of the lab! If you want to do it, uncomment the lines below and fill in the TODOs. Otherwise, leave the lines commented out.

// TODO: Inside the /contact/index.html, remove the enctype and method attributes from the <form> element. Remove the "Email" label and input as well.

// TODO: uncomment below to select the form element!
// let form = document.querySelector("form");

// form?.addEventListener("TODO: FILL IN EVENT WE ARE WAITING FOR", function (event) {
//     event.preventDefault();
//     let data = new FormData(form);

    // let url = form.action + "?";
    // for (let [name, value] of data) {
	//     url += (name + "=" + value + "&")
	//     console.log(name, value);
    // }

        // TODO: open url here!
// })
