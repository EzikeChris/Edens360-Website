const storagePlugin = store => {
  store.subscribe((mutation, state) => {
    if(mutation.type.includes('auth/')) {
      // localStorage.setItem('ed-reg', JSON.stringify(state.auth))
    }
  })
}

// export const plugins = [storagePlugin]
