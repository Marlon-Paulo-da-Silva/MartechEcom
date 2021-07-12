interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function SignIn(): Promise<Response> {
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