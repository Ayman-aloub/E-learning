export function userData(
  state = { token: null, username: null, is_staff: null },
  action
) {
  if (action.type == "STOREDUSER") {
    return { ...action.payload, loaded: true };
  } else if (action.type == "STOREDUSER") {
  }
  return state;
}
