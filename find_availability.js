const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

(function maybeClickManageInterviewAppointment() {
  const manageInterviewAppointmentButton = document.querySelector('.bluebutton[name="manageAptm"]');
  if (manageInterviewAppointmentButton) {
    manageInterviewAppointmentButton.click();
  }
})();

(function maybeClickRescheduleAppointment() {
  const rescheduleAppointmentButton = document.querySelector('input[name="reschedule"]');
  if (rescheduleAppointmentButton) {
    localStorage.setItem('date', getScheduledAppointmentDateInMilliseconds());
    rescheduleAppointmentButton.click();
  }
})();

function arrayify(nodesArray) {
  return Array.prototype.slice.call(nodesArray);
}

function getScheduledAppointmentDateInMilliseconds() {
  const pWithDate = arrayify(document.querySelectorAll('p'))
    .find(p => p.innerText.includes('Interview Date'));

  let match = pWithDate.innerText.match(/Interview Date: (\w+) (\d+), (\d{4})/);
  const [_, monthSubString, day, year] = match;
  const month = months.findIndex(month => month.startsWith(monthSubString));

  return new Date(year, month, day).getTime();
}

(function maybeSelectLocation() {
  const sfEnrollmentCenterId = "5446";
  const locationRadioInput = document.querySelector(`input[value="${sfEnrollmentCenterId}"]`);
  if (locationRadioInput) {
    locationRadioInput.click();
    document.querySelector('input[name="next"]').click();
  }
})();

(function isDateGood() {
  const doneButtonOnSchedulePageWithStupidId = document.getElementById('scheduleForm:j_id_id23');
  if (doneButtonOnSchedulePageWithStupidId) {
    const date = document.querySelector('.date').innerText.replace(/[\s,]+/g, ' ').trim();
    const [day, dayOfWeek, monthString, year] = date.split(' ');
    const dateInMilliseconds = new Date(year, months.indexOf(monthString), day).getTime();
    if (parseInt(localStorage.getItem('date')) > dateInMilliseconds) {
      alert('appointment available!!!');
    } else {
      setTimeout(() => {
        doneButtonOnSchedulePageWithStupidId.click();
      }, 5000);
    }
  }
})();