(function maybeClickManageInterviewAppointment () {
  const manageInterviewAppointmentButton = document.querySelector('.bluebutton[name="manageAptm"]');
  if (manageInterviewAppointmentButton) {
    manageInterviewAppointmentButton.click();
  }
})();

(function maybeClickRescheduleAppointment () {
  const reschedulAppointmentButton = document.querySelector('input[name="reschedule"]');
  if (reschedulAppointmentButton) {
    reschedulAppointmentButton.click();
  }
})();

(function maybeSelectLocation () {
  const sfEnrollmentCenterId = "5446";
  const locationDropdown = document.getElementById('selectedEnrollmentCenter');
  if (locationDropdown) {
    locationDropdown.value = sfEnrollmentCenterId;
    document.querySelector('input[name="next"]').click();
  }
})();