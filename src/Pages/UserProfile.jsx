import { use, useEffect, useState } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import toast from 'react-hot-toast'
import { MdEdit, MdEmail, MdPerson } from 'react-icons/md'
import { useNavigate } from 'react-router'
import useAxios from '../Hooks/useAxios'

const UserProfile = () => {
  const { user, updateUser, setLoading } = use(AuthContext)
  const navigate = useNavigate()

  const [courses, setCourses] = useState([])
  const [addedCourses, setAddedCourses] = useState([])
  const axiosInstance = useAxios()
  //   console.log(courses)

  useEffect(() => {
    axiosInstance.get(`/enrolled?email=${user.email}`).then((res) => {
      setCourses(res.data)
    })
  }, [user, axiosInstance])

  useEffect(() => {
    axiosInstance.get(`/myaddedcourses/?email=${user.email}`).then((data) => {
      setAddedCourses(data.data)
    })
  }, [user, axiosInstance])

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    displayName: user?.displayName || '',
    photoURL: user?.photoURL || '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    updateUser({
      displayName: formData.displayName,
      photoURL: formData.photoURL,
    })
      .then(() => {
        toast.success('Profile updated successfully!')
        setIsEditing(false)
        setLoading(false)
      })
      .catch((error) => {
        toast.error('Failed to update profile: ' + error.message)
        setLoading(false)
      })
  }

  const handleCancel = () => {
    setFormData({
      displayName: user?.displayName || '',
      photoURL: user?.photoURL || '',
    })
    setIsEditing(false)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">My Profile</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="md:col-span-1">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="avatar">
                <div className="w-32 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                  {user?.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName} />
                  ) : (
                    <div className="bg-secondary text-white flex items-center justify-center text-4xl">
                      <MdPerson />
                    </div>
                  )}
                </div>
              </div>
              <h2 className="card-title mt-4">{user?.displayName || 'User'}</h2>
              <p className="text-sm text-gray-600">{user?.email}</p>
              <div className="badge badge-secondary mt-2">
                {user?.emailVerified ? 'Verified' : 'Not Verified'}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="card bg-base-100 shadow-xl mt-4">
            <div className="card-body">
              <h3 className="font-bold mb-3">Quick Stats</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Enrolled Courses</span>
                  <span className="font-semibold">{courses.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Added Courses</span>
                  <span className="font-semibold">{addedCourses.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Member Since</span>
                  <span className="font-semibold">
                    {new Date(user?.metadata?.creationTime).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details & Edit Form */}
        <div className="md:col-span-2">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center mb-4">
                <h2 className="card-title">Profile Information</h2>
                {!isEditing && (
                  <button onClick={() => setIsEditing(true)} className="btn btn-secondary btn-sm">
                    <MdEdit /> Edit Profile
                  </button>
                )}
              </div>

              {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block mb-2 font-medium">Display Name</label>
                    <input
                      type="text"
                      name="displayName"
                      value={formData.displayName}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">Photo URL</label>
                    <input
                      type="url"
                      name="photoURL"
                      value={formData.photoURL}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      placeholder="https://example.com/photo.jpg"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      value={user?.email}
                      disabled
                      className="input input-bordered w-full bg-base-200"
                    />
                    <p className="text-sm text-gray-500 mt-1">Email cannot be changed</p>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button type="submit" className="btn btn-secondary flex-1">
                      Save Changes
                    </button>
                    <button type="button" onClick={handleCancel} className="btn btn-outline flex-1">
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block mb-1 font-medium text-gray-600">Display Name</label>
                    <p className="text-lg">{user?.displayName || 'Not set'}</p>
                  </div>

                  <div>
                    <label className="block mb-1 font-medium text-gray-600">Email</label>
                    <p className="text-lg flex items-center gap-2">
                      <MdEmail className="text-secondary" />
                      {user?.email}
                    </p>
                  </div>

                  <div>
                    <label className="block mb-1 font-medium text-gray-600">Photo URL</label>
                    <p className="text-sm break-all text-gray-700">{user?.photoURL || 'Not set'}</p>
                  </div>

                  <div>
                    <label className="block mb-1 font-medium text-gray-600">Account Created</label>
                    <p className="text-lg">
                      {new Date(user?.metadata?.creationTime).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>

                  <div>
                    <label className="block mb-1 font-medium text-gray-600">Last Sign In</label>
                    <p className="text-lg">
                      {new Date(user?.metadata?.lastSignInTime).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card bg-base-100 shadow-xl mt-4">
            <div className="card-body">
              <h3 className="font-bold mb-3">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => navigate('/myenrolledcourses')} className="btn btn-outline">
                  My Enrolled Courses
                </button>
                <button onClick={() => navigate('/addcourse')} className="btn btn-outline">
                  Add New Course
                </button>
                <button onClick={() => navigate('/myaddedcourses')} className="btn btn-outline">
                  My Added Courses
                </button>
                <button onClick={() => navigate('/allcourses')} className="btn btn-outline">
                  Browse Courses
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
