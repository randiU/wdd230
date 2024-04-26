let dateText = document.lastModified;

/*Convert the lastModified property into a date object*/
let date = new Date(document.lastModified);

let year = date.getFullYear();

/* Updating html footer with current date and time. */
document.getElementById("copyright-date").innerHTML = "&copy; " + year + " Randi Umphrey Utah";

document.getElementById("lastModified").innerHTML = dateText;
