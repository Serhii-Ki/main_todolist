export type AppActionsType = SetLoadingStatusActionType | SetSuccessedStatusActionType | SetFailedStatusActionType;

type SetLoadingStatusActionType = ReturnType<typeof setLoadingStatusAC>;

export const setLoadingStatusAC = () => {
  return {
    type: 'SET-LOADING-STATUS'
  } as  const
}

type SetSuccessedStatusActionType = ReturnType<typeof setSuccessedStatus>

export const setSuccessedStatus = () => {
  return {
    type: 'SET-SUCCESSED-STATUS'
  } as  const
}

type SetFailedStatusActionType = ReturnType<typeof setFailedStatus>

export const setFailedStatus = () => {
  return {
    type: 'SET-FAILED-STATUS'
  } as  const
}