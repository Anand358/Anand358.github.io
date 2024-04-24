function changeItem() {
  const radios = document.querySelectorAll('input[name="slider"]');
  let currentIndex = Array.from(radios).findIndex((radio) => radio.checked);

  // Uncheck current item
  radios[currentIndex].checked = false;

  // Increment index or loop back to the first item if at the end
  currentIndex = (currentIndex + 1) % radios.length;

  // Check next item
  radios[currentIndex].checked = true;
}

// Periodically change the checked item every 1 second
setInterval(changeItem, 3000);
