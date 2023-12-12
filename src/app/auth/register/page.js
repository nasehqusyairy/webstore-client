"use client"
import ErrorMessage from "@/components/errorMessage";
import { useRootState } from "@/context/RootStateContext";
import http from "@/helpers/http";
import Link from "next/link";
import { useState } from "react";

function RegisterPage() {

  const { error, setError, } = useRootState();

  const [success, setSuccess] = useState('');
  const [isProccessing, setIsProccessing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('')
  const [verifyPassword, setVerifyPassword] = useState('')

  const handleOnsubmit = (e) => {
    e.preventDefault()
    setIsProccessing(true)
    if (password !== verifyPassword) {
      setIsProccessing(false)
      setError('Password does not match')
    } else {
      http.post('/register', { name, email, password, phone }).then(() => {
        setSuccess('Register success, please login')
        setName('')
        setEmail('')
        setPhone('')
        setPassword('')
        setVerifyPassword('')
      }).catch((err) => {
        setError((err.response?.data.message || err.message) + ` (${err.response?.status})`)
      }).finally(() => {
        setIsProccessing(false)
      })
    }
  }
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center" id="auth">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleOnsubmit}>
                <h3>Sign Up</h3>
                <hr />
                {error && <ErrorMessage />}
                {success && <div className="alert alert-success alert-dismissible fade show" role="alert">
                  {success}
                  <button type="button" onClick={() => setSuccess('')} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>}
                <div id="alert" className="alert alert-danger alert-dismissible fade show d-none" role="alert">
                  Password does not match
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="mb-3">
                  <label htmlFor="name">Name</label>
                  <input value={name} onChange={e => setName(e.target.value)} type="text" id="name" name="name" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone">Phone</label>
                  <input value={phone} onChange={e => setPhone(e.target.value)} type="number" name="phone" id="phone" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="verify_password">Verify Password</label>
                  <input value={verifyPassword} onChange={e => setVerifyPassword(e.target.value)} type="password" name="verify_password" id="verify_password" className="form-control" required />
                </div>
                <div className="d-grid gap-2 text-center">
                  <button disabled={isProccessing} className="btn btn-primary">{isProccessing ? 'Proccessing...' : 'Submit'}</button>
                  <span>
                    Already have an account? <Link href="/auth">Sign In</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;