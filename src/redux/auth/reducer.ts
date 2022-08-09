const INIT_STATE = {
  user: '',
  role: '',
  token: undefined,
}
// eslint-disable-next-line @typescript-eslint/default-param-last, default-param-last
export default function authReducer(state:any = INIT_STATE, action: any) {
  switch (action.type) {
    case 'SAVE_USER':
      return {
        ...state,
        role: action.payload.roles[0],
        userId: action.payload.userId,
      }
    case 'LOG_OUT':
      return {
        user: '',
        role: '',
      }
    default:
      return state
  }
}
