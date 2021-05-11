const calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".row");

const calendarDay = 24;

const openDoor = (path, event) => {
  event.target.style.backgroundImage = `url(${path})`;
  
};
const createCalendar = () => {
  for (i = 0; i < calendarDay; i++) {
    const door = document.createElement("div");

    const contentDoor = document.createElement("div");

    door.classList.add("col-3");

    calendarContainer.appendChild(door);

    contentDoor.classList.add("item");
    
    contentDoor.style.height = 'inherit'; // kế thừa từ thẻ cha

    contentDoor.innerHTML = i +1; 

    contentDoor.style.color = "white";


    door.appendChild(contentDoor);

      courseNumber = i +1;

    let coursePath = `courses/course-${courseNumber}.jpg`;  
    contentDoor.addEventListener("click",function(e) {
      openDoor(coursePath, e);
    });
  }
};

calendarButton.addEventListener("click", createCalendar);
