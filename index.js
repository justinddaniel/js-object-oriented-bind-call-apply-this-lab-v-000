function justInvoke (fn) {
  return fn()
}

function setThisWithCall (arg1, arg2, arg3) {
  return this.call(arg1, arg2, arg3);
}
