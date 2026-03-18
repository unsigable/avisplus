const accordionContent = document.querySelectorAll(".accrodion-content");

accordionContent.forEach((item, index) => {
	let header = item.querySelector(".acc-header");
	header.addEventListener("click", () => {
		item.classList.toggle("open");

		let description = item.querySelector(".description");
		if(item.classList.contains("open")){
			description.style.height = `${description.scrollHeight}px`;
			item.getElementById("sign").classList.replace("closed", "shown");
		}else{
			description.style.height = "0px";
			// item.getElementById("sign").classList.replace("shown", "closed");
		}
		// removeOpen(index);
	})
})

// function removeOpen(index1){
// 	accordionContent.forEach((item2, index2) => {
// 		if(index1 != index2){
// 			item2.classList.remove("open");

// 			let des = item2.querySelector(".description");
// 			des.style.height = "0px";
// 		}
// 	})
// }