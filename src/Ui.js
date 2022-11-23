function changevaluewithid(id, value) {
	let element = document.getElementById(id);
	if (element != null) {
		element.innerHTML = value;
	}
}

function changedisplaywithid(id, value) {
	document.getElementById(id).style.display = value;
}

export { changevaluewithid, changedisplaywithid };
