export type ActionsAuthType = SignInType

type SignInType = ReturnType<typeof signInAC>

export const signInAC = (value: boolean) => {
  return {
    type: 'SIGN_IN',
    payload: {
      value
    }
  } as const
}