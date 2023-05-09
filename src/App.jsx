
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  

  return (
    <>

      <div className='p-24 bg-gray-100'>
       <Link> <button className='btn btn-black'>Back</button></Link>
        <h1 className='text-center font-extrabold text-purple-600 text-4xl'>Chocolate Add Form</h1>

        <form>
          <div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Chocolate Name</span>
              </label>
              <label className="input-group">

                <input name='name' type="text" placeholder="Chocolate Name" className="w-full input input-bordered" />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Country</span>
              </label>
              <label className="input-group">

                <input name='country' type="text" placeholder="Country" className="w-full input input-bordered" />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Category</span>
              </label>
              <label className="input-group">

                <input name='category' type="text" placeholder="Category" className="w-full input input-bordered" />
              </label>
            </div>
          

          </div>
          <div className="form-control w-full mt-8">
            <input type="submit"  className='btn btn-black' value="Save" />
            </div>
      
        </form>
      </div>
    </>
  )
}

export default App
