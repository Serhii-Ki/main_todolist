export type AppStatusActionsType = SetLoadingType | SetSuccessType | SetErrorType;

type SetLoadingType = ReturnType<typeof setLoadingAC>;

export const setLoadingAC = () => {
  return {
    type: 'SET-LOADING',
  } as const
}

type SetSuccessType = ReturnType<typeof setSuccessAC>;

export const setSuccessAC = () => {
  return {
    type: 'SET-SUCCESS',
  } as const
}

type SetErrorType = ReturnType<typeof setErrorAC>

export const setErrorAC = (error: string) => {
  return {
    type: 'SET-ERROR',
    error
  } as const
}