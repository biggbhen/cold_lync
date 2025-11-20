import Link from 'next/link';

export default function LoginPage() {
	return (
		<div className='min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black px-4'>
			<div className='w-full max-w-md'>
				{/* Header */}
				<div className='text-center mb-8'>
					<Link
						href='/'
						className='text-2xl font-bold text-foreground inline-block mb-2'>
						Cold Lync
					</Link>
					<h1 className='text-3xl font-bold text-foreground mb-2'>
						Welcome back
					</h1>
					<p className='text-zinc-600 dark:text-zinc-400'>
						Sign in to your account to continue
					</p>
				</div>

				{/* Login Form */}
				<div className='bg-white dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm'>
					<form className='space-y-6' action='#' method='POST'>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-foreground mb-2'>
								Email address
							</label>
							<input
								id='email'
								name='email'
								type='email'
								autoComplete='email'
								required
								className='w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent'
								placeholder='you@example.com'
							/>
						</div>

						<div>
							<div className='flex items-center justify-between mb-2'>
								<label
									htmlFor='password'
									className='block text-sm font-medium text-foreground'>
									Password
								</label>
								<Link
									href='/auth/forgot-password'
									className='text-sm text-foreground hover:opacity-80 transition-opacity'>
									Forgot password?
								</Link>
							</div>
							<input
								id='password'
								name='password'
								type='password'
								autoComplete='current-password'
								required
								className='w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent'
								placeholder='Enter your password'
							/>
						</div>

						<div className='flex items-center'>
							<input
								id='remember-me'
								name='remember-me'
								type='checkbox'
								className='h-4 w-4 rounded border-zinc-300 dark:border-zinc-700 text-foreground focus:ring-foreground'
							/>
							<label
								htmlFor='remember-me'
								className='ml-2 block text-sm text-foreground'>
								Remember me
							</label>
						</div>

						<button
							type='submit'
							className='w-full py-2 px-4 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2'>
							Sign in
						</button>
					</form>

					<div className='mt-6 text-center'>
						<p className='text-sm text-zinc-600 dark:text-zinc-400'>
							Don&apos;t have an account?{' '}
							<Link
								href='/auth/signup'
								className='font-medium text-foreground hover:opacity-80 transition-opacity'>
								Sign up
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
