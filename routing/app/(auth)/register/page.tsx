export default function Register() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-4 py-16 font-sans dark:bg-black">
      <main className="w-full max-w-md rounded-2xl border border-black/[.08] bg-white p-8 shadow-sm dark:border-white/[.145] dark:bg-zinc-950">
        <h1 className="mb-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Create an account
        </h1>
        <p className="mb-8 text-sm text-zinc-600 dark:text-zinc-400">
          Enter your details to register.
        </p>
        <form className="flex flex-col gap-5" action="#" method="post">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="h-11 w-full rounded-lg border border-zinc-200 bg-white px-3 text-zinc-950 outline-none ring-zinc-950/10 transition-[box-shadow,border-color] placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-950/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:ring-white/10 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-white/10"
              placeholder="Jane Doe"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="h-11 w-full rounded-lg border border-zinc-200 bg-white px-3 text-zinc-950 outline-none ring-zinc-950/10 transition-[box-shadow,border-color] placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-950/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:ring-white/10 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-white/10"
              placeholder="you@example.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              minLength={8}
              className="h-11 w-full rounded-lg border border-zinc-200 bg-white px-3 text-zinc-950 outline-none ring-zinc-950/10 transition-[box-shadow,border-color] placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-950/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:ring-white/10 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-white/10"
              placeholder="••••••••"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
            >
              Confirm password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              minLength={8}
              className="h-11 w-full rounded-lg border border-zinc-200 bg-white px-3 text-zinc-950 outline-none ring-zinc-950/10 transition-[box-shadow,border-color] placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-950/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:ring-white/10 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-white/10"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="mt-2 flex h-11 w-full items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Register
          </button>
        </form>
      </main>
    </div>
  );
}
