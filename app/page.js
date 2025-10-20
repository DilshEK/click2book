import SignupPage from './SignUp';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold text-primary">🚀 Click2Book</h1>
      <button className="btn btn-primary">Hello DaisyUI</button>
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">DaisyUI Card</h2>
          <p>This is a working setup of Tailwind + DaisyUI!</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Nice!</button>
          </div>
        </div>
      </div>
    </main>
  );
}
