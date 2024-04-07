import React from 'react'

export default function Home() {
  return (
    <div className="container">
      <main>
        <section className="py-6 md:py-12 lg:py-20 xl:py-24">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Save a life. Donate blood.
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Your donation can help save lives. Register now to become a donor.
              </p>
            </div>
            <a className="btn btn-primary" href="/">
              Register as a Donor
            </a>
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why is blood donation important?
              </h2>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Blood donation is important because maintaining an adequate blood supply in the community is essential
                to public health. Your blood donation can help save lives.
              </p>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="mx-auto w-full max-w-3xl space-y-4">
              <div className="card">
                <div className="card-header pb-0">
                  <img alt="John Doe" className="avatar" src="/placeholder.svg" />
                  <div className="space-y-1">
                    <h3 className="text-base font-bold">John Doe</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
                  </div>
                </div>
                <div className="card-content pt-0">
                  <p>
                    I donated blood today. It feels great to be able to help others. I encourage everyone to donate
                    blood and save lives.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-header pb-0">
                  <img alt="Jane Smith" className="avatar" src="/placeholder.svg" />
                  <div className="space-y-1">
                    <h3 className="text-base font-bold">Jane Smith</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">1 day ago</p>
                  </div>
                </div>
                <div className="card-content pt-0">
                  <p>
                    I donated blood today. It feels great to be able to help others. I encourage everyone to donate
                    blood and save lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="/">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="/">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}