import { ACTIONS } from "./App"

export default function DigitButton({ dispatch, digit }) {
  return (
    <div>
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button></div>
  )
}
