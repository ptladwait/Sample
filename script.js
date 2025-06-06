document.addEventListener("DOMContentLoaded", () => {
  const clock = document.getElementById("clock");
  const form = document.getElementById("attendance-form");
  const nameInput = document.getElementById("employee-name");
  const shiftSelect = document.getElementById("shift");
  const feedback = document.getElementById("feedback");
  const attendanceList = document.getElementById("attendance-list");
  const clearBtn = document.getElementById("clear-log");

  // Live Clock
  function updateClock() {
    const now = new Date();
    clock.textContent = now.toLocaleString();
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Add Attendance Entry
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const shift = shiftSelect.value;

    if (!name) {
      feedback.textContent = "Employee name cannot be empty.";
      feedback.style.color = "red";
      return;
    }

    const time = new Date().toLocaleTimeString();
    const li = document.createElement("li");
    li.textContent = `${name} - ${shift} - ${time}`;
    attendanceList.appendChild(li);

    feedback.textContent = "Attendance marked successfully!";
    feedback.style.color = "green";

    // Reset form
    form.reset();

    // Clear message after delay
    setTimeout(() => {
      feedback.textContent = "";
    }, 3000);
  });

  // Clear Attendance Log
  clearBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear all attendance records?")) {
      attendanceList.innerHTML = "";
    }
  });
});
