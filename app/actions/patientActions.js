
export function patient (patient) {
  console.log('Patient', patient)
  return {
    type: CURRENT_PATIENT,
    payload: patient
  }
}
