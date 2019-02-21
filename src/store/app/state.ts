export interface State {
  firstName: string
  lastName: string
}

export default (): State => ({
  firstName: 'ジョン',
  lastName: 'ウィック'
})
