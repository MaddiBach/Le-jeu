function changevaluewithid(id, value) {
	document.getElementById(id).innerHTML = value;
}

function changedisplaywithid(id, value) {
	document.getElementById(id).style.display = value;
}


export { changevaluewithid, changedisplaywithid };