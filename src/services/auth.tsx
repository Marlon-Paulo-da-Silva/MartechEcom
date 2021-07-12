export function SignIn(){
return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'sdskmjksdmjskdskkdnksnds',
        user: {
          name: 'Marlon',
          email: 'marlon@marlon.br'
        }
      })
    }, 2000);
});
}