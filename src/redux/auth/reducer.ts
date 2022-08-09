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
        avatarId: action.payload.avatarId,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        id: action.payload.id,
        linkedIn: action.payload.linkedIn,
        googleScholar: action.payload.googleScholar,
        favourites: action.payload.favourites,
      }
    case 'LOG_OUT':
      return {
        user: '',
        role: '',
        avatarId: '',
      }
    default:
      return state
  }
}
