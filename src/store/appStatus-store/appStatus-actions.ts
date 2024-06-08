export type AppStatusActionsType = SetLoadingType | SetSuccessType;

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