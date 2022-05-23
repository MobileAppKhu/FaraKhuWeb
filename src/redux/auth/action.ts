export const saveUser = (user: any) => ({
  type: 'SAVE_USER',
  payload: user
})
export const logOut = () => ({
  type: 'LOG_OUT',
  payload: undefined
})
