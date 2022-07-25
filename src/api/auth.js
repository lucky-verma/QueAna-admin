class AuthenticationAPI {
  constructor() {}
  static loginAdmin() {
    return serverAPI.get(`/auth/signup/`, {
      headers: {
        Authorization: `Bearer ${store.state.loginManagement.token}`,
      },
    });
  }
}
