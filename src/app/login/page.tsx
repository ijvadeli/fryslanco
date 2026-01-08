import { LoginForm } from "@/src/_components/login/login-form"
import { login, signup } from "./action"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
            <form>
              <label htmlFor="email">Email:</label>
              <input id="email" name="email" type="email" required />
              <label htmlFor="password">Password:</label>
              <input id="password" name="password" type="password" required />
              <button formAction={login}>Log in</button>
              <button formAction={signup}>Sign up</button>
            </form>
      </div>
    </div>
  )
}
