import { ACTIONS } from "./App"

export default function OperationButton({ dispatch, operation }) {
  return (
    <div>
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button></div>
  )
}
