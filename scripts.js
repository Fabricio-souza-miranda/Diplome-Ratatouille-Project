const faqsItemsHeaders = document.querySelectorAll(".faqs-item-header");

faqsItemsHeaders.forEach( faqsItemsHeaders => {
   faqsItemsHeaders.addEventListener("click", () =>{
      const currentlyActiveHeader = document.querySelector(".faqs-item-header.active");
      if(currentlyActiveHeader && currentlyActiveHeader != faqsItemsHeaders){
         currentlyActiveHeader.classList.toggle("active");
         currentlyActiveHeader.nextElementSibling.style.maxHeight = 0;
      }

      faqsItemsHeaders.classList.toggle("active")
      const faqsItemsBody = faqsItemsHeaders.nextElementSibling;
      if(faqsItemsHeaders.classList.contains("active")){
         faqsItemsBody.style.maxHeight = faqsItemsBody.scrollHeight + "px";
      } else {
         faqsItemsBody.style.maxHeight = 0
      }
   })
})